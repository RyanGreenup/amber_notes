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

<div class="card bg-base-100 w-96 shadow-sm ">
  <div class="card-body ">
  <h1>Some Dummy Content</h1>
  </div>
</div>


</div>
