<template>
  <section class="sidebar">
    <div class="logo-wrapper">
      <img class="logo-img" src="../assets/logo.svg"/>
    </div>
    <div class="close-button cursor-pointer" @click="close"></div>
    <div class="sidebar-nav">
      <span v-for="(nav, index) in navs" :key="index" @click="scrollToSection(nav.active)" class="nav-text">
        <span v-if="nav.active===currentSection" style="color: #294b89; "> {{nav.text}} </span>
        <span v-else> {{nav.text}} </span>
      </span>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NavSideMenu',
    components: {},
    props: ['content', 'currentSection', 'sectionRefs'], /* navs = [ { title: '首页', href: '#', active: 'Poster' }, ...]*/
    methods: {
      close: function () {
        this.$emit('closeNavSidebar', true);
      },
      scrollToSection: function (sectionName) {
        this.sectionRefs['sectionsContainer'].scrollTop = this.sectionRefs[sectionName].$el.offsetTop - 99;
        this.close();
      }
    },
    data () {
      return {
        isMenuOpened: false,
        navs: []
      };
    },
    mounted () {
      this.navs = this.content.navs;
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../static/css/_util.scss';

  .sidebar {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;

    .logo-wrapper {
      position: absolute;
      left: 24px;
      top: 27px;

      height: 35.6px;
      width: auto;
      .logo-img {
        height: 100%;
      }
    }
    .sidebar-nav {
      width: 75%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      > .nav-text {
        cursor: pointer;
        padding-bottom: 25px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: rgba(116, 127, 147, 0.87);

        &.active {
          font-weight: 600;
          color: black;
        }
      }
    }

    .close-button { // menu opened, icon X
      position: absolute;
      right: 24px;
      top: 24px;
      width: 50px;
      height: 50px;
      &:before,
      &:after {
        display: block;
        content: '';
        width: 24px;
        height: 3px;
        background-color: #637ca8;
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
  }

</style>
