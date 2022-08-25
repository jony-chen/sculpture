<template>
  <div class="interaction">
    <div class="section-about">
      <div class="content-container">
        <p class="info">{{interaction.info}}</p>
        <div class="interaction_box">
          <div
            class="card_box wow bounceInUp"
            :class="'card_box' + index"
            v-for="(interaction, index) in interaction.interactions"
            :key="index"
          >
            <img :src="'../../../static/images/icon' + (index + 1) + '.jpg'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../service/data";
// import { WOW } from "wowjs";
export default {
  name: "interaction",
  data() {
    return {};
  },
  props: ["language"],
  computed: {
    interaction() {
      return data[this.language || "en"].interaction;
    },
  },
  mounted() {
    // new WOW().init();
    // new WOW({ live: false }).init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import "../../../static/css/_app.scss";
@import "../../../static/css/_util.scss";

.interaction {
  padding-top: 50px;
}
.info{
  margin: 0 auto 50px;
}
.interaction_box {
  width: 100%;
}
.card_box {
  float: left;
  margin-right: 4%;
  background: #fff;
  background-size: 100%;
  width: 22%;
  height: 220px;
  padding: 15px 0;
  border-radius: 10px;
  box-shadow: 2px 2px 6px #dfdfdf;
  &:last-child {
    margin-right: 0;
  }
}
.card_box h3 {
  font-size: 20px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #405ff8;
  margin: 20px auto 0;
}
.card_box p {
  font-size: 14px;
  width: 50%;
  word-wrap: break-word;
  margin: 0 auto;
  text-align: center;
  color: #626262;
  margin: 20px auto 0;
}
.card_box img {
  width: 100%;
  height: auto;
}
.news {
  font-size: 12px;
  color: #405ff8;
  margin: 80px auto 0;
  cursor: pointer;
}
.card_box0:hover,
.card_box1:hover,
.card_box2:hover,
.card_box3:hover,
.card_box4:hover {
  cursor: pointer;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.card_box0,
.card_box1,
.card_box2,
.card_box3,
.card_box4 {
  cursor: pointer;
  transition: all .5s ease;
  -moz-transition: all .5s ease; /* Firefox 4 */
  -webkit-transition: all .5s ease; /* Safari 和 Chrome */
  -o-transition: all .5s ease; /* Opera */
}
// x < 768
@include md-rd-xs() {
  .interaction {
    margin: 50px auto 0;
  }
  .card_box {
    margin: 0 auto;
    float: none;
  }
}
</style>
