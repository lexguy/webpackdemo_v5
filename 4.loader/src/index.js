/*
 * @Author: xuwei
 * @Date: 2021-03-22 16:05:15
 * @LastEditTime: 2021-03-22 23:32:24
 * @LastEditors: xuwei
 * @Description:
 */

import _ from "lodash";
import "./style.css";
import ICON from "./apple.jpg";

// 区别于 entry 可以有多个文件入口，output 只能有一个输出配置
function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // CSS
  element.classList.add("hello");

  // Image
  const img = new Image();
  img.src = ICON;
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
