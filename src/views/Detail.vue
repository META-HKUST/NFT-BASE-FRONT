<template>
  <div class="detail-page">
    <div class="content">
      <div class="top">
        <div class="left">
          <div class="board">
            <div class="img-wrap">
              <img/>
            </div>
            <div class="method-wrap">
              <div class="like-wrap">
                <img class="like-icon" src="@/assets/like.svg"/>
                <div class="like-num"> 1234</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="title-wrap">
              <h3 class="title">WAW #7138</h3>
              <p class="brief">Women and Weapons</p>
            </div>
            <div class="descrip-wrap">
              <p>Generation fill content Generation fill contentGeneration fill
                content Generation fill content Generation fill contentGeneration fill
                content Generation fill content Generation fill contentGeneration fill
                content Generation fill content Generation fill
                contentGeneration fill content Generation fill content Generation fill
                contentGeneration fill content</p>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="@/assets/sample.png"/>
            </div>
            <div class="right">
              <div>Collection</div>
              <div>Jane</div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="@/assets/sample.png"/>
            </div>
            <div class="right">
              <div>Collection by</div>
              <div>Jane</div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="@/assets/sample.png"/>
            </div>
            <div class="right">
              <div>Owned by</div>
              <div>1000 owners</div>
            </div>
          </div>
          <div class="item detail">
            <label>Details</label>
            <div class="detail-wrap">
              <div>xxxxxx</div>
              <div>xxxxxx</div>
            </div>
          </div>
        </div>

      </div>
      <div class="bottom">
        <label class="title">Transfers</label>
        <div class="list-wrap">
          <ul>
            <li>
              <div class="user">
                <img src="@/assets/sample.png"/>
                <div class="name">Tom to WAW</div>
              </div>
              <div class="time"> May 31，2022 at 6:59 pm</div>
            </li>
            <li>
              <div class="user">
                <img src="@/assets/sample.png"/>
                <div class="name">Tom to WAW</div>
              </div>
              <div class="time"> May 31，2022 at 6:59 pm</div>
            </li>
            <li>
              <div class="user">
                <img src="@/assets/sample.png"/>
                <div class="name">Tom to WAW</div>
              </div>
              <div class="time"> May 31，2022 at 6:59 pm</div>
            </li>
          </ul>
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

const router = useRouter()

const state: any = reactive(
    {
      page: 1,
      items: []
    })

</script>

<style scoped lang="scss">
.detail-page {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .content {
    width: 1254px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 60px 10px;

    > .top {
      display: flex;
      justify-content: space-around;
      width: 100%;

      > .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;

        .board {
          //width: 700px;
          width: 500px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;

          .img-wrap {
            //width: 700px;
            //height: 660px;
            width: 500px;
            height: 460px;
            border-radius: 8px 8px 0px 0px;
            background: #D8D8D8;

            img {

            }
          }

          .method-wrap {
            height: 70px;
            padding: 8px 20px;
            width: 100%;
            border-radius: 0px 0px 8px 8px;
            border: 1px solid #8C8C8C;
            display: flex;
            align-items: center;

            .like-wrap {
              display: flex;
              align-items: center;

              .like-icon {

              }

              .like-num {
                margin-left: 10px;

              }
            }
          }
        }
      }

      .right {
        width: 50%;

        .top {
          border-bottom: 1px solid #e2e2e2;

          .title-wrap {
            .title {
              margin: 0;
            }

            .brief {
            }

          }

          .descrip-wrap {
            margin-top: 10px;
            padding: 10px 10px 20px 10px;

            p {


            }

          }

        }

        .item {
          border-bottom: 1px solid #e2e2e2;
          margin: 10px;
          padding: 10px 10px;
          display: flex;
          justify-content: flex-start;


          > .left {
            display: flex;
            align-items: center;
            padding: 0 20px;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              overflow: hidden;
            }

          }

          .right {
            > *:first-child {
              font-size: 20px;
              font-weight: bold;
              color: #464646;
            }

            > *:last-child {
              font-size: 14px;
              color: #767676;
            }
          }

          &.detail {
            display: flex;
            flex-flow: column nowrap;

            label {
              font-size: 20px;
              font-weight: bold;
              color: #333;
            }

            .detail-wrap {
              margin: 10px 0;
              width: 100%;
              display: flex;
              justify-content: space-between;
            }
          }

        }
      }

    }

    .bottom {
      align-self: flex-start;
      padding: 10px 60px;

      .title {
        font-size: 20px;
        font-weight: bold;
      }

      .list-wrap {
        margin-top: 10px;
        width: 500px;

        ul {
          width: 100%;

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #aaa;

            .user {
              display: flex;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #00bd7e;
                overflow: hidden;

              }

              .name {
                font-size: 20px;
                font-weight: bold;
                margin-left: 10px;
              }
            }

            .time {
              font-size: 16px;
              color: #333;
            }
          }
        }
      }

    }
  }
}
</style>
