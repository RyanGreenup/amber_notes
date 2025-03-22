<script lang="ts">
  import { Folder } from "@lucide/svelte";

  export let items: { label: string; href?: string }[] = [];
</script>

<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
  <!-- Sidebar content here -->

  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a>Item 1</a></li>
    <li>
      <details open>
        <summary><Folder /> Parent</summary>
        <ul>
          <li><a class="menu-active">Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li>
            <details open>
              <summary><Folder /> Parent</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </ul>

  {#each items as item}
    <li><a href={item.href || "#"}>{item.label}</a></li>
  {/each}
</ul>
