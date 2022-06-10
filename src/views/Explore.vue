<template>
  <div class="explore-page">
    <div class="header">
      <div class="header-board">
        <p>Explore All NFT</p>
      </div>
      <div class="header-menu">
        <ul>
          <li :class="state.page===1?'active':''" @click="state.page=1">All NFT</li>
          <li :class="state.page===2?'active':''" @click="state.page=2">Event</li>
          <li :class="state.page===3?'active':''" @click="state.page=3">Art galary</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="header-board">
        <div class="btn-list">
          <div class="btn"><i></i>video</div>
          <div class="btn"><i></i>audio</div>
          <div class="btn"><i></i>picture</div>
        </div>
        <div class="btn-list">
          <div class="btn"><i></i>sort</div>
        </div>
      </div>
      <div class="item-list">
        <div class="item" v-for="item in state.items" @click="handleClickItem(item.id)">
          <img class="img" :src="item.img"/>
          <div class="bottom">
            <div class="user-img">
              <img src="@/assets/sample.png"/>
            </div>
            <div class="text">
              <div>{{ item.title }}</div>
              <div>{{ item.brief }}</div>
            </div>
            <div class="method-line">
              <div class="btn">...</div>
              <div class="like-wrap">
                <img class="like" src="@/assets/like.svg"/>
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
import {notification, message} from "ant-design-vue";
import Utils from "@/utils/utils";
import likeImg from "@/assets/like.svg";

const router = useRouter()

const state: any = reactive(
    {
      page: 1,
      items: []
    })

for (let i = 0; i < 19; i++) {
  state.items.push({
    // img: new URL('/src/assets/like.svg', import.meta.url),
    id: i + 100,
    img: likeImg,
    title: 'WAW #7139',
    brief: 'Women and Weapons',
    like: 1234
  })
}

function handleClickItem(id: string) {
  router.push({
    path: '/detail/' + id
  })
}

</script>


<style scoped lang="scss">
.explore-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: auto;
  background: #eee;

  .header {
    width: 100%;
    background: #abc;
    flex-shrink: 0;

    .header-board {
      width: 100%;
      height: 198px;
      background: url("@/assets/rectangle.png");
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 36px;
        letter-spacing: 0;
        color: #0032B8;
      }
    }

    .header-menu {
      background: #fff;
      height: 80px;
      border-bottom: 1px solid #D8D8D8;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      ul {
        display: flex;
        justify-content: center;
        align-items: self-end;
        padding-top: 10px;

        li {
          margin: 0 8px;
          padding: 10px;
          font-weight: bold;
          font-size: 20px;
          color: #464646;
          cursor: pointer;

          &:hover, &.active {
            color: #8C8C8C;
            border-bottom: 2px solid #0000f0;
          }
        }
      }

    }
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    //background: #eee;
    width: 1254px;

    .header-board {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      .btn-list {
        display: flex;
        align-items: center;
      }

      .btn {
        width: 118px;
        height: 41px;
        border-radius: 8px;
        background: #FFFFFF;
        box-sizing: border-box;
        //border: 1px solid #EEEEEE;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 10px;
        }

        &:hover {
          background: #0985ff;
          color: #fff;
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
        position: relative;

        .user-img {
          position: absolute;
          top: -15px;
          right: 20px;
          width: 30px;
          height: 30px;
          border-radius: 15px;
          background: #00bd7e;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

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
