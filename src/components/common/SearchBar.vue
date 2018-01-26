<template >
  <div class="data-list">
    <div class="searchBox">
      <input class="" type="text" v-model="txt">
      <i v-show="txt" class="fa fa-close" @click="txt=''"></i>
    </div>
    <div class="maybe" v-show="txt && getMaybes.length">
      <p>你是不是要搜</p>
      <ul>
        <li @click="searchStart(item)" v-for="item in getMaybes">{{item}}</li>
      </ul>
    </div>
    <div class="hot-site">
      <p>热门目的地</p>
      <ul>
        <li @click="searchStart(item.name)" v-for="item in hotSites">
          <img :src="item.imgUrl" alt="" :title="item.name">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="history-search">
      <p>最近搜索</p>
      <ul>
        <li @click="searchStart(item.name)" v-for="item in histories">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'search-bar',
    props: ['hotSites', 'histories'],
    data () {
      return {
        txt: '',
        maybes: ['哈哈，没想到吧hh', '烤羊腿', '冰岛', '北方的空地', '爱尔兰', '烤乳猪', '北京', '史蒂夫', 'bavsfesf', 'sfsdgaerag', 'gdfgcplrz', 'zbcdefghijklmnopqrstuvwxyz', 'Ok了啦啊哈呵', '的得看恩咯']
      }
    },
    methods: {
      ...mapActions(['setSearch_keyword']),
      searchStart (key) {
        Indicator.open({
          text: '搜索“' + key + '”',
          spinnerType: 'triple-bounce'
        })
        setTimeout(() => {
          let params = {
            search_keyword: key,
            from: this.from,
            to: this.to
          }
          this.setSearch_keyword(params)
          Indicator.close()
          this.$router.replace('/')
        }, 2000)
      }
    },
    computed: {
      ...mapState(['duration', 'from', 'to']),
      getMaybes () {
        let key = this.txt
        let arr = []
        arr.push(this.txt)
        this.maybes.forEach((item) => {
          for (let i = 0; i < key.length; i++) {
            if (item.indexOf(key[i]) !== -1) {
              arr.push(item)
            }
          }
        })
        return [...new Set(arr)]
      }
    }
  }
</script>

<style lang="scss" scoped>
  
.searchBox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  height: 30px;
  position: relative;
  > input{
    width: 80%;
    padding: 0 20px;
    background: #eee;
    border-radius: 40px;
    height: 100%;
  }
  > i{
    position: absolute;
    right: 8%;
  }
}
.hot-site{
  padding: 10px;
  > ul{
    display: flex;
    justify-content: space-around;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      > img{
        width: 40px;
        height: 40px;
      }
    }
  }
}
.history-search, .maybe{
  padding: 10px;
  li{
    padding: 5px;
  }
}

.data-list{
  p{
    color: #aaa;
    margin-bottom: 10px;
  }
}

</style>