<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import IconHamburger from "../components/icons/IconHamburger.svelte";
  import IconSidewaysHamburger from "../components/icons/IconSidewaysHamburger.svelte";
  import SidebarList from "../components/sidebar/SidebarList.svelte";
  import { Folder, LucideSidebar, Menu, File, Plus, Search } from "@lucide/svelte";

  let name = $state("");
  let greetMsg = $state("");
  let sidebarOpen = $state(true);

  // Mock data for sidebar
  const notes = [
    { id: 1, title: "Welcome Note", type: "file" },
    { id: 2, title: "Getting Started", type: "file" },
    { 
      id: 3, 
      title: "Projects", 
      type: "folder",
      children: [
        { id: 4, title: "Project A", type: "file" },
        { id: 5, title: "Project B", type: "file" }
      ]
    },
    { id: 6, title: "Ideas", type: "folder", children: [] }
  ];

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<div class="app-container h-screen flex flex-col">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost" on:click={toggleSidebar}>
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

  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <div class="sidebar bg-base-200 {sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col">
      <div class="p-4 flex justify-between items-center">
        <h2 class="font-bold">Notes</h2>
        <button class="btn btn-sm btn-ghost btn-circle">
          <Plus size={18} />
        </button>
      </div>
      
      <div class="sidebar-content flex-1 overflow-y-auto">
        <ul class="menu p-2 gap-1">
          {#each notes as note}
            {#if note.type === 'file'}
              <li>
                <a class="flex items-center gap-2">
                  <File size={16} />
                  <span>{note.title}</span>
                </a>
              </li>
            {:else if note.type === 'folder'}
              <li>
                <details>
                  <summary class="flex items-center gap-2">
                    <Folder size={16} />
                    <span>{note.title}</span>
                  </summary>
                  <ul>
                    {#each note.children || [] as child}
                      <li>
                        <a class="flex items-center gap-2">
                          <File size={16} />
                          <span>{child.title}</span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                </details>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </div>

    <!-- Main content -->
    <main class="flex-1 p-6 overflow-auto">
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
    </main>
  </div>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  
  .sidebar {
    border-right: 1px solid rgba(0,0,0,0.1);
  }
</style>
