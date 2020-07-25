<script lang="ts">
  import Viewer from "./Viewer.svelte";

  export let name: string;

  const person = {
    name: "Steve",
    age: 27,
    todo: [
      { task: "Do this", priority: 2 },
      { task: "Do this", priority: 1 },
    ],
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>

<h2>Simple Types</h2>
<Viewer value={1} />
<Viewer value={'Hello'} />
<Viewer value={'false'} />

<h2>Object</h2>
<Viewer value={person} />