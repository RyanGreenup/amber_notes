<script lang="ts">
  import { Divide, LucideSidebar, Search, SeparatorVertical } from "@lucide/svelte";
  import DarkModeToggle from "../buttons/DarkModeToggle.svelte";
  import SearchButton from "../buttons/SearchButton.svelte";

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
  <SearchButton />
  <div class="flex-none">
    <DarkModeToggle />
  </div>
</div>
