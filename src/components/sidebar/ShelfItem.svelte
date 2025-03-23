<script lang="ts">
  import { Edit, Heart, Bookmark, BookOpen, LibraryIcon } from "@lucide/svelte";
  import { selectedShelfId } from "../../stores/selectedShelfStore";
  export let buttons: Boolean = false;
  export let title: string = "";
  export let description: string = "";
  export let extra_classes = "";
  export let size_class = "size-[1.2em]";
  export let noteCount: number = 0;
  export let isActive: boolean = false;
  export let id: string;
  export let type: string;
</script>

<li
  class="shelf-item {isActive ? 'active' : ''}"
  on:click={() => selectedShelfId.set(id)}
>
  <div class="shelf-icon">



// Fix this AI!

    if (type === "terminal") {
    <LibraryIcon class="{extra_classes} {size_class}" />
    } elif (type === "hierarchy_shelf") {

    } else {
        <b>Bad Type</b>
        }








  </div>
  <div class="shelf-content">
    <div class="shelf-title">{title}</div>
    <div class="shelf-description">
      {description}
      {#if noteCount > 0}
        <span class="note-count"><BookOpen size="12" /> {noteCount} notes</span>
      {/if}
    </div>
  </div>
  {#if buttons}
    <div class="shelf-actions">
      <button class="shelf-button" title="Edit shelf">
        <Edit class="{extra_classes} {size_class}" />
      </button>
      <button class="shelf-button" title="Favorite shelf">
        <Heart class="{extra_classes} {size_class}" />
      </button>
    </div>
  {/if}
</li>

<style>
  .shelf-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    transition:
      background-color 0.2s,
      transform 0.1s;
    cursor: pointer;
    gap: 0.75rem;
  }

  .shelf-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateX(2px);
  }

  .shelf-item.active {
    background-color: rgba(0, 0, 0, 0.08);
    border-left: 3px solid var(--primary-color, #6366f1);
  }

  .shelf-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color, #6366f1);
  }

  .shelf-content {
    flex: 1;
    min-width: 0;
  }

  .shelf-title {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .shelf-description {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .note-count {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.7rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.1rem 0.4rem;
    border-radius: 1rem;
  }

  .shelf-actions {
    display: flex;
    gap: 0.25rem;
    opacity: 0.7;
  }

  .shelf-button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    color: inherit;
  }

  .shelf-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .shelf-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  :global(.dark) .shelf-item.active {
    background-color: rgba(255, 255, 255, 0.08);
  }

  :global(.dark) .shelf-description {
    color: rgba(255, 255, 255, 0.6);
  }

  :global(.dark) .note-count {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :global(.dark) .shelf-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
