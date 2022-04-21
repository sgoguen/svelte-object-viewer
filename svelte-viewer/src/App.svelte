
<script lang="ts">
  import { Styles } from 'sveltestrap';
  import Viewer from "./Viewer.svelte";

  const person = {
    name: "Steveo",
    age: 27,
    todo: [
      { task: "Do this", priority: 2 },
      { task: "Do this", priority: 1 },
      { task: "Do this", priority: 4 },
    ],
  };
</script>

<Styles />


<h2>Simple Types</h2>
<Viewer value={1} />
<Viewer value={'Hello'} />
<Viewer value={'false'} />

<h2>Object</h2>
<Viewer value={person} />
