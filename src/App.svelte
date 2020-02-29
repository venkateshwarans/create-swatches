<script>
	import { onMount } from "svelte";
	import Image from './Image.svelte';
	import Color from './Color.svelte';
	import getPattern from './generatePattern.js';
	let imageDir = './screenshots/BTSONKineticManifestoFilm'
  export let name;
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
	{#each getPattern as pattern}
		<Image src={imageDir}/{pattern.image}></Image>
		<Color patternColors={pattern.colors}></Color>
	{/each}
</main>
