<script>
//AI:  The Sidebarlist is defined here
  import {
    Edit,
    Edit2,
    Edit3,
    Heart,
    Library,
    Plus,
    Shell,
    ArrowUp,
  } from "@lucide/svelte";
  import ShelfItem from "./ShelfItem.svelte";

  /* For debugging and dev */
  export let shelves = {
    "000": {
      title: "000",
      description: "Computer science, information & general works",
    },
    "100": { title: "100", description: "Philosophy & psychology" },
    "200": { title: "200", description: "Religion" },
    "600": { title: "800", description: "Literature" },
    "700": { title: "900", description: "History & geography" },
  };
</script>

<ul class="my-shelf-list">
  <li class="my-shelf-list-item">
    <span>Shelves</span>
    <button class="btn btn-ghost btn-xs rounded-full">
      <ArrowUp size={16} />
    </button>
  </li>

  {#each Object.entries(shelves) as [id, { title, description }]}
    <ShelfItem {id} {title} {description} />
  {/each}
</ul>
