<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <div class="container-inner">
      <div class="sections">
        <!-- <interaction ref="interaction" id="interaction" :language="language"></interaction> -->
        <div class="banner">
          <h4>{{design.title}}</h4>
          <img src="../../static/images/img3.jpg" />
          <div class="textbox">
            <p>{{design.info}}</p>
          </div>
        </div>
        <model :language="language"></model>
        <robot :language="language"></robot>
        <manual :language="language"></manual>
      </div>
    </div>
    <foot :language="language"></foot>
  </div>
</template>

<script>
import data from "../service/data";
import NavBar from "../components/NavBar";
// import interaction from "../components/index/interaction";
import model from "../components/index/model";
import robot from "../components/index/robot";
import manual from "../components/index/manual";
import foot from "../components/foot";
export default {
  name: "design",
  components: {
    "nav-bar": NavBar,
    // interaction: interaction,
    model: model,
    robot: robot,
    manual: manual,
    // bottom: bottom,
    foot: foot,
  },
  data() {
    return {
      language: "en",
      // scrollHandlerCountDown: null, // undefined = executable, else in count down
      // componentRefs: [ "Home", "Masternode", "Dapp Market", "Forum", "Voting", "Developer Service", "Block Explorer", "Ecosystem" ],
      // componentOffsetTop: [],
      currentSection: "design"
      // componentsIsShown: [false, false, false, false, false, false, false]
    };
  },
  methods: {
    listenLangSwitch: function(language) {
      this.language = language;
      // this.$route.query.lang = language;
      // let data = { lang: undefined };
      // if (language == "ch") {
      //   data.lang = "ch";
      // } else {
      //   data.lang = "en";
      // }
      // this.$router.replace({ path: "/", query: data });
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
    design() {
      return data[this.language || "en"].design;
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
  .banner{
    position: relative;
    h4{
      position: absolute;
      top: 50px;
      margin: 0 auto;
      left: 100px;
      font-size: 36px;
      font-weight: normal;
      color: #fff;
      user-select: none;
    }
    img{
      width: 100%;
    }
    .textbox{
      width: 50%;
      height: 200px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
      position: absolute;
      right: 0;
      bottom: 0;
      p{
        width: 80%;
        text-align: left;
        margin: 0 auto;
        font-size: 16px;
        color: #000;
      }
    }
  }
}
</style>
