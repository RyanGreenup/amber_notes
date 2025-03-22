import { writable } from "svelte/store";

export interface Note {
  id: number;
  title: string;
  type: "file" | "folder";
  content?: string;
  children?: Note[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Mock data for sidebar
const initialNotes: Note[] = [
  { 
    id: 1, 
    title: "Welcome Note", 
    type: "file",
    content: "# Welcome to AmberNotes!\n\nThank you for trying out AmberNotes. This is a simple note-taking application built with Tauri, Svelte, and Rust.\n\n## Features\n\n- Fast and lightweight\n- Markdown support\n- Folder organization\n- Dark mode support",
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15')
  },
  { 
    id: 2, 
    title: "Getting Started", 
    type: "file",
    content: "# Getting Started with AmberNotes\n\n## Basic Usage\n\n1. Create new notes using the + button\n2. Organize notes into folders\n3. Use markdown for formatting\n4. Search your notes with the search button\n\n## Keyboard Shortcuts\n\n- Ctrl+N: New note\n- Ctrl+S: Save note\n- Ctrl+F: Search",
    createdAt: new Date('2025-01-16'),
    updatedAt: new Date('2025-02-01')
  },
  {
    id: 3,
    title: "Projects",
    type: "folder",
    children: [
      { 
        id: 4, 
        title: "Project A", 
        type: "file",
        content: "# Project A\n\n## Objectives\n\n- Implement core functionality\n- Design user interface\n- Test with users\n\n## Timeline\n\n- Phase 1: Planning (2 weeks)\n- Phase 2: Development (4 weeks)\n- Phase 3: Testing (2 weeks)\n- Phase 4: Deployment (1 week)",
        createdAt: new Date('2025-02-10'),
        updatedAt: new Date('2025-02-15')
      },
      { 
        id: 5, 
        title: "Project B", 
        type: "file",
        content: "# Project B\n\n## Requirements\n\n- User authentication system\n- Data synchronization\n- Offline support\n- Cross-platform compatibility\n\n## Resources\n\n- 2 developers\n- 1 designer\n- 1 QA engineer",
        createdAt: new Date('2025-02-20'),
        updatedAt: new Date('2025-03-01')
      },
    ],
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date('2025-03-01')
  },
  { 
    id: 6, 
    title: "Ideas", 
    type: "folder", 
    children: [],
    createdAt: new Date('2025-03-10'),
    updatedAt: new Date('2025-03-10')
  },
];

export const notes = writable<Note[]>(initialNotes);

// Helper function to find a note by ID
export function findNoteById(notes: Note[], id: number): Note | null {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
    if (note.children) {
      const found = findNoteById(note.children, id);
      if (found) return found;
    }
  }
  return null;
}
