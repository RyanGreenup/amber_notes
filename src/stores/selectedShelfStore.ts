import { writable } from 'svelte/store';

// Store for the currently selected shelf ID
export const selectedShelfId = writable<string | null>(null);
