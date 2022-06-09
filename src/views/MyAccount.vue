<template>
  <div class="myaccount-page">
    <div class="page-content">
      <div class="banner">
        <img/>
      </div>
      <div class="header">
        <div class="user-info">
          <div class="user-img">
            <img/>
          </div>
          <label class="name">Jame</label>
          <label class="email">jame@gmail.com</label>
        </div>
        <div class="label-menu">
          <div :class="state.page===1?'active':''" @click="state.page=1">Collected</div>
          <div :class="state.page===2?'active':''" @click="state.page=2">Creation</div>
          <div :class="state.page===3?'active':''" @click="state.page=3">Favorites</div>
        </div>
        <div class="size-switch">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="item-list">
        <div class="item" v-for="item in state.items">
          <img class="img" :src="item.img"/>
          <div class="bottom">
            <div class="text">
              <div>{{ item.title }}</div>
              <div>{{ item.brief }}</div>
            </div>
            <div class="method-line">
              <div class="btn">...</div>
              <div class="like-wrap">
                <div class="like"></div>
                <div class="like-num">{{ item.like }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, toRaw} from "vue";
import {useRouter} from "vue-router";
import {resetPasswd} from "@/apis/user";
import {notification, message} from "ant-design-vue";
import Utils from "@/utils/utils";

const router = useRouter()
const state: any = reactive(
    {
      page: 1,
      items: []
    })

for (let i = 0; i < 19; i++) {
  state.items.push({
    img: '',
    title: 'WAW #7139',
    brief: 'Women and Weapons',
    like: 1234
  })
}

</script>


<style scoped lang="scss">
.myaccount-page {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  overflow: auto;

  > .page-content {
    background: #F1F1F1;

    .banner {
      width: 100%;
      height: 200px;
      flex-shrink: 0;
      background: #e5e5e5;

      img {
        width: 100%;
        height: 100%;
        display: none;
      }
    }

    .header {
      background: #fff;
      height: 200px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      align-items: center;

      .user-info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -50px;

        .user-img {
          background: #531dab;
          width: 100px;
          height: 100px;
          border-radius: 100px;

          img {
            width: 100%;
            height: 100%;
            display: none;
          }

        }

        .name {
          font-weight: 800;
          font-size: 30px;
          color: #333;

        }

        .email {
          font-weight: 400;
          font-size: 16px;
          color: #000;
        }
      }

      .label-menu {
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
          padding: 10px;
          margin: 0 4px;
          font-weight: 700;
          font-size: 22px;
          transition: all 0.2s ease;
          border-bottom: 2px solid transparent;

          &:hover {
            cursor: pointer;
            color: #808080;
            border-bottom: 2px solid #0032B8;
          }

          &.active {
            color: #808080;
            border-bottom: 2px solid #0032B8;
          }
        }
      }

      .size-switch {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 88px;
        height: 34px;
        border: 1px solid #999;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        > * {
          width: 44px;
          height: 34px;

          &:first-child {
            border-right: 1px solid #999;
          }
        }
      }

    }

    .item-list {
      width: 1254px;
      padding: 10px;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      overflow-y: auto;

      .item {
        width: 288px;
        height: 380px;
        margin: 10px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;

        .img {
          width: 288px;
          height: 288px;
          background: #0082bd;
        }
      }

      .bottom {
        padding: 6px 10px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        .text {
          height: 54px;
          padding: 0 2px;

          > * {

            &:first-child {

            }

            &:last-child {

            }
          }
        }

        .method-line {
          display: flex;
          justify-content: space-between;

          .btn {
            cursor: pointer;
          }

          .like-wrap {
            display: flex;
            align-items: center;

            .like {
              width: 20px;
              height: 20px;
              background: #f00;
              border-radius: 10px;
              cursor: pointer;
            }

            .like-num {
              margin-left: 4px;
            }
          }
        }
      }

    }
  }
}

</style>
