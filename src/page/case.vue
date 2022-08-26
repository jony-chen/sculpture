<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <div class="container-inner" >
        <div class="sections">
          <h4 class="case_title">{{customized.sculpture_title}}</h4>
          <div class="case_box">
            <div class="row_box">
              <dd  v-for="(item, index) in customized.case_name" :key="index" class="d-flex align-items-center">
                <img :src="'../../static/images/case/icon' + index + '.jpg'" />
                <dl class="mask">{{item}}</dl>
              </dd>
            </div>
          </div>
          <router-link class="case_btn" to="/pixelpainting">{{customized.pixelpainting_title}}</router-link>
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
  name: "pixelpainting",
  components: {
    "nav-bar": NavBar,
    foot: foot,
  },
  data() {
    return {
      language: "en",
      currentSection: "customized",
    };
  },
  methods: {
    listenLangSwitch: function(language) {
      this.language = language;
    }
  },
  mounted() {
    // this.componentsIsShown[0] = true;
    this.language =
      this.$route.query.lang ||
      (this.$route.query.lang != "en" && this.$route.query.lang != "ch"
        ? "en"
        : this.$route.query.lang);
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
    .sections{
      padding: 0 ;
      width: 1500px;
      height: auto;
      margin: 0 auto;
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
      margin: 0 auto 60px;
      padding: 20px 0;
      // background: #eee;
      box-shadow: 0 0 10px #eee;
      .row_box{
        width: 100%;
        height: auto;
        margin: 25px auto;
        dd{
          width: calc(23% - 2px);
          height: 250px;
          margin: 20px 1%;
          border: 1px solid #f0f0f0;
          cursor: pointer;
          display: inline-block;
          position: relative;
          &:hover{
            box-shadow: 0 0 10px rgb(100, 100, 100);
            .mask{
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 16px;
              font-weight:bold;
              background: rgba(17, 17, 17, 0.8);
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
          img{
            width: 100%;
            height: auto;
          }
          .mask{
            display: none;
          }
        }
      }
    }
    .case_btn{
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;
      display: inline-block;
      z-index: 99;
      background: #006DB7;
      color: #FFCF00;
      padding: 0 20px;
      margin: 0 auto 100px;
    }
  }
}
</style>
