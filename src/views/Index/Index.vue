<template>
  <div>
    <!--导航-->
    <mt-header fixed title='凡音' class="header">
      <router-link to="/" slot="left">
        <img class="logoImg" src="../../assets/img/logo.png" alt="">
      </router-link>
      <router-link to="search" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>

    <!--navbar-->
    <mt-navbar v-model="selected" class="navbar">
      <mt-tab-item id="1">发现音乐</mt-tab-item>
      <mt-tab-item id="2">推荐歌单</mt-tab-item>
      <mt-tab-item id="3">最新音乐</mt-tab-item>
      <mt-tab-item id="4">最新MV</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
<!--        轮播图-->
        <swiper ref="mySwiper" :options="swiperOptions" v-if="banners.length>1">
          <swiper-slide v-for="(item, index) in banners" :key="index">
            <img :src="item.imageUrl" alt="" class="swipeImg">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
<!--        推荐歌单-->
        <div class="recommend">
          <h4>推荐歌单</h4>
          <div class="recommendItem">
            <div v-for="item in Recommend" :key="item.id">
              <img :src="item.picUrl" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
<!--        最新音乐-->
        <div class="recommend">
          <h4>最新音乐</h4>
          <div class="recommendItem">
            <div v-for="item in LatestMusic" :key="item.id">
              <img :src="item.picUrl" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
<!--        推荐MV-->
        <div class="recommend">
          <h4>推荐MV</h4>
          <div class="recommendItem">
            <div v-for="item in RecommendedMV" :key="item.id">
              <img :src="item.picUrl" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        3
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        4
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      selected: '1',
      banners: [],
      swiperOptions: {
        loop: true,
        speed: 500,
        autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      Recommend: [],
      LatestMusic: [],
      RecommendedMV: []
    }
  },
  mounted () {
    this.getBanner()
    this.getRecommend()
    this.getLatestMusic()
    this.getRecommendedMV()
  },
  methods: {
    async getBanner () {
      const result = await this.axios.get('/banner')
      console.log(result)
      this.banners = result.data.banners
    },
    async getRecommend () {
      const result = await this.axios.get('personalized')
      console.log(result)
      this.Recommend = result.data.result
    },
    async getLatestMusic () {
      const result = await this.axios.get('/personalized/newsong')
      console.log(result)
      this.LatestMusic = result.data.result
    },
    async getRecommendedMV () {
      const result = await this.axios.get('/personalized/mv')
      console.log(result)
      this.RecommendedMV = result.data.result
    }
  }
}
</script>

<style scoped lang="less">
.logoImg{
  width: 100px;
  height: 50px;
}
.downloadApp{
  height: 30px;
  padding: 5px!important;
  border: 1px solid #fff!important;
  border-radius: 10px!important;
}
.navbar{
  margin-top: 35px;
}
.swiper-container img{
  width: 100%;
}
.recommend{
  h4{
    padding-left: 10px;
  }
  .recommendItem{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{
      flex: 1;
      img{
        width: 100%;
        height: 100px;
      }
      p{
        font-size: 10px;
        width: 30%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
    }
  }
}
</style>
