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

/**
 * Returns a map of shelves from the database / API
 * (Possibly based on the Dewey Decimal Classification system?)
 * Each shelf represents a main category in the classification.
 *
 * If the nesting level (determined by number of slashes in parent_id) 
 * exceeds the maximum depth, a TerminalShelf is returned instead.
 *
 * @param parent_id - The ID of the parent shelf
 * @returns A map of shelf objects indexed by their IDs or a TerminalShelf
 *
 */
export function get_shelves(parent_id: string): ShelfMap | TerminalShelf {
  // Define maximum nesting depth
  const MAX_NESTING_DEPTH = 2;
  
  // Count slashes to determine nesting level
  const slashCount = (parent_id.match(/\//g) || []).length;
  
  // If we've reached maximum nesting depth, return a TerminalShelf
  if (slashCount >= MAX_NESTING_DEPTH) {
    return {
      id: parent_id,
      title: parent_id,
      description: "Terminal shelf - maximum nesting depth reached",
      type: "terminal",
      createdAt: new Date(),
      updatedAt: new Date(),
      books: [
        {
          id: `${parent_id}/book1`,
          title: "Sample Book",
          description: "This is a sample book in a terminal shelf",
          children: []
        }
      ]
    };
  }
  
  // Otherwise, continue with normal shelf creation
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

  let shelves: ShelfMap = {};

  // Properly iterate through the shelves_list array
  for (const shelf of shelves_list) {
    const item_id = parent_id ? parent_id + "/" + shelf.id : shelf.id;
    shelves[item_id] = shelf;
  }

  // Only modify the IDs and titles if parent_id is provided
  if (parent_id && parent_id.trim() !== "") {
    for (const id in shelves) {
      shelves[id].title = parent_id + "/" + shelves[id].title;
      shelves[id].id = parent_id + "/" + shelves[id].id;
    }
  }

  return shelves;
}
