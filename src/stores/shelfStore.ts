import { writable, get } from "svelte/store";
import { Note } from "./notesStore.ts";

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
  content?: string;
  children?: string[] | number[];
  createdAt?: Date;
  updatedAt?: Date;
}

function get_shelves(parent_id: String) {
  console.log("Not Implemented");
}
