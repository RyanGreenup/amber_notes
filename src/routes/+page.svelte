<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import IconHamburger from "../components/icons/IconHamburger.svelte";
  import IconSidewaysHamburger from "../components/icons/IconSidewaysHamburger.svelte";
  import SidebarList from "../components/sidebar/SidebarList.svelte";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="my-hamburger-spacing">
      <IconHamburger />
    </button>
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

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <SidebarList
      items={[
        { label: "Dashboard", href: "/" },
        { label: "Notes", href: "/notes" },
        { label: "Settings", href: "/settings" },
        { label: "About", href: "/about" },
      ]}
    />
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
