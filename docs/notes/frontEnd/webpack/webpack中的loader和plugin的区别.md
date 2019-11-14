---
title: webpack中的loader和plugin的区别
date: 2019-11-01
---

loader，是一个转换器，webpack 自身只支持 js 和 json 这两个格式的文件，对于其他文件需要 loader 将其转换成 commonJS 规范的文件后，webpack 才能解析到。
plugin，是一个扩展器，是用于在 webpack 打包编译过程里，在对应的事件节点里执行自定义操作，比如资源管理、bundle 文件优化等操作。
