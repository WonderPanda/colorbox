import { hex } from "color-convert";
import * as Curves from "./curves";
import colorbox from "./generate";

Curves.easeInBack;

const primary = hex.hsl("#e413c3");
const [hue, sat, lum] = primary;
const steps = 7;

const input = {
  specs: {
    hue_start: hue + steps,
    hue_end: hue - steps * 2,
    hue_curve: "easeInQuad",
    sat_start: 4,
    sat_end: 90,
    sat_rate: 130,
    sat_curve: "easeOutQuad",
    lum_end: 53,
    lum_start: 100,
    lum_curve: "easeOutQuad",
    steps
  }
};

console.log(input.specs);

const result = colorbox(input);
console.log(result.map(x => x.hex));
