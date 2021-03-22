/*
 * @Author: xuwei
 * @Date: 2021-03-22 16:05:15
 * @LastEditTime: 2021-03-22 23:44:15
 * @LastEditors: xuwei
 * @Description:
 */

import _ from "lodash";
import printMe from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
