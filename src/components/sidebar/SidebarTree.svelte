<script lang="ts">
  import { File, Folder } from "@lucide/svelte";
  import type { Note } from "../../stores/notesStore";
  import { findNoteById } from "../../stores/notesStore";

// No notes are displayed in the sidebar, fix this AI!
  let note_list: Note[] = [];
</script>

<div class="sidebar-content flex-1 overflow-y-auto">
  <ul class="menu p-2 gap-1">
    {#each note_list as note}
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
