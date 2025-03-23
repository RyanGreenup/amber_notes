import { writable, get } from "svelte/store";
import type { Note } from "./notesStore.ts";

// Combine the Shelf and TerminalShelf into a single type AI!

export enum ShelfType {
  BOOK = "book_object_type",
  HIERARCHY = "hierarchy_shelf_type",
  TERMINAL = "terminal_shelf_type",
}

export interface Folder {
  id: string;
  title: string;
  description: string;
  children: Folder[] | Note[];
}

export interface Book {
  id: string;
  title: string;
  description: string;
  children: Folder[];
  type: ShelfType.BOOK;
}

// shelves can contain other shelves
// Maybe we'll call these aisles?
// Correspond to the x's in xxx.yyyy for dewey decimal
export interface Shelf {
  id: string;
  title: string;
  description: string;
  type: ShelfType.HIERARCHY;
  createdAt?: Date;
  updatedAt?: Date;
}

// This is the physical timber on a bookshelf, like the tier/actual shelf/row
// this can only contain books
export interface TerminalShelf {
  id: string;
  title: string;
  description: string;
  type: ShelfType.TERMINAL; // Cannot contain other shelves, only books
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ShelfMap {
  [id: string]: Shelf;
}

export interface BookMap {
  [id: string]: Book;
}

export interface TerminalShelfMap {
  [id: string]: TerminalShelf;
}

/**
 * Transforms a list of shelves into a map
 *
 * This is for use in debugging and takes the parent_id to create a nested
 * level of hierarchy for testing purposes
 *
 * @param shelves - Array of Shelf or TerminalShelf objects to transform
 * @param parentId - Optional parent ID to prefix shelf IDs
 * @returns A map of shelf objects indexed by their IDs
 */
export function transformShelvesToMap<T extends Shelf | TerminalShelf>(
  shelves: T[],
  parentId?: string,
): { [id: string]: T } {
  const shelfMap: { [id: string]: T } = {};

  for (const shelf of shelves) {
    const id = parentId ? `${parentId}/${shelf.id}` : shelf.id;
    shelfMap[id] = {
      ...shelf,
      id: id,
      title: parentId ? `${parentId}/${shelf.title}` : shelf.title,
    } as T;
  }

  return shelfMap;
}

/**
 * Returns a map of shelves or terminal shelves from the database / API
 * (Based on the Dewey Decimal Classification system)
 * Each shelf represents a main category in the classification.
 *
 * If the parent_id contains more than 3 slashes, it returns terminal shelves
 * which can only contain books, not other shelves.
 *
 * @param parent_id - The ID of the parent shelf
 * @returns A map of shelf, terminal shelf, or book objects indexed by their IDs
 */
export function get_shelves(
  parent_id: string,
): ShelfMap | TerminalShelfMap | BookMap {
  // Count the number of slashes in parent_id
  const slashCount = (parent_id.match(/\//g) || []).length;

  // If we're at a very deep level (more than 4 slashes), return books
  if (slashCount > 4) {
    return get_books(parent_id);
  }

  // If we're at a deep level (more than 3 slashes), return terminal shelves
  if (slashCount > 3) {
    const terminalShelves: TerminalShelf[] = [
      {
        id: "001",
        title: "001",
        description: "Knowledge",
        type: ShelfType.TERMINAL,
      },
      {
        id: "002",
        title: "002",
        description: "The book",
        type: ShelfType.TERMINAL,
      },
      {
        id: "003",
        title: "003",
        description: "Systems",
        type: ShelfType.TERMINAL,
      },
      {
        id: "004",
        title: "004",
        description: "Data processing & Computer science",
        type: ShelfType.TERMINAL,
      },
      {
        id: "005",
        title: "005",
        description: "Computer programming",
        type: ShelfType.TERMINAL,
      },
    ];

    return transformShelvesToMap(terminalShelves, parent_id);
  }

  // Otherwise return regular shelves
  let shelves_list: Shelf[] = [
    {
      id: "000",
      title: "000",
      description: "Computer science, information & general works",
    },
    { id: "100", title: "100", description: "Philosophy & psychology" },
    { id: "200", title: "200", description: "Religion" },
    { id: "300", title: "300", description: "Social sciences" },
    { id: "400", title: "400", description: "Language" },
    { id: "500", title: "500", description: "Science" },
    { id: "600", title: "600", description: "Technology" },
    { id: "700", title: "700", description: "Arts & recreation" },
    { id: "800", title: "800", description: "Literature" },
    { id: "900", title: "900", description: "History & geography" },
  ];

  for (const item_id in shelves_list) {
    shelves_list[item_id].type = ShelfType.HIERARCHY;
  }

  // Transform the shelves list into a map using the utility function
  return transformShelvesToMap(shelves_list, parent_id);
}

/**
 * Returns a map of books from the database / API
 *
 * @param parent_id - The ID of the parent shelf
 * @returns A map of book objects indexed by their IDs
 */
export function get_books(parent_id: string): BookMap {
  const books: Book[] = [
    {
      id: "book1",
      title: "Introduction to Programming",
      description: "A beginner's guide to programming concepts",
      children: [],
      type: ShelfType.BOOK,
    },
    {
      id: "book2",
      title: "Advanced Data Structures",
      description: "In-depth exploration of complex data structures",
      children: [],
      type: ShelfType.BOOK,
    },
    {
      id: "book3",
      title: "Web Development Fundamentals",
      description: "Essential concepts for modern web development",
      children: [],
      type: ShelfType.BOOK,
    },
    {
      id: "book4",
      title: "Machine Learning Basics",
      description: "Introduction to machine learning algorithms",
      children: [],
      type: ShelfType.BOOK,
    },
  ];

  return transformShelvesToMap(books, parent_id);
}
