<template>
  <div class="toast-box app-filte-person">
    <mt-header title="选择房客类型">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <ul class="app-person-box">
      <li v-for="item in types">
        <span>{{item.mean}}</span>
        <div v-if="item.type==='pet'">
          <mt-switch v-model="pet"></mt-switch>
        </div>
        
        <div v-else>
          <i @click="deal(-1, item.type)" class="cacu-btn fa fa-minus"></i>
          <span>{{getNum(item.type)}}</span>
          <i @click="deal(1, item.type)" class="cacu-btn fa fa-plus"></i>
        </div>
      </li>
     
    </ul>
    <mt-button class="set-ok-btn" @click="setPersonOk(adult, child, baby, pet)" type="primary">设置好了</mt-button>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'app-filte-person',
    methods: {
      ...mapMutations(['setPerson']),
      deal (cases, type) {
        if (type === 'adult') {
          this.adult += cases
          if (this.adult < 1) {
            this.adult ++
          }
        } else {
          this[type] += cases
          if (this[type] < 0) {
            this[type]++
          }
        }
      },
      computed: {
        ...mapState(['persons'])
      },
      setPersonOk (adult, child, baby, pet) {
        this.setPerson({adult, child, baby, pet})
        this.$router.push('/')
      },
      getNum (type) {
        switch (type) {
          case 'adult':
            return this.adult
          case 'child':
            return this.child
          case 'baby':
            return this.baby
          case 'pet':
            return this.pet
        }
      }
    },
    data () {
      return {
        adult: 1,
        child: 0,
        baby: 0,
        pet: false,
        types: [
          {type: 'adult', mean: '成人'},
          {type: 'child', mean: '儿童'},
          {type: 'baby', mean: '幼儿'},
          {type: 'pet', mean: '宠物'}
        ]
      }
    },
    mounted () {
      let persons = this.$route.params
      this.adult = persons.adult ? persons.adult : 1
      this.child = persons.child ? persons.child : 0
      this.baby = persons.baby ? persons.baby : 0
      this.pet = persons.pet ? persons.pet : false
    }
  }
</script>

<style lang="scss">
  .app-filte-person{
    text-align: center;
  }
  .app-person-box{
    border-top: 1px solid #ccc;
    padding: 0 10px;

    > li{
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
    }
  }
  .cacu-btn{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #98FB98;
    border-radius: 50%;
    color: #26A2FF;
  }
</style>
