import swatches from "./palette";
import _ from "lodash";
import { forkJoin } from "rxjs";
let imageDir = './screenshots/BTSONKineticManifestoFilm'


  const getPattern = _.map(swatches, async (obj) => {
    const colors = [];
    let avg;
    const averageColor = getAverageColor(`${imageDir}/${obj.file}`);

    for (var swatch in obj.swatch) {
      colors.push({
        [swatch]: Vibrant.Util.rgbToHex(...obj.swatch[swatch].rgb)
      });
    }
    let res = {
      image: obj.file,
      colors: colors,
    }
    averageColor.then(c => {
      res['averageColor'] =  c
    })
    return res;
  });


 async function getAverageColor(file) {
  let dataURL  = await getImageElement(file);
  return await dataURL
}


async function getImageElement(url) {
  var image = new Image();
    var createCanvas = document.createElement("canvas")
    image.src = url;
    image.onload = function() {
        var canvas = createCanvas;
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
    };
   return await getAverageRGB(image)
}

async function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);


    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        // alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return await rgb;

}


export default getPattern;
