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
  import { get_shelves } from "../../stores/shelfStore.ts";
  import { selectedShelfId } from "../../stores/selectedShelfStore";

  export let isOpen: boolean = true;

  $: rootNotes = getRootNotes();

  // Default to root shelves
  let currentParentId = "root";
  let shelves = get_shelves(currentParentId);

  // Update shelves when selected shelf changes
  selectedShelfId.subscribe((id) => {
    if (id) {
      currentParentId = id;
      shelves = get_shelves(id);
    }
  });
</script>

<div
  class="my-sidebar-style bg-base-200 {isOpen
    ? 'w-64'
    : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col"
>

  <SidebarList {shelves} />
  <!-- <SidebarTree note_list={rootNotes} /> -->
</div>

<style>
  .my-sidebar-style {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
