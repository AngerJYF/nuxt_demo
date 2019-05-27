<template>
  <div class="test_banner">
    <div class="swiper_box">
      <div class="time_line_alone">
        <ul class="ul_style clearfix">
          <li>2015</li>
          <li>2016</li>
          <li>2017</li>
          <li>2018</li>
          <li>2019</li>
        </ul>
      </div>
      <div
        class="swiper swiperBox"
        v-swiper:swiper="swiperOption"
        ref="swiperBox"
        @mouseenter="stopSwiper"
        @mouseleave="startSwiper"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) of bannerData" :key="index">
            <div class="data_content" :class="item.newClass">
              <div class="login_img">
                <img :src="item.img_url" alt>
              </div>
              <div class="first_title display_inline">{{item.time}}</div>
              <div class="second_title display_inline">{{item.content}}</div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev iconfont iconprev" slot="button-prev"></div>
        <div class="swiper-button-next iconfont iconnext" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import alun from "@/assets/images/About/Alun.png";
import newziben from "@/assets/images/About/newziben.png";
import elens from "@/assets/images/About/elens.jpg";
export default {
  // props: ["bannerData"],
  data() {
    return {
      bannerData: [
        {
          newClass: "alone_style_1",
          time: 2015.11,
          content: "公司正式成立",
          img_url: elens
        },
        {
          newClass: "alone_style_2",
          time: 2017.12,
          content: "获得新毅资本PreA轮融资5000万元",
          img_url: newziben
        },
        {
          newClass: "alone_style_3",
          time: 2018.11,
          content: "获得经纬中国和策源资本A轮融资1.5亿元",
          img_url: alun
        }
      ],
      swiperOption: {}
    };
  },
  swiper() {
    // 如果你需要得到当前的swiper对象来做一些事情，
    // 你可以像下面这样定义一个方法属性来获取当前的swiper对象，
    // 同时notNextTick必须为true
    return this.$refs.swiperBox.swiper;
  },
  created() {
    this.swiperOption = this.setOption();
  },
  methods: {
    setOption() {
      return {
        // 循环播放
        loop: true,
        //切换速度 ms
        speed: 500,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，
        // 组件则不会通过NextTick来实例化swiper，
        // 也就意味着你可以在第一时间获取到swiper对象，
        // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          // 分页器样式类型，可选
          // bullets === 圆点（默认）  fraction === 分式  progressbar === 进度条   custom === 自定义
          //type: "bullets",
          //progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          //bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          //dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          //dynamicMainBullets: 2, //动态分页器的主指示点的数量
          //hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          renderBullet: function(index, className) {
            let text = "";
            switch (index) {
              case 0:
                text = "公司成立";
                break;
              case 1:
                text = "PreA轮融资";
                break;
              case 2:
                text = "A轮融资";
                break;
            }
            let template = `
                <div class="swiper_pagination_alone ${className} li_after_${index +
              1}">
                  <span class="year_style year_style_1"></span>
                  <span class="year_style year_style_2"></span>
                  <div class="txt_infor affter_alone_${index + 1}">${text}</div>
                </div>
            `;
            /* <span class="time_public_style time_alone_${2 * index}"></span>
              <span class="time_public_style time_alone_${2 * index +
                1}"></span> */
            return template;
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        // effect:'cube',
        mousewheel: true,
        preloadImages: false,
        lazy: true
        // 滚动条
        /* scrollbar: {
          el: ".swiper-scrollbar",
          hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
          draggable: true, //该参数设置为true时允许拖动滚动条。
          snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
          dragSize: 30 //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        } */
      };
    },
    stopSwiper() {
      this.swiper.autoplay.stop();
    },
    startSwiper() {
      this.swiper.autoplay.start();
    }
  },
  computed: {}
};
</script>

<style scoped>
.swiper_box {
  position: relative;
}
.time_line_alone {
  position: absolute;
  z-index: 3;
  bottom: 60px;
  width: 100%;
}
.time_line_alone .ul_style {
  width: 100%;
}
.time_line_alone .ul_style li {
  cursor: default;
  position: absolute;
  text-align: center;
  transform: translateY(-50%);
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  z-index: 5;
  font-size: 16px;
  background: #71879d;
}
.time_line_alone .ul_style li:nth-child(1) {
  left: 7.2%;
}
.time_line_alone .ul_style li:nth-child(2) {
  left: 27.3%;
}
.time_line_alone .ul_style li:nth-child(3) {
  left: 47.3%;
}
.time_line_alone .ul_style li:nth-child(4) {
  left: 67.3%;
}
.time_line_alone .ul_style li:nth-child(5) {
  left: 87.3%;
}
.data_content {
  text-align: center;
  margin-top: 70px;
}
.alone_style_1 .second_title {
  margin: 0;
}

.swiper_box >>> .swiper-slide .alone_style_1 .login_img img {
  width: 23%;
  margin: 15px 0 23px;
}
.swiper_box >>> .swiper-slide .alone_style_2 .login_img img {
  margin: 17px 0 19px;
}
.display_inline {
  display: inline-block;
}
.first_title {
  margin-right: 20px;
  font-size: 24px;
  color: #b81d29;
}
.second_title {
  font-size: 24px;
  color: #000000;
  letter-spacing: -1.37px;
  line-height: 30px;
  margin: 20px 0;
}
.test_banner {
  width: 100%;
}
.swiper_box {
  width: 1200px;
  margin: 0 auto;
  background: rgb(255, 255, 255);
}
.swiper-slide {
  height: 390px;
}
.swiper_box >>> .swiper-button-prev,
.swiper_box >>> .swiper-button-next {
  top: 39%;
}
.swiper_box >>> .swiper-pagination::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background: #ccc;
}
.swiper_box >>> .swiper-pagination-bullet-active {
  background: #fff;
  color: #b81d29;
}
.swiper_box >>> .swiper-pagination-bullet-active::before {
  background: #bb2934 !important;
  border: 4px solid #ebc0c3 !important;
}
.swiper_box >>> .swiper_pagination_alone:focus {
  outline: none;
}
.swiper_box >>> .swiper-button-prev,
.swiper_box >>> .swiper-button-next {
  background: none;
  color: #bababa;
  font-size: 36px;
}
.swiper_box >>> .swiper-button-prev:focus,
.swiper_box >>> .swiper-button-next:focus {
  outline: none;
}
.swiper_box >>> .swiper_pagination_alone {
  cursor: default;
  position: relative;
  font-size: 16px;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0;
  background: #fff;
  border-radius: 0;
  opacity: 1;
}
.swiper_box >>> .swiper_pagination_alone::before {
  cursor: pointer;
  position: absolute;
  content: "";
  top: 50%;
  left: 44%;
  transform: translateY(-50%) translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  z-index: 5;
  border: 4px solid #eaeaea;
}

.swiper_box >>> .txt_infor {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  vertical-align: -83px;
}
.swiper_box >>> .li_after_1 {
  left: 18.5%;
}
.swiper_box >>> .li_after_2 {
  left: 50%;
}
.swiper_box >>> .li_after_3 {
  left: 62%;
}
.swiper_box >>> .li_after_1::before {
  left: 50%;
}
.swiper_box >>> .li_after_2::before {
  left: 50%;
}
.swiper_box >>> .li_after_3::before {
  left: 50%;
}

.swiper_box >>> .time_public_style::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  z-index: 5;
  font-size: 16px;
  background: #71879d;
}
</style>