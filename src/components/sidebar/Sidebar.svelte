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

  export let isOpen: boolean = true;

  $: rootNotes = getRootNotes();
</script>

<div
  class="my-sidebar-style bg-base-200 {isOpen
    ? 'w-64'
    : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col"
>
  <div class="p-4 flex justify-between items-center">
    <h2 class="font-bold">Notes</h2>
    <button class="btn btn-sm btn-ghost btn-circle">
      <Plus size={18} />
    </button>
  </div>








  // AI: The component is used here
  <SidebarTree note_list={rootNotes} />










  <!-- <SidebarList note_list={rootNotes} /> -->
</div>

<style>
  .my-sidebar-style {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
