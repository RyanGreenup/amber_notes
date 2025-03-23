<script>
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
    "1": {
      id: "1",
      title: "Shelf 1",
      description: "This is the first shelf",
      type: "hierarchy_shelf",
    },
    "2": {
      id: "2",
      title: "Shelf 2",
      description: "This is the second shelf",
      type: "hierarchy_shelf",
    },
    "3": {
      id: "3",
      title: "Shelf 3",
      description: "This is the third shelf",
      type: "hierarchy_shelf",
    },
  };
</script>

<ul class="my-shelf-list">
  <li class="my-shelf-list-item">
    <span>Shelves</span>
    <button class="btn btn-ghost btn-xs rounded-full">
      <ArrowUp size={16} />
    </button>
  </li>

  {#each Object.entries(shelves) as [id, { title, description, type }]}
    <ShelfItem {id} {title} {description} {type} />
  {/each}
</ul>
