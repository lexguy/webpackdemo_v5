/*
 * @Author: xuwei
 * @Date: 2021-03-22 15:30:26
 * @LastEditTime: 2021-03-22 15:54:22
 * @LastEditors: xuwei
 * @Description:
 */

// 用法 entry: string|Array<string>

const config = {
  // 只有一个main的时候也可以简写为 entry:"index.js",

  entey: {
    main: "index.js",
    // others:'../xx.js'
  },
};

/** 
 对象语法配置多个入口
 
 1.可以用于分离app和第三方库入口 ，CommonsChunkPlugin 可以对第三方引用分离
 2.可以用于多页面应用程序，CommonsChunkPlugin 为多个 bundle 之间复用大量代码和模块

 在这两个场景中使用CommonsChunkPlugin可以将
 * 
*/

module.exports = config;
