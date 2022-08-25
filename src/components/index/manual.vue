<template>
  <div class="manual">
    <div class="section-about" id="manual">
      <div class="content-container">
        <div class="manual_box">
          <div class="manual_left animated bounceInLeft">
            <img
              class="manualtableimg"
              src="../../../static/images/img3.jpg"
            />
            <!-- <img class="manualrightimg" src="../../../static/images/manual_right.png" /> -->
          </div>
          <div class="manual_right animated bounceInLeft">
            <div class="manualright_box">
              <h4>{{ manual.title }}</h4>
              <!-- <p class="line"></p> -->
              <p>{{ manual.content }}</p>
              <div
                class="
                  btn-box
                  d-flex
                  align-items-center
                  justify-content-space-around
                "
              >
                <div class="btn-left">
                  <router-link class="btn" to="#">{{ manual.btn }}</router-link>
                </div>

                <!-- <button>{{manual.btn}}</button>
                      <button>{{manual.btn2}}</button> -->
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
  name: "manual",
  data() {
    return {};
  },
  props: ["language"],
  computed: {
    manual() {
      return data[this.language || "en"].manual;
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

.manual {
  margin: 0 auto;
}
.manual_box {
  width: 100%;
  height: 550px;
}
.manual_left {
  position: relative;
  width: 60%;
  height: 100%;
  float: left;
}
.manualtableimg {
  z-index: 10;
  width: 100%;
  height: 100%;
}
.manual_right {
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
.manualright_box {
  width: 70%;
}
.manual_right h4 {
  font-size: 38px;
  color: #000844;
  margin: 0 auto 20px;
  text-align: center;
}
// .manual_right h4::after {
//     content: "";
//     display: block;
//     background: #405ff8;
//     width: 60px;
//     height: 2px;
//     margin: 20px 0;
// }
.manual_right p {
  font-size: 16px;
  line-height: 24px;
  color: #000844;
  text-align: left;
  word-break: break-word;
  // width: 80%;
}
.manual_right .btn-box {
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
    width: 100%;
    height: 45px;
    padding-right: 2%;
  }
}

// x < 768
@include md-rd-xs() {
  .manual {
    margin: 50px auto 0;
  }
  .manual_left {
    width: 100%;
  }
  .manualleftimg,
  .manualrightimg {
    display: none;
  }
  .manualtableimg {
    width: 95%;
    margin: 0 auto;
  }
  .manual_right {
    width: 100%;
  }
  .manualright_box {
    width: 90%;
    margin: 0 auto;
    float: none;
  }
  .manual_right h4 {
    margin: 20px auto 0;
    font-size: 24px;
  }
  .manual_right p {
    font-size: 16px;
    width: 100%;
  }
  .manual_box {
    display: table;
  }
  .manual_left {
    display: table-footer-group;
    float: none;
  }
  .manual_right {
    display: table-header-group;
    float: none;
  }
}
</style>
