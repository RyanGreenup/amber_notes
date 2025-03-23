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
    "000": {
      title: "000",
      description: "Computer science, information & general works",
    },
    "100": { title: "100", description: "Philosophy & psychology" },
    "200": { title: "200", description: "Religion" },
    "600": { title: "800", description: "Literature" },
    "700": { title: "900", description: "History & geography" },
  };
  // This is a list of note categories that the user will click to choose view a category.
</script>

<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between items-center">
    <span>Shelves</span>
    <button class="btn btn-ghost btn-xs rounded-full">
      <ArrowUp size={16} />
    </button>
  </li>

  {#each Object.entries(shelves) as [id, { title, description }]}
    <ShelfItem {id} {title} {description} />
  {/each}
</ul>
