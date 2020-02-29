<script>
  import _ from "lodash";
  export let patternColors;
</script>

<style>
  ul {
		list-style-type: none;
		padding: 0;

	}
	li{
		width: 50px;
		height: 50px;
		display: inline-block;
	}
</style>

<ul>
  {#each patternColors as swatch}
  <li style="background-color: {swatch[_.keys(swatch)]}">
  </li>
  {/each}
</ul>

