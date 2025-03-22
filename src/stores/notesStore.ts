import { writable } from "svelte/store";

export interface Note {
  id: number;
  title: string;
  type: "file" | "folder";
  children?: Note[];
}

// Mock data for sidebar
const initialNotes: Note[] = [
  { id: 1, title: "Welcome Note", type: "file" },
  { id: 2, title: "Getting Started", type: "file" },
  {
    id: 3,
    title: "Projects",
    type: "folder",
    children: [
      { id: 4, title: "Project A", type: "file" },
      { id: 5, title: "Project B", type: "file" },
    ],
  },
  { id: 6, title: "Ideas", type: "folder", children: [] },
];

export const notes = writable<Note[]>(initialNotes);
