<script lang="ts">
  import Sidebar from "../components/sidebar/Sidebar.svelte";
  import NoteEditor from "../components/editor/NoteEditor.svelte";
  import AppHeader from "../components/layout/AppHeader.svelte";

  let sidebarOpen = $state(true);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<div class="app-container h-screen flex flex-col">
  <AppHeader {toggleSidebar} />

  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <Sidebar isOpen={sidebarOpen} />

    <!-- Main content -->
    <main class="flex-1">
      <NoteEditor />
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
</style>
