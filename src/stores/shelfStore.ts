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
 * Returns a map of shelves based on the Dewey Decimal Classification system.
 * Each shelf represents a main category in the classification.
 * 
 * @param parent_id - The ID of the parent shelf (currently unused)
 * @returns A map of shelf objects indexed by their IDs
 */
export function get_shelves(parent_id: String): ShelfMap {
  const shelves: ShelfMap = {
    "000": {
      id: "000",
      title: "000",
      description: "Computer science, information & general works",
    },
    "100": { id: "100", title: "100", description: "Philosophy & psychology" },
    "200": { id: "200", title: "200", description: "Religion" },
    "300": { id: "300", title: "300", description: "Social sciences" },
    "400": { id: "400", title: "400", description: "Language" },
    "500": { id: "500", title: "500", description: "Science" },
    "600": { id: "600", title: "600", description: "Technology" },
    "700": { id: "700", title: "700", description: "Arts & recreation" },
    "800": { id: "800", title: "800", description: "Literature" },
    "900": { id: "900", title: "900", description: "History & geography" },
  };

  return shelves;
}
