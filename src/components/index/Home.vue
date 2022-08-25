<template>
  <section class="indexhead">
    <slot name="nav" />

    <div class="section-about">
      <div class="download d-flex align-items-center justify-content-center">
        <div class="wrapper">
          <swiper ref="mySwiper" v-bind:options="swiperOptions">
            <swiper-slide v-for="(item, index) in 5" v-bind:key="index">
              <img :src="'../../../static/images/banner' + item + '.jpg'" />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../service/data";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        loop: true, // 循环模式选项
        autoHeight:'true',//开启自适应高度,容器高度由slide高度决定
        speed: 2000,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: "fade",
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  props: ["language"],
  computed: {
    banner() {
      return data[this.language || "en"].banner;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import "../../../static/css/_app.scss";

.indexhead {
  // background: url("../../../static/images/head_bg.png") no-repeat;
  width: 100%;
  height: auto;
  // background-size: cover;
  // background-position: center center;
}
.section-about {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .download {
    width: 100%;
    height: auto;
    margin: 0 auto;
    .wrapper{
      width: 100%;
      height: 1200px;
      .swiper-container {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        height: 100%;
        width: 100%;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
// x < 1500
@include md-rd-lt-max() {
  .section-about {
    .download {
      width: 100%;
    }
  }
}

// x < 768
@include md-rd-xs() {

}
</style>
