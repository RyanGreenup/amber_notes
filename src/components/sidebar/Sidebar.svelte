<script lang="ts">
  import { Folder, File, Plus } from "@lucide/svelte";
  import { getRootNotes, findNoteById, notesMap, rootNoteIds } from "../../stores/notesStore";
  import { onMount } from "svelte";

  export let isOpen: boolean = true;
  
  $: rootNotes = getRootNotes();
</script>

<div
  class="sidebar bg-base-200 {isOpen
    ? 'w-64'
    : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col"
>
  <div class="p-4 flex justify-between items-center">
    <h2 class="font-bold">Notes</h2>
    <button class="btn btn-sm btn-ghost btn-circle">
      <Plus size={18} />
    </button>
  </div>

  <div class="sidebar-content flex-1 overflow-y-auto">
    <ul class="menu p-2 gap-1">
      {#each rootNotes as note}
        {#if note.type === "file"}
          <li>
            <a class="flex items-center gap-2">
              <File size={16} />
              <span>{note.title}</span>
            </a>
          </li>
        {:else if note.type === "folder"}
          <li>
            <details>
              <summary class="flex items-center gap-2">
                <Folder size={16} />
                <span>{note.title}</span>
              </summary>
              <ul>
                {#if note.children && note.children.length > 0}
                  {#each note.children as childId}
                    {@const child = findNoteById(childId)}
                    {#if child}
                      <li>
                        <a class="flex items-center gap-2">
                          {#if child.type === "file"}
                            <File size={16} />
                          {:else}
                            <Folder size={16} />
                          {/if}
                          <span>{child.title}</span>
                        </a>
                      </li>
                    {/if}
                  {/each}
                {/if}
              </ul>
            </details>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>

<style>
  .sidebar {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
