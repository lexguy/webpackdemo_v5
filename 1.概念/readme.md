- 打包静态模块
- 递归构建依赖关系图
- 将多个模块打包成一个或多个bundle

## 入口 entey

入口表示构建依赖图的开始，找出所有和入口起点（直接或间接）依赖的模块。



## 出口 output

所创建的bundle的位置以及命名。(位置和文件路径相关的使用的是`Node`的`path`模块)



## Loader

webpack本身只处理JavaScript，`loader`可以用于处理非`JS`文件，将所有文件转换为`webpack`可以处理的模块。

> 本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

关键属性：

- test.  标示应该被对应loader转换的某些文件（一般写正则匹配扩展名）
- use.  对匹配的文件进行转换时使用的 loader

使用方式为:

```js
module:{
	rules:[
		{text:/.txt$/, use:'xxx-loader'}
	]
}
```

这样的含义就是在require 和 import语句解析 txt结尾文件的时候，会用xx-loader进行转换。

## 插件 Plugins

插件可以用于更多的任务中：

- 打包优化和压缩
- 重新定义环境变量

使用：require 插件，添加到plugins数组 。可以在一个配置文件出于不同目的多次使用一个插件，需要new操作来创建实例。



## 模式

mode 变量指定对应模式下的优化

- development
- production



















