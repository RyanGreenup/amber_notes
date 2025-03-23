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

export interface Shelf {
  id: string;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ShelfMap {
  [id: string]: Shelf;
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
 *
 */
// Fix this function AI!
export function get_shelves(parent_id: string): ShelfMap {
  let shelves_list: Shelf[] = [
    { id: "000", title: "000", description: "Computer science, information & general works", },
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

  let shelves: ShelfMap = {}

  for (shelf in shelves_list) {
      shelves[shelf.id] = shelf
  }


  for (const id in shelves) {
    shelves[id].title = parent_id + "/" + shelves[id].title;
    shelves[id].id = parent_id + "/" + shelves[id].id;
  }

  return shelves;
}
