import swatches from "./palette";
import _ from "lodash";

let getPattern = []
function consolePattern() {
  getPattern = _.map(swatches, obj => {
    const colors = [];
    for (var swatch in obj.swatch) {
      colors.push({
        [swatch]: Vibrant.Util.rgbToHex(...obj.swatch[swatch].rgb)
      });
    }
    return {
      image: obj.file,
      colors
    };
  });
  console.log(getPattern);
}
consolePattern();
export default getPattern;

