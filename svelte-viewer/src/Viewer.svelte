<script lang="ts">
import { getRenderType, getKeyValues } from "./meta.svelte";


  //   import { getRenderType } from "meta";

  export let value: unknown;

  $: info = getRenderType(value);


</script>

<style>
  table.grid {
    border-collapse: collapse;
  }

  table.grid th,
  td {
    border: 1px solid black;
    padding: 0.5ex;
  }
</style>

<!-- <div>{info.type}</div> -->
{#if info.type === 'simple-value'}
  <div>{info.value}</div>
{:else if info.type === 'object'}
  <table class="grid">
    {#each getKeyValues(info.value) as { key, value }, i}
      <tr>
        <th>{key}</th>
        <td>
          <svelte:self {value} />
        </td>
      </tr>
    {/each}
  </table>
{:else if info.type === 'array'}
  <table class="grid">
    {#if info.keys}
      <thead>
        <tr>
          {#each info.keys as key}
            <th>{key}</th>
          {/each}
        </tr>
      </thead>
    {/if}

    <tbody>
      {#if info.keys}
        {#each info.value as row}
          <tr>
            {#each info.keys as key}
              <td>
                <svelte:self value={row[key]} />
              </td>
            {/each}
          </tr>
        {/each}
      {:else}
        {#each info.value as row}
          <tr>
            <td>
              <svelte:self value={row} />
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
{:else}
  <div>Unknown</div>
{/if}
