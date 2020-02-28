import App from './App.svelte';
import swatches from './palette';
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

for (var swatch in swatches) {
	// var palette = paletteBoxes[i];
	if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
		// palette.style.color = swatches[swatch].getHex();
		console.log(swatches[swatch].getHex());

		// palette.querySelector('.palette__value--real').innerHTML = swatches[swatch].getHex();

		// addToPalette(palette, i);
	}
	// ++i;
}

export default app;
