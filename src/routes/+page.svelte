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



<main class="container">
  <h1>Welcome to Tauri + Svelte</h1>

  <form class="row" onsubmit={greet}>
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button type="submit">Greet</button>
  </form>
  <p>{greetMsg}</p>
</main>
