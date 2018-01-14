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

体验页：

  首页显示固定的四种体验类型，点击进入对应类型的列表页，点击列表项进入详情页

mint-ui之datePicker
  
```
<mt-datetime-picker
  ref="picker"              //在当前组件通过 this.$refs.picker.open 来弹出选择框
  @confirm="handleConfirm"  //点击确定触发的函数
  type="date"
  :startDate="new Date()"  //设置起始日期
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
```

### 1.14

封装了一个搜索框插件

使用方法：

引入组件，在页面中添加`<search-bar :hotSites="hotSites" :histories="histories"></search-bar>`

两个传参分别为热门搜索和搜索历史

效果：

输入框值实时匹配可能要搜的值

点击搜索结果列表，弹出搜索中动画（mint-ui的动画），搜索失败弹出提示，可以在`searchStart`中进行自定义操作

```
searchStart (key) {
  Indicator.open({
    text: '搜索“' + key + '”',
    spinnerType: 'triple-bounce'
  })
  setTimeout(() => {
    Indicator.close()
    Toast({
      message: '网络好像有点问题~',
      duration: 1000
    })
  }, 2000)
}
```

![输入关键词](http://upload-images.jianshu.io/upload_images/3629578-d575b65ef4fdcfd0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![搜索中](http://upload-images.jianshu.io/upload_images/3629578-7f3f261be2836cef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![搜索失败](http://upload-images.jianshu.io/upload_images/3629578-3943c8a0b5fce21b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

日期控件`<input type="date">`设置默认日期时的注意点

一定要是严格的`yyy-mmm-ddd`字符串形式，如`2018-02-09`

```
<input id="time" type="date">
<script>
  time.value = '2018-01-14'
</script>
```


