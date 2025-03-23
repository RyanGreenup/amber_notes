<script>
  import {
    Edit,
    Edit2,
    Edit3,
    Heart,
    Library,
    Plus,
    Shell,
  } from "@lucide/svelte";
  import ShelfItem from "./ShelfItem.svelte";

  /* For debugging and dev */
  export let deweyDecimalRoots = [
    {
      title: "000",
      description: "Computer science, information & general works",
    },
    { title: "100", description: "Philosophy & psychology" },
    { title: "200", description: "Religion" },
    { title: "300", description: "Social sciences" },
    { title: "400", description: "Language" },
    { title: "500", description: "Science" },
    { title: "600", description: "Technology" },
    { title: "700", description: "Arts & recreation" },
    { title: "800", description: "Literature" },
    { title: "900", description: "History & geography" },
  ];
</script>

<!-- <div class="p-4 flex justify-between items-center"> -->
<!--   <h2 class="font-bold">Notes</h2> -->
<!--   <button class="btn btn-sm btn-ghost btn-circle"> -->
<!--     <Plus size={18} /> -->
<!--   </button> -->
<!-- </div> -->

<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Shelves</li>

  {#each deweyDecimalRoots as { title, description }}
    <ShelfItem {title} {description} />
  {/each}
</ul>
