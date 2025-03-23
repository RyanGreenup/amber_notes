<script lang="ts">
// Improve this entire component to better represent shelves of notes
// we are writing a notetaking library application that has shelves that are like folders, these will contain a collection of books when clicked (by redirecting the user). For now we are still working on the style. Fix the style so it better represents the use case AI!
  import { Edit, Heart, Library } from "@lucide/svelte";
  export let buttons: Boolean = false;
  export let title: string = "";
  export let description: string = "";
  export let extra_classes = "";
  export let size_class = "size-[1.2em]";
</script>

<li class="list-row">
  <div>
    <Library class="{extra_classes} {size_class}" />
  </div>
  <div>
    <div>{title}</div>
    <div class="text-xs uppercase font-semibold opacity-60">
      {description}
    </div>
  </div>
  {#if buttons}
    <button class="btn btn-square btn-ghost">
      <Edit class="{extra_classes} {size_class}" />
    </button>
    <button class="btn btn-square btn-ghost">
      <Heart class="{extra_classes} {size_class}" />
    </button>
  {/if}
</li>
