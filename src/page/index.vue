<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <div class="container-inner" >
      <div class="sections">
        <home ref="Home" :language="language">
        </home>
        <interaction ref="interaction" id="interaction" :language="language"></interaction>
        <model :language="language"></model>
        <robot :language="language"></robot>
        <manual :language="language"></manual>
        <!-- <bottom :language="language"></bottom> -->
      </div>
    </div>
    <foot :language="language"></foot>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import home from "../components/index/Home";
import interaction from "../components/index/interaction";
import model from "../components/index/model";
import robot from "../components/index/robot";
import manual from "../components/index/manual";
import foot from "../components/foot";
export default {
  name: "index",
  components: {
    "nav-bar": NavBar,
    home: home,
    interaction: interaction,
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
      currentSection: "home"
      // componentsIsShown: [false, false, false, false, false, false, false]
    };
  },
  methods: {
    // handleScroll: function(e) {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //   let offsetTop = document.querySelector('#interaction').offsetTop;
    //   if (scrollTop > offsetTop) {
    //     this.currentSection = "Other";
    //   } else {
    //     this.currentSection = "home";
    //   };
    // },
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
    //  window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import "../../static/css/_util.scss";
@import "../../static/css/_app.scss";

.container-inner{
  padding-bottom: 100px;
}
</style>
