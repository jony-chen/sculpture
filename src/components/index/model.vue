<template>
  <div class="model">
    <div class="section-about" id="model">
      <div class="content-container">
        <div class="model_box">
          <div class="model_left animated bounceInLeft">
            <img
              class="modeltableimg"
              src="../../../static/images/img1.jpg"
            />
            <!-- <img class="modelrightimg" src="../../../static/images/model_right.png" /> -->
          </div>
          <div class="model_right animated bounceInLeft">
            <div class="modelright_box">
              <h4>{{ model.title }}</h4>
              <!-- <p class="line"></p> -->
              <p>{{ model.content }}</p>
              <div
                class="
                  btn-box
                  d-flex
                  align-items-center
                  justify-content-space-around
                "
              >
                <div class="btn-left">
                  <router-link class="btn" to="#">{{ model.btn }}</router-link>
                </div>
                <div class="btn-right">
                  <router-link class="btn" to="#">{{ model.btn2 }}</router-link>
                </div>

                <!-- <button>{{model.btn}}</button>
                      <button>{{model.btn2}}</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../service/data";
// import {WOW} from 'wowjs';
export default {
  name: "model",
  data() {
    return {};
  },
  props: ["language"],
  computed: {
    model() {
      return data[this.language || "en"].modelbase;
    },
  },
  mounted() {
    // new WOW.WOW().init();
    // new WOW({live: false}).init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import "../../../static/css/_app.scss";
@import "../../../static/css/_util.scss";

.model {
  margin-top: 50px;
}
.model_box {
  width: 100%;
  height: 550px;
}
.model_left {
  position: relative;
  width: 60%;
  height: 100%;
  float: left;
}
.modeltableimg {
  z-index: 10;
  width: 100%;
  height: 100%;
}
.model_right {
  width: 40%;
  height: 100%;
  float: right;
  margin: 0 auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
}
.modelright_box {
  width: 70%;
}
.model_right h4 {
  font-size: 38px;
  color: #000844;
  margin: 0 auto 20px;
  text-align: center;
}
// .model_right h4::after {
//     content: "";
//     display: block;
//     background: #405ff8;
//     width: 60px;
//     height: 2px;
//     margin: 20px 0;
// }
.model_right p {
  font-size: 16px;
  line-height: 24px;
  color: #000844;
  text-align: left;
  word-break: break-word;
  // width: 80%;
}
.model_right .btn-box {
  width: 100%;
  height: 50px;
  margin: 40px auto 0;
  .btn {
    width: 100%;
    height: 45px;
    display: block;
    text-align: center;
    line-height: 45px;
    border: 2px solid #999999;
    color: #000;
    font-size: 14px;
    background: transparent;
    cursor: pointer;
    &:hover {
      border: 2px solid #aaa;
      background-color: #ddd;
    }
  }
  .btn-left {
    float: left;
    display: block;
    width: 30%;
    height: 45px;
    padding-right: 2%;
  }
  .btn-right {
    float: right;
    display: block;
    width: 67%;
    height: 45px;
  }
}

// x < 768
@include md-rd-xs() {
  .model {
    margin: 50px auto 0;
  }
  .model_left {
    width: 100%;
  }
  .modelleftimg,
  .modelrightimg {
    display: none;
  }
  .modeltableimg {
    width: 95%;
    margin: 0 auto;
  }
  .model_right {
    width: 100%;
  }
  .modelright_box {
    width: 90%;
    margin: 0 auto;
    float: none;
  }
  .model_right h4 {
    margin: 20px auto 0;
    font-size: 24px;
  }
  .model_right p {
    font-size: 16px;
    width: 100%;
  }
  .model_box {
    display: table;
  }
  .model_left {
    display: table-footer-group;
    float: none;
  }
  .model_right {
    display: table-header-group;
    float: none;
  }
}
</style>
