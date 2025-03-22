<script lang="ts">
  import { LucideSidebar, Search } from "@lucide/svelte";
  
  export let toggleSidebar: () => void;
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost" onclick={toggleSidebar}>
      <LucideSidebar />
    </button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">AmberNotes</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <Search size={20} />
    </button>
  </div>
</div>
