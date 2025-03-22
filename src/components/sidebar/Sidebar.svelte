<script lang="ts">
  import { Folder, File, Plus } from "@lucide/svelte";
  import { notes } from "../../stores/notesStore";
  
  export let isOpen: boolean = true;
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
      {#each $notes as note}
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
                {#each note.children || [] as child}
                  <li>
                    <a class="flex items-center gap-2">
                      <File size={16} />
                      <span>{child.title}</span>
                    </a>
                  </li>
                {/each}
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
