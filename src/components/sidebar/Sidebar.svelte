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

  export let isOpen: boolean = true;

  $: rootNotes = getRootNotes();

  /* For Devel */
  const shelves = get_shelves("root");
</script>

<div
  class="my-sidebar-style bg-base-200 {isOpen
    ? 'w-64'
    : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col"
>
// When the user selects a shelf in the sidebar list the shelves corresponding to that parent ID should be set AI!
  <SidebarList {shelves} />
  <!-- <SidebarTree note_list={rootNotes} /> -->
</div>

<style>
  .my-sidebar-style {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
