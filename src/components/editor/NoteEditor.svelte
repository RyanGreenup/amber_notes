<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<div class="p-6 overflow-auto">
  <h1 class="text-2xl font-bold mb-4">Welcome to AmberNotes</h1>

  <div class="card bg-base-100 shadow-sm p-4">
    <form class="flex gap-2" onsubmit={greet}>
      <input
        class="input input-bordered flex-1"
        id="greet-input"
        placeholder="Enter a name..."
        bind:value={name}
      />
      <button class="btn" type="submit">Greet</button>
    </form>
    <p class="mt-4">{greetMsg}</p>
  </div>
</div>
