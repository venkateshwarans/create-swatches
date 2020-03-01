<script>
	import { onMount } from "svelte";
	import _ from "lodash";
	import Image from './Image.svelte';
	import Color from './Color.svelte';
	import getPattern from './generatePattern.js';
	let imageDir = './screenshots/BTSONKineticManifestoFilm'
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
		{#await pattern then value}
		<Image src={imageDir}/{value.image}></Image>
		<Color patternColors={value.colors}></Color>
		{value.averageColor}
	{/await}
	{/each}
</main>
