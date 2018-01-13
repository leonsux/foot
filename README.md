# foot（足迹）

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 1.5

根据API做了mock数据，成功根据请求地址请求到数据并渲染到页面

根据评价等级（数值），转换成更为直观的星级（满星，半星，空星）

### 1.6

优化样式（搜索框）

故事页，下拉刷新（暂时用翻转数组模拟数据变更的效果）

下滑显示，上滑隐藏效果试着做了下，效果不尽人意

### 1.13

在router.js里配置路由时，老是报组件引入错误，仔细检查了一番并没有发现什么错误，之前的都没有问题，最初怀疑是组件命名的问题，但各种尝试无果，最后只好先写别的模块。回头再看这块，又重新写了一遍，发现自己引入模块的时候确实是路径写的有问题，在一个很不起眼的地方：`import AppWriting from '@/components/story/AppWriting'`，这里的`@`是指当前项目的`src`目录，后面接的时候要讲上`/`，而我当时由于疏忽写成了`import AppWriting from '@components/story/AppWriting'`，导致查找组件时的很是路径为：`srccomponents/story/AppWriting`，这样当然找不到了
