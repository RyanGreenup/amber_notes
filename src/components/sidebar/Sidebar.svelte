<script lang="ts">
  import { Folder, File, Plus } from "@lucide/svelte";
  import {
    getRootNotes,
    findNoteById,
    notesMap,
    rootNoteIds,
  } from "../../stores/notesStore";
  import { onMount } from "svelte";
  import SidebarTree from "./SidebarTree.svelte";
  import SidebarList from "./SidebarList.svelte";
  import { get_shelves, ShelfType } from "../../stores/shelfStore.ts";
  import { selectedShelfId } from "../../stores/selectedShelfStore";

  export let isOpen: boolean = true;

  $: rootNotes = getRootNotes();

  // Default to root shelves
  let currentParentId = "root";
  let shelves = get_shelves(currentParentId);

  // Track if we're viewing a book
  let isViewingBook = false;

  // Update shelves when selected shelf changes
  selectedShelfId.subscribe((id) => {
    if (id) {
      currentParentId = id;
      shelves = get_shelves(id);

      // Check if the selected item is a book
      const selectedShelf = Object.values(shelves).find(
        (shelf) => shelf.id === id,
      );
      isViewingBook = selectedShelf?.type === ShelfType.BOOK;
    }
  });
</script>

<div
  class="my-sidebar-style bg-base-200 {isOpen
    ? 'w-64'
    : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col"
>
  <h1 class="prose">
    {isViewingBook}
  </h1>

  {#if isViewingBook}
    <SidebarTree note_list={rootNotes} />
  {:else}
    <SidebarList {shelves} />
  {/if}
</div>

<style>
  .my-sidebar-style {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
