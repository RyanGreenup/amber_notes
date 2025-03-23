<script lang="ts">
  import { Edit, Heart, BookOpen, ChevronRight } from "@lucide/svelte";
  export let buttons: Boolean = false;
  export let title: string = "";
  export let description: string = "";
  export let extra_classes = "";
  export let size_class = "size-[1.2em]";
  export let isExpanded: boolean = false;
  export let noteCount: number = 0;
</script>

<li class="flex items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors group">
  <div class="flex items-center justify-center mr-2 text-amber-700 dark:text-amber-500">
    <BookOpen class="{extra_classes} {size_class}" />
  </div>
  <div class="flex-1 min-w-0">
    <div class="font-medium truncate">{title}</div>
    {#if description}
      <div class="text-xs text-slate-500 dark:text-slate-400 truncate">
        {description}
      </div>
    {/if}
    {#if noteCount > 0}
      <div class="text-xs text-slate-500 dark:text-slate-400">
        {noteCount} note{noteCount !== 1 ? 's' : ''}
      </div>
    {/if}
  </div>
  <div class="flex items-center">
    {#if buttons}
      <button class="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-600 transition-opacity">
        <Edit class="{extra_classes} {size_class}" />
      </button>
      <button class="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-600 transition-opacity">
        <Heart class="{extra_classes} {size_class}" />
      </button>
    {/if}
    <ChevronRight class="{size_class} transform transition-transform {isExpanded ? 'rotate-90' : ''}" />
  </div>
</li>
