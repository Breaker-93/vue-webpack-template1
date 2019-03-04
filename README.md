# 工程目录结构说明

## 1、项目简介

​	这是一个基于vue+webpack的web工程，使用官方脚手架工具vue-cli、选用名为“webpack”的模板进行初始化构建，并在此基础上根据实际项目的需要对目录结构做了进一步完善。主要技术版本：

> vue：2.5.2
>
> webpack：3.6.0
>
> vue-cli：2.9.6
>
> node：10.14.2

## 2、目录结构

​	初始化+完善补充后的目录结构如下：

```
├─build	(webpack构建配置目录)
├─config（测试、开发、生产的环境配置目录）
├─src (源码目录)
│  ├─assets	(自定义静态资源目录，webpack会构建处理)
│  │  ├─css
│  │  ├─font
│  │  ├─image
│  │  └─js
│  │      ├─api （后端接口路径文件目录）
│  │      ├─constant （全局常量文件目录）
│  │      ├─mock （mock模拟数据文件目录）
│  │      ├─url （全局url文件目录）
│  │      └─util （全局工具函数件目录）
│  ├─components （组件目录）
│  │  ├─container （容器组件目录，每个组件对应一个完整页面）
│  │  ├─function （功能组件目录，每个组件封装至少一个功能）
│  │  └─subPage （子页面组件目录，每个组件对应完整页面中的一部分，例如标签页）
│  ├─examples （示例目录）
│  └─router （路由配置目录）
├─static (第三方静态资源目录，webpack不会构建处理)
└─test
    ├─e2e
    │  ├─custom-assertions
    │  └─specs
    └─unit
        └─specs
```

