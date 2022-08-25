<template>
  <div class="hello">
    <transition name="nav-bar">
      <nav-bar @languageSwitched="listenLangSwitch" :is-show-nav="true"
        :currentSection="currentSection" :sectionRefs="$refs"
        :language="language"/>
    </transition>
    <img src="../../static/images/bg1.jpg" style="width:100%; margin:60px auto 0;" />
    <div class="container-inner">
      <div class="sections">
        <!-- <interaction ref="interaction" id="interaction" :language="language"></interaction> -->
        <div class="contact">
          <h4>{{contact.title}}</h4>
          <div class="contact_box  d-flex align-items-center justify-content-space-between">
            <div class="contact_txt_box">
              <p>{{contact.phone}}</p>
              <p>{{contact.qq}}</p>
              <p>{{contact.wechat}}</p>
              <p>{{contact.twitter}}</p>
              <p>{{contact.facebook}}</p>
              <p>{{contact.tiktok}}</p>
            </div>
            <div class="contact_code_box d-flex align-items-center justify-content-space-between">
              <div class="code_box">
                <p>{{contact.tiktokcode}}</p>
                <img src="../../static/images/tiktok.png" />
              </div>
              <div class="code_box">
                <p>{{contact.wechatcode}}</p>
                <img src="../../static/images/wechat.jpg" />
              </div>
              <div class="code_box">
                <p>{{contact.wechatofficialcode}}</p>
                <img src="../../static/images/wechat.jpg" />
              </div>
            </div>
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
  name: "contact",
  components: {
    "nav-bar": NavBar,
    foot: foot,
  },
  data() {
    return {
      language: "en",
      // scrollHandlerCountDown: null, // undefined = executable, else in count down
      // componentRefs: [ "Home", "Masternode", "Dapp Market", "Forum", "Voting", "Developer Service", "Block Explorer", "Ecosystem" ],
      // componentOffsetTop: [],
      currentSection: "contact"
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
    contact() {
      return data[this.language || "en"].contact;
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
  .contact{
    width: 100%;
    height: auto;
    margin: 0 auto;
    h4{
      font-size: 36px;
      margin: 0 auto;
      font-weight: normal;
      color: #000;
    }
    .contact_box{
      width: 100%;
      height: auto;
      margin: 80px auto 50px;
      .contact_txt_box{
        width: 50%;
        height: auto;
        p{
          font-size: 18px;
          font-weight: normal;
          color: #000;
          text-align: left;
          margin: 20px auto 0;
        }
      }
      .contact_code_box{
        width: 50%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        .code_box{
          p{
            font-size: 18px;
            font-weight: bold;
            color: #000;
            text-align: center;
            margin: 0 auto 10px;
          }
          img{
            width: 180px;
            height: 180px;
          }
        }
      }
    }
  }
}
</style>
