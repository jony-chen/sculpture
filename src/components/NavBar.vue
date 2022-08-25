<template>
  <section class="nav-container full-width" :class="{'nav-solid': !isCurrentAbout}"
      :style="{position: isCurrentAbout ? 'absolute': 'fixed'}">
    <transition v-if="isShowNav" name="side-menu">
      <nav-side-menu v-if="isMenuOpened && content !== undefined" :currentSection="currentSection"
                     :content="content"
                     :sectionRefs="sectionRefs" @closeNavSidebar="isMenuOpened=false;"
                     class="side-bar-navs"/>
    </transition>
    <section class="top-bar" :class="{'top-solid': !isCurrentAbout}">
      <div class="left">
        <div class="ether-logo">
          <div class="logo-wrapper d-flex">
            <!-- <a href="/">
              <img class="logo-img" src="../assets/logo.svg"/>
            </a> -->
              <img class="logo-img" src="../assets/logo.svg"/>
              <h3>3D Blockstar</h3>
          </div>
        </div>
        <div class="navs" v-if="content !== undefined && isShowNav">
          <div v-for="(nav, index) in content.navs" :key="index" class="nav-item-wrapper"
               v-on:click="scrollToSectionOrOpenLink(nav.active)">
              <span v-if="nav.active === currentSection" class="nav-item" style="color:#629afb;font-weight: bold;">
                {{nav.text}}
              </span>
             <span class="nav-item" v-else>
                {{nav.text}}
              </span>

              <!-- <span class="nav-item" :style="nav.active === 'home' ? 'color:#629afb;font-weight: bold;' : ''">
                {{nav.text}}
              </span> -->
          </div>
        </div>
      </div>
      <div class="language-and-menu" v-if="content !== undefined && isShowNav">
        <div class=language-switch-wrapper>
          <language-switch v-on:languageSwitched="listenLangSwitch" :language="language"/>
        </div>
        <div class="menu-icon-wrapper">
          <div class="side-bar-button cursor-pointer" @click="isMenuOpened = !isMenuOpened">
            <div class="hamburger-button" v-if="!isMenuOpened">
              <div class="hamburger-item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import data from "../service/data";
import LanguageSwitcher from "./LanguageSwitcher";
import NavSideMenu from "./NavSideMenu";

export default {
  name: 'NavBar',
  components: {
    'language-switch': LanguageSwitcher,
    'nav-side-menu': NavSideMenu
  },
  props: {
    currentSection: {
      type: String,
      default: "Home"
    },
    sectionRefs: Object,
    language: {
      type: String,
      default: "en"
    },
    isShowNav: {
      type: Boolean,
      default: true
    },
    componentOffsetTop: Array
  },
  data() {
    return {
      isScrolling: false,
      isMenuOpened: false
    };
  },
  computed: {
    isCurrentAbout() {
      return this.currentSection === "Home";
    },
    content() {
      return data[this.language || "en"].nav;
    }
  },
  methods: {
    scrollToSectionOrOpenLink: function(sectionName) {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (sectionName) this.$router.push({path: sectionName}); //跳转到对应的页面
    },
    scrollPosition: function (startOffset, totalOffset, easeNumber) {
      return startOffset + totalOffset * easeNumber;
    },
    easeOutQuad: function (t) {
      // decelerating to zero velocity
      return t * (2 - t);
    },
    listenLangSwitch: function (language) {
      this.$emit('languageSwitched', language);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/_util.scss";
@import "../../static/css/app.scss";
// @import '../styles/app.scss';

.nav-container {
  // height : first section 84px, later: 63px
  // height: #{$nav-bar-height-wide};
  background-color: #ffffff;
  z-index: 100;
  // padding-bottom: 20px;
}

.top-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 32px - 24px);
  margin-left: auto;
  margin-right: auto;
  padding: 15px 0;
  .ether-logo {
    height: 100%;
    padding-right: 180px;
    .logo-wrapper {
      height: 30px;
      width: auto;
      .logo-img {
        height: 100%;
      }
      h3{
        line-height: 32px;
        height: 30px;
        margin: 0 auto 0 10px;
        padding: 0;
        color: #000000;
      }
    }
  }
  .navs {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(80% - 44px - 77px);
    height: 100%;
    max-width: 825px;
    .nav-item-wrapper {
      position: relative;
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .nav-item {
        position: relative;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        // color: rgba(116, 127, 147, 0.87);
        color: #000000;
        user-select: none;
      }
      .nav-item:hover {
        color: #629afb;
        font-weight: bold;
      }
      .nav-item:after {
        content: "";
        position: absolute;
        bottom: -12px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #629afb;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(0, 4, 1);
        transform: scale3d(0, 4, 1);
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
        transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
      }
    }
    .nav-item-wrapper:hover {
      .nav-item:after {
        background-color: #629afb;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }

  // x >= 961
  @include md-rd-gt-sm() {
    min-width: 904px;
    max-width: 1500px;
  }
  @include md-rd-lt-md() {
    padding-top: 24px;
    .navs {
      display: none;
    }
  }
}

.left {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.language-and-menu {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  .language-switch-wrapper {
    position: relative;
  }
  .menu-icon-wrapper {
    height: 100%;
    padding-left: 20px;
    display: none;
    // x < 960
    @include md-rd-lt-md() {
      display: block;
    }

    .hamburger-button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 30px;
      .hamburger-item {
        width: 18px;
        height: 2px;
        background-color: #637ca8;
        &:before,
        &:after {
          content: "";
          display: block;
          width: 18px;
          height: 2px;
          background-color: #637ca8;
        }
        &:before {
          transform: translateY(-6px);
        }
        &:after {
          transform: translateY(4px);
        }
      }
    }
  }
}

.close-button {
  // menu opened, icon X
  position: relative;
  width: 50px;
  height: 50px;
  &:before,
  &:after {
    display: block;
    content: "";
    width: 24px;
    height: 4px;
    background-image: linear-gradient(316deg, #67eefb, #1c8ef7);
    transform-origin: center;
    position: absolute;
    top: 20px;
    right: 12px;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
}

// when is not first section
.nav-solid {
  // background-color: #38437d;
  // height: #{$nav-bar-height-thin};
  box-shadow: 0 2px 0 0 rgba(1, 13, 26, 0.14);
  .top-solid {
    padding: 15px 0;
  }
}

/**
   * side bar menu Open/Close animation
   */
.side-menu-enter-active,
.side-menu-leave-active {
  transition: transform 0.5s ease;
}

.side-menu-enter,
.side-menu-leave-to {
  transform: translateY(-100vh);
}


// x < 1500
@include md-rd-lt-max() {
  .top-bar .ether-logo{
    padding-right: 80px;
  }
}
</style>
