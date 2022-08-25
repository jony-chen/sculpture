<template>
  <div class="robot">
    <div class="section-about" id="robot">
      <div class="content-container">
        <div class="robot_box">
          <div class="robot_left animated bounceInright">
            <div class="robotleft_box">
              <h4>{{ robot.title }}</h4>
              <!-- <p class="line"></p> -->
              <p>{{ robot.content }}</p>
              <div
                class="
                  btn-box
                  d-flex
                  align-items-center
                  justify-content-space-around
                "
              >
                <div class="btn-right">
                  <router-link class="btn" to="#">{{ robot.btn }}</router-link>
                </div>

                <!-- <button>{{robot.btn}}</button>
                      <button>{{robot.btn2}}</button> -->
              </div>
            </div>
          </div>
          <div class="robot_right animated bounceInright">
            <img
              class="robottableimg"
              src="../../../static/images/img2.jpg"
            />
            <!-- <img class="robotleftimg" src="../../../static/images/robot_left.png" /> -->
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
  name: "robot",
  data() {
    return {};
  },
  props: ["language"],
  computed: {
    robot() {
      return data[this.language || "en"].robot;
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

.robot {
  margin: 0 auto;
}
.robot_box {
  width: 100%;
  height: 550px;
}
.robot_right {
  position: relative;
  width: 60%;
  height: 100%;
  float: right;
}
.robottableimg {
  z-index: 10;
  width: 100%;
  height: 100%;
}
.robot_left {
  width: 40%;
  height: 100%;
  float: left;
  margin: 0 auto;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
}
.robotleft_box {
  width: 70%;
}
.robot_left h4 {
  font-size: 38px;
  color: #000844;
  margin: 0 auto 20px;
  text-align: center;
}
// .robot_left h4::after {
//     content: "";
//     display: block;
//     background: #405ff8;
//     width: 60px;
//     height: 2px;
//     margin: 20px 0;
// }
.robot_left p {
  font-size: 16px;
  line-height: 24px;
  color: #000844;
  text-align: right;
  word-break: break-word;
  // width: 80%;
}
.robot_left .btn-box {
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
  .btn-right {
    float: right;
    display: block;
    width: 100%;
    height: 45px;
    padding-left: 2%;
  }
}

// x < 768
@include md-rd-xs() {
  .robot {
    margin: 50px auto 0;
  }
  .robot_right {
    width: 100%;
  }
  .robotrightimg,
  .robotleftimg {
    display: none;
  }
  .robottableimg {
    width: 95%;
    margin: 0 auto;
  }
  .robot_left {
    width: 100%;
  }
  .robotleft_box {
    width: 90%;
    margin: 0 auto;
    float: none;
  }
  .robot_left h4 {
    margin: 20px auto 0;
    font-size: 24px;
  }
  .robot_left p {
    font-size: 16px;
    width: 100%;
  }
  .robot_box {
    display: table;
  }
  .robot_right {
    display: table-footer-group;
    float: none;
  }
  .robot_left {
    display: table-header-group;
    float: none;
  }
}
</style>
