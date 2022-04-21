<script lang="ts">
import { getRenderType, getKeyValues } from "./meta.svelte";
import { Table } from 'sveltestrap';


  //   import { getRenderType } from "meta";

  export let value: unknown;

  $: info = getRenderType(value);


</script>

<!-- <div>{info.type}</div> -->
{#if info.type === 'simple-value'}
  <div>{info.value}</div>
{:else if info.type === 'object'}
  <Table bordered striped size="sm">
    {#each getKeyValues(info.value) as { key, value }, i}
      <tr>
        <th>{key}</th>
        <td>
          <svelte:self {value} />
        </td>
      </tr>
    {/each}
  </Table>
{:else if info.type === 'array'}
  <Table bordered striped size="sm">
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
  </Table>
{:else}
  <div>Unknown</div>
{/if}
