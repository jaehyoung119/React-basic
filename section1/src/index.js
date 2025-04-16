// const moduleData = require("./math"); => commonjs
import { add, sub } from "./math.js";
// console.log(moduleData.add(1, 2));
// console.log(moduleData);

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
