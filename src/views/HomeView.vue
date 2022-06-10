<template>
  <div class="home-page">
    <div class="header">
      <div class="left">
        <img class="text-img" src="@/assets/home-text.svg"/>
      </div>
      <div class="right">
        <div class="board"></div>
        <div class="text-wrap">
          <p>WAW #7138</p>
          <p>Women and Weapons</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="items">
        <div class="item">
          <div class="board"></div>
          <div class="text-wrap">
            <p>WAW #7138</p>
            <p>Women and Weapons</p>
          </div>
        </div>
        <div class="item">
          <div class="board"></div>
          <div class="text-wrap">
            <p>WAW #7138</p>
            <p>Women and Weapons</p>
          </div>
        </div>
        <div class="item">
          <div class="board"></div>
          <div class="text-wrap">
            <p>WAW #7138</p>
            <p>Women and Weapons</p>
          </div>
        </div>
      </div>
      <div class="event-banner">

      </div>
      <div class="whatis">
        <h3>whar is nft</h3>
        <p>Generation fill content Generation fill content Generation fill content Generation fill content <br/>
          Generation fill content Generation fill content </p>
      </div>
      <div class="howto">
        <div class="item"><p></p></div>
        <div class="item"><p></p></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useStore} from "@/stores/store";
import {notification, message} from "ant-design-vue";

const router = useRouter()

const store = useStore()

// if (!store.token) {
//   router.push('/login')
// }

</script>

<style scoped lang="scss">
.home-page {
  .header {
    width: 100%;
    height: 770px;
    background: url("@/assets/background.jpg");
    background-size: 100% auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .left {
      .text-img {
        height: 100px;
      }
    }

    .right {
      .board {
        width: 563px;
        height: 495px;
        border-radius: 8px;
        background: #FFFFFF;
      }

      .text-wrap {
        margin-top: 30px;

        > p:first-child {
          font-size: 20px;
          font-weight: bold;
          color: #464646;
        }

        > p:last-child {
          font-size: 14px;
          color: #767676;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
    min-height: 500px;
    padding: 20px 0;

    .items {
      display: flex;
      justify-content: center;
      position: absolute;
      top: -100px;
      z-index: 10;

      .item {
        margin: 10px;

        .board {
          width: 400px;
          height: 400px;
          border-radius: 2px;
          background: #FFFFFF;
          border: 1px solid #767676;
        }

        .text-wrap {
          margin-top: 30px;

          > p:first-child {
            font-size: 20px;
            font-weight: bold;
            color: #464646;
          }

          > p:last-child {
            font-size: 14px;
            color: #767676;
          }
        }
      }
    }

    .event-banner {
      margin-top: 460px;
      width: 1400px;
      height: 533px;
      border-radius: 8px;
      background: #F1F1F1;
    }

    .whatis {
      padding: 100px;
      text-align: center;

      h3 {
        font-size: 36px;
        font-weight: normal;
        line-height: 44px;
        letter-spacing: 0;
        color: #9E9E9E;
      }

      p {
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #9E9E9E;
      }
    }

    .howto {
      display: flex;
      justify-content: center;

      .item {
        margin: 10px;
        width: 500px;
        height: 400px;
        border-radius: 8px;
        background: #F1F1F1;
      }

    }
  }
}

</style>
