<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <div class="container-inner">
      <div class="sections">
        <h4>{{about.title}}</h4>
        <div class="company_box d-flex align-items-center justify-content-center">
          <img src="../../static/images/img2.jpg" />
          <div class="company_txt_box">
            <h4>{{about.company}}</h4>
            <p>{{about.info}}</p>
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
  name: "about",
  components: {
    "nav-bar": NavBar,
    foot: foot,
  },
  data() {
    return {
      language: "en",
      currentSection: "about"
    };
  },
  methods: {
    listenLangSwitch: function(language) {
      this.language = language;
    }
  },
  mounted() {
    this.language =
      this.$route.query.lang ||
      (this.$route.query.lang != "en" && this.$route.query.lang != "ch"
        ? "en"
        : this.$route.query.lang);
  },
  computed: {
    about() {
      return data[this.language || "en"].about;
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
  .sections{
    width: 100%;
    height: auto;
    margin: 60px auto 0;
    h4{
      margin: 0 auto;
      font-size: 36px;
      font-weight: normal;
      color: #000;
    }
    .company_box{
      width: 100%;
      height: auto;
      background: #eee;
      margin: 80px auto ;
      img{
        width: 60%;
        height: auto;
      }
      .company_txt_box{
        width: 30%;
        height: auto;
        margin: 0 auto;
        h4{
          font-size: 36px;
          font-weight: normal;
          color: #000;
        }
        p{
          font-size: 18px;
          font-weight: normal;
          color: #000;
          text-align: left;
          margin: 20px auto 0;
        }
      }
    }
  }
}
</style>
