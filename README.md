# 项目名称：足迹

### 启动方式

1. `npm i` 安装模块

2. `npm start` 启动服务

3. `npm run mock` 启动json-server

4. 在浏览器输入`localhost:8080`，地址和端口可在config目录下的`index.js`中修改`host`和`port`

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

修复登陆注册页bug

新增用户头像上传功能

##### 1.21

上线问题：

有一个接口请求一直报404，确认了路径之后也没发现什么端倪，文件确实存在

再次对比了之后发现请求路径和文件路径有很不起眼的差别：请求路径都是小写，文件路径中有一个文件夹是小驼峰命名，也就是中间有个字母是大写，这在windows系统下都没有问题，但是线上的环境是linux，linux中是严格区分大小写的。。。

另一个问题也是404问题，接口：`api/browse/house`，在php环境中的目录可以这么写：`api/browse/house.php`，但是放到linux环境下仍然会报404，

当使用post其请求的时候，要确保能请求到php文件，所以把路径写全是最稳妥的做法：`api/mine/login.php`

get请求的话，`api/browse/house`，

##### 1.26

走你
