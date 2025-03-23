import { writable, get } from "svelte/store";
import type { Note } from "./notesStore.ts";

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
}

// shelves can contain other shelves
// Maybe we'll call these aisles?
// Correspond to the x's in xxx.yyyy for dewey decimal
export interface Shelf {
  id: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// This is the physical timber on a bookshelf, like the tier/actual shelf/row
// this can only contain books
export interface TerminalShelf {
  id: string;
  title: string;
  description: string;
  type: "terminal"; // Cannot contain other shelves, only books
  createdAt?: Date;
  updatedAt?: Date;
  books: Book[]; // Only books, no shelves
}

export interface ShelfMap {
  [id: string]: Shelf;
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
 * Returns a map of shelves from the database / API
 * (Possibly based on the Dewey Decimal Classification system?)
 * Each shelf represents a main category in the classification.
 *
 * Right now this is a mere placeholder as it's not wired in just yet.
 *
 * @param parent_id - The ID of the parent shelf (currently unused)
 * @returns A map of shelf objects indexed by their IDs
 *
 */
export function get_shelves(parent_id: string): ShelfMap {
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

  // Transform the shelves list into a map using the utility function
  let shelves: ShelfMap = transformShelvesToMap(shelves_list, parent_id);

  return shelves;
}
