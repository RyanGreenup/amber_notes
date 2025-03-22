<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import IconHamburger from "../components/icons/IconHamburger.svelte";
  import IconSidewaysHamburger from "../components/icons/IconSidewaysHamburger.svelte";
  import SidebarList from "../components/sidebar/SidebarList.svelte";
  import { Folder } from "@lucide/svelte";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<div class="navbar bg-base-100 shadow-sm fixed top-0 z-10 w-full">
  <div class="flex-none">
    <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button">
      <IconHamburger />
    </label>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <IconSidewaysHamburger />
    </button>
  </div>
</div>

<div class="drawer lg:drawer-open pt-16">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <SidebarList />
  </div>
</div>

<main class="container">
  <h1>Welcome to Tauri + Svelte</h1>

  <form class="row" onsubmit={greet}>
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button type="submit">Greet</button>
  </form>
  <p>{greetMsg}</p>
</main>
