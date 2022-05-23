<template>
  <div class="login-page">
    <div class="login-wrap">
      <h1 class="title"> Sign in</h1>
      <div class="label-line">
        <label>New users?</label>
        <p class="btn-label" @click="createAccount">Create account</p>
      </div>
      <div class="input-wrap">
        <div class="item"><input placeholder="Email" type="email"/></div>
        <div class="item"><input placeholder="Password" type="password"/></div>
        <div class="item">
          <p class="btn-label" @click="resetPassword">Forget the Password?</p>
        </div>
        <div class="item submit">
          <button class="submit" @click="submit">Sure</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";
import {login} from '@/apis/user';

const router = useRouter()
const route = useRoute()

function createAccount() {
  router.push('/signup')
}

function resetPassword() {
  router.push('/resetpassword')
}

function submit() {
  console.log('click login')
  login()
}

</script>


<style scoped lang="scss">
.login-page {
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

  .login-wrap {
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
        margin-top: 20px;
        display: flex;
        align-items: center;


        input {
          border: none;
          border-radius: 23px;
          width: 100%;
          height: 46px;
          padding: 0 20px 0 20px;
          font-size: 20px;
          color: #000;
          background: #F1F1F1;

          &::placeholder {
            color: #999;
          }

        }

        &.submit {
          justify-content: flex-end;

          .submit {
            padding: 0 30px;
            height: 44px;
            border: none;
            border-radius: 22px;
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
}

</style>
