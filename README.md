# 项目名称：足迹

### 项目介绍：

主要模块分为：浏览 故事 收藏 消息 我的

主要功能：

浏览页：

1. 搜索框功能，热门搜索和搜索历史
2. 房源筛选条件：起始日期和房客数据
3. 点击民宿类型，体验进入详情页

故事页：

1. 分为美食 文化 房源 景点四个选项，点击切换不同主题内容，下拉刷新
2. 点击写故事可进入编辑页编辑
3. 对别人的故事进行点赞，评论

收藏页：

1. 显示收藏列表
2. 滑到底部继续加载

消息页：

1. 显示消息列表

我的页：

1.  注册页：填写手机号 密码 验证码进行注册跳转至登录页
2.  登录页：填写手机号 密码进行登录调制个人中心页
3.  个人中心页：点击退出回到登录页

### 项目总结

第一次组员见面的时候就和后端撕起来了，是关于项目方向和接口问题，然后就草草了之了，第一次感到两个理念不同人交流是那么困难。
UI设计完原型图之后发现工作量挺大，而且部分功能实现不了就和UI协调了下把这些功能去掉了。之后静下来再看原型图，发现其实没那么复杂，页面是多，但是其实页面结构都是一样的，只是渲染的数据不同，对整个项目有了个大概到的思路，用Vue写起来应该不是很难（但后面写的时候出现了各种奇葩问题）。
原型图确定下来之后是和后端一起定接口，本来是定接口的，但是聊着聊着就扯到项目功能上了，最后是通过沟通定下了一个接口。后端这时表示很自信，把定义接口的任务交给了前端，自己只需要按照接口建立数据库和返回数据就行了。我当时想法是接口全部自己定的话，后面联调的时候对我可能会轻松些就答应了。结果就是定义完之后发给后端，后端说这个不对，那个不行，不符合数据库设计范式等，那就没办了，有分歧的地方只能再协调，自己开发时写的mock数据又要重写一部分。这时候想起了老师的话：定义接口时后端主导，前端辅助。
最后是具体的项目开发。最初觉得对项目有了整体的思路应该会写的挺顺手，但实际写起了的时候发现很多地方还是没有考虑全面，比如不少功能都可以独立出一个模块，后面用到的时候直接引就可以，在最后意识到的时候写了一个搜索框的组件。项目第一次使用Git进行了团队开发，随着项目一步步展开，对整个流程，git命令加深了认识，中间出过小插曲，比如小伙伴不小心在主分支上开发了一天，最后的解决办法是在新分支上merge主分支（保留了一天成果），再把主分支的更改撤回；在用vuex的时候，两边都新建了vuex目录，导致部分文件合并之后产生了冲突，最后只好手动解冲突。最后把项目打包发给后端后，后端表示页面打不开，css，js路径错误，由于之前自己尝试运行打包代码的时候也遇到过这样的问题，发现了是打包后index.html里引入外链css和js路径不对，都加上`.`就没事了，但我寻思不能每次打包完都自己去改路径吧，就在网上查了一下，果然很多人都有这个问题，最后解决方案是修改`config/index.js`配置文件里build下的`assetsPublicPath: './'`，果然遇到问题刨根问底总是好的。

### 项目日志

##### 1.5

根据API做了mock数据，成功根据请求地址请求到数据并渲染到页面

根据评价等级（数值），转换成更为直观的星级（满星，半星，空星）

##### 1.6

优化样式（搜索框）

故事页，下拉刷新（暂时用翻转数组模拟数据变更的效果）

下滑显示，上滑隐藏效果试着做了下，效果不尽人意

##### 1.13

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

##### 1.14

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

##### 1.17

图片上传及预览


```
<div id="wrap">
  <label>
      点我上传图片
      <input type='file' @change="change" ref="input">
  </label>
  <img style="width: 100%;" :src="src" ref="img">
</div>
```

```
change (e) {
  this.getSize(e)
  
},
// 获取图片大小，可以在这里
getSize (e) {
  // console.log(e)
  let size = e.target.files[0].size
  console.log(size)
  if (true) {
    // ok的话允许上传
    this.getSrc()
  } else {
    alert('图片太大！')
  }
  // return e.target.files[0].size
},
getSrc () {
  const refs = this.$refs
  const elInput = refs.input
  const elImg = refs.img

  const reader = new FileReader()
  reader.onload = (e) => {
    // 这里的result就是base64格式的地址
    const src = e.target.result
    console.log('base64：', src)
    elImg.src = src  // 给预览图片加上地址
    // 下面可以把图片信息发送到后台，base64，图片名，之类
  }
  if (elInput.files && elInput.files[0]) {
    reader.readAsDataURL(elInput.files[0])
  }
}
```

> 参考：[https://segmentfault.com/a/1190000008019773](https://segmentfault.com/a/1190000008019773)

处理完图片预处理之后就要更改样式了，原始的input太丑了，而且现在的需求是未选择的时候显示加号，选择后替换为图片，而不是input和img分离，那么重新写一下结构和样式

```
<div class="load-box">
  <img :src="src" ref="img">
  <input type='file' @change="change" ref="input">
</div>
```

把input和img都定位到一块，重叠起来，这里要注意的是一定要是input显示在上面，可以用`z-index`调整，也可以简单的把input写在下面

```
.load-box{
  width: 50px;
  height: 50px;
  position: relative;
  > input{
    height: 50px;
    width: 50px;
    position: absolute;
    opacity: 0;  // 隐藏input，
  }
  > img{
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    position: absolute;
  }
}
```

做到这一步基本已经ok了，功能一切正常，但是可能会发现没上传图片的时候img会显示一张破碎的图片，应为src为`unknow`，这样很影响美观，而且需求是没上传显示加号。那么下面介绍一个黑科技

```
<img :src="src" ref="img" onerror="this.src='/image/plus.png';this.onerror=null;">
```

当`src`不存在的时候，会执行`onerror`，然后在这里设置默认的src就好了


##### 1.18

在消息页模拟聊天功能，聊天框分为两种，一种是对方发来的，一种是自己发的，两者区别不大，样式上：头像和消息方向的区别，消息框尖角标的方向

每条消息都包含以下属性（简要）：

```
{
  toWho: 'you', // 发送至谁
  fromWho: 'me', // 发自谁
  content: 'hello，~', // 消息内容
  time: '2018-01-18', // 发送日期
}
```
