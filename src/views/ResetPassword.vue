<template>
  <div class="forgot-page">
    <div class="forgot-wrap">
      <h1 class="title"> Forgot your password?</h1>
      <p>Reset your password with a device you`ve recently used to access Coinbase to avoid a temporary security restriction </p>
      <div class="input-wrap">
        <div class="item">
          <label>Email</label>
          <input placeholder="Email" type="email" v-model="email"/></div>
        <div class="item submit">
          <button class="submit" @click="handleResetPasswd">RESET PASSWORD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, toRaw} from "vue";
import {useRouter} from "vue-router";
import {resetPasswd} from "@/apis/user";
import {notification, message} from "ant-design-vue";
import Utils from "@/utils/utils";

const router = useRouter()
const email = ref('')

function handleResetPasswd() {
  if (!Utils.isValidEmail(email.value)) {
    return message.error({
      content: '请输入正确的Email！'
    })
  }
  // resetPasswd(email.value)
}

</script>


<style scoped lang="scss">
.forgot-page {
  width: 100%;
  height: 100%;
  padding: 50px 100px 0 0;
  display: flex;
  justify-content: flex-end;
  overflow: auto;
  min-width: 960px;
  min-height: 960px;
  background: #2f59c1;
  background: url("@/assets/background.jpg");
  background-size: cover;

  .forgot-wrap {
    width: 630px;
    height: 820px;
    border-radius: 12px;
    background: #fff;
    padding: 60px 80px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    > * {
      margin-top: 20px;
    }

    .title {
      font-size: 40px;
      font-weight: bold;
    }

    .btn-label {
      color: #14A1EF;
      border: none;
      cursor: pointer;

      &:hover {
        color: #0f78b3;
      }
    }

    .label-line {
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      display: flex;
      align-items: center;

      label {
        color: #000000;
      }

      p {
        margin: 0 0 0 10px;
      }

    }

    .input-wrap {
      margin-top: 60px;

      .item {
        margin-top: 40px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;

        label {
          font-size: 18px;
          font-weight: bold;
          color: #808080;
        }

        input {
          margin-top: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          height: 66px;
          padding: 0 20px 0 20px;
          font-size: 18px;
          color: #000;

          &::placeholder {
            color: #999;
          }

        }

        &.submit {
          align-items: center;

          .submit {
            padding: 0 60px;
            height: 66px;
            border: none;
            border-radius: 10px;
            background: #0032B8;
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
            cursor: pointer;

            &:hover {
              background: #265cec;
            }
          }
        }
      }
    }
  }

  .goto-login {
    margin-top: 100px;
    color: #aaa;
    cursor: pointer;

    &:hover {
      color: #0f78b3;
    }
  }
}

</style>
