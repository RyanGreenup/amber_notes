<script lang="ts">
  export let items: { label: string; href?: string }[] = [];
</script>

<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
  <!-- Sidebar content here -->
  {#each items as item}
    <li><a href={item.href || '#'}>{item.label}</a></li>
  {/each}
</ul>
