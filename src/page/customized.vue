<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <div class="container-inner">
      <div class="sections">
        <h4 class="customizedtitle">{{customized.title}}</h4>
        <div class="banner d-flex align-items-center justify-content-center">
          <!-- <img src="../../static/images/img2.jpg" /> -->
          <router-link to="/contact">{{customized.btn}}</router-link>
          <div class="mask"></div>
        </div>
        <h4 class="select_title">{{customized.select_title}}</h4>
        <div class="select_box d-flex align-items-center justify-content-space-between">
          <router-link to="/" class="left_box">
            <h4>{{customized.left_title}}</h4>
            <img src="../../static/images/img1.jpg" />
            <p>{{customized.left_info}}</p>
          </router-link>
          <router-link to="/" class="right_box">
            <h4>{{customized.right_title}}</h4>
            <img src="../../static/images/img1.jpg" />
            <p>{{customized.right_info}}</p>
          </router-link>
        </div>
        <h4 class="case_title">{{customized.case_title}}</h4>
        <div class="case_box">
          <div class="row_box d-flex align-items-center justify-content-space-between">
            <dd>
              <img src="../../static/images/icon1.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon2.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon3.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon4.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon1.jpg" />
            </dd>
          </div>
          <div class="row_box d-flex align-items-center justify-content-space-between">
            <dd>
              <img src="../../static/images/icon1.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon2.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon3.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon4.jpg" />
            </dd>
            <dd>
              <img src="../../static/images/icon1.jpg" />
            </dd>
          </div>
        </div>
      </div>
    </div>
    <foot :language="language"></foot>
  </div>
</template>

<script>
import data from "../service/data";
import NavBar from "../components/NavBar";
import foot from "../components/foot";
export default {
  name: "customized",
  components: {
    "nav-bar": NavBar,
    foot: foot,
  },
  data() {
    return {
      language: "en",
      currentSection: "customized"
    };
  },
  methods: {
    listenLangSwitch: function(language) {
      this.language = language;
    }
  },
  mounted() {
    this.language = this.$route.query.lang || (this.$route.query.lang != "en" && this.$route.query.lang != "ch" ? "en" : this.$route.query.lang);
  },
  computed: {
    customized() {
      return data[this.language || "en"].customized;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import "../../static/css/_util.scss";
@import "../../static/css/_app.scss";
.container-inner{
  padding: 60px 0 100px;
  width: 1500px;
  height: auto;
  margin: 0 auto;
  .customizedtitle{
    margin: 100px auto 60px;
    font-size: 36px;
    font-weight: normal;
    color: #000;
  }
  .banner{
    height: 600px;
    width: 100%;
    background: url("../../static/images/img2.jpg") 100%;
    background-size: cover;
    position: relative;
    a{
      background: #fff;
      height: 50px;
      line-height: 50px;
      width: 150px;
      font-size: 14px;
      color: #000;
      box-shadow: 1px 1px 10px #000;
      font-weight: bold;
      border-radius: 5px;
      display: inline-block;
      z-index: 99;
      &:hover{
        background: #006DB7;
        color: #FFCF00;
        -webkit-transition: all .6s linear;
        -moz-transition: all .6s linear;
        -ms-transition: all .6s linear;
        -o-transition: all .6s linear;
        transition: all .6s linear;
      }
       &:hover + .mask{
        background: rgba(255,255,255,0.6);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: all .5s linear;
        -moz-transition: all .5s linear;
        -ms-transition: all .5s linear;
        -o-transition: all .5s linear;
        transition: all .5s linear;
       }
    }
  }
  .select_title{
    margin: 100px auto 60px;
    color: #000;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
  }
  .select_box{
    width: 100%;
    height: auto;
    margin: 0 auto;
    cursor: pointer;
    .left_box{
      width: 50%;
      background: #006DB7;
      text-align: center;
      border-radius: 15px 0 0 15px;
      margin: 0 auto;
      &:hover{
        opacity: 0.9;
        box-shadow: 0 0 10px rgb(105, 105, 105);
      }
      h4{
        font-size: 28px;
        font-weight: bold;
        color: #fff;
        margin: 0 auto;
        padding: 50px 0 40px;
      }
      img{
        width: auto;
        height: 250px;
      }
      p{
        width: 70%;
        height: 150px;
        text-align: left;
        font-size: 16px;
        // font-weight: 500;
        margin: 0 auto;
        padding-top: 40px;
        color: #fff;
        line-height: 1.5;
      }
    }
    .right_box{
      width: 50%;
      background: #FFCF00;
      text-align: center;
      border-radius: 0 15px 15px 0;
      margin: 0 auto;
      &:hover{
        opacity: 0.9;
        box-shadow: 0 0 10px rgb(105, 105, 105);
      }
      h4{
        font-size: 28px;
        font-weight: bold;
        color: #000;
        margin: 0 auto;
        padding: 50px 0 40px;
      }
      img{
        width: auto;
        height: 250px;
      }
      p{
        width: 70%;
        height: 150px;
        text-align: left;
        font-size: 16px;
        // font-weight: 500;
        margin: 0 auto;
        padding-top: 40px;
        color: #000;
        line-height: 1.5;
      }
    }
  }
  .case_title{
    margin: 100px auto 60px;
    color: #000;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
  }
  .case_box{
    width: 100%;
    height: auto;
    margin: 0 auto 100px;
    padding: 20px 0;
    // background: #eee;
    box-shadow: 0 0 10px #eee;
    .row_box{
      width: 100%;
      height: auto;
      margin: 20px auto;
      dd{
        width: 18%;
        height: auto;
        margin: 0 1%;
        border: 1px solid #f5f5f5;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
