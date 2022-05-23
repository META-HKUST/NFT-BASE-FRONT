<template>
  <div class="create-page">
    <div class="create-wrap">
      <p>required fields have an asterisk:* </p>
      <div class="input-wrap">
        <div class="row-wrap">
          <div class="input-item">
            <label>First name*</label>
            <input checked placeholder="first name"/>
          </div>
          <div class="input-item">
            <label>Last name*</label>
            <input placeholder="last name"/>
          </div>
        </div>
        <div class="input-item">
          <label>Email*</label>
          <input placeholder="Email" type="email"/>
        </div>
        <div class="input-item">
          <label>Password*</label>
          <input placeholder="password" type="password"/>
        </div>
        <label class="input-checkbox">
          <input type="checkbox"/>
          <p>I certify that l am 18 years or older, and agree to the User Agreement and Privacy Policy. </p>
        </label>
        <div class="input-item submit">
          <button class="submit">Create account</button>
        </div>
      </div>
      <p class="goto-login" @click="gotoLogin">goto Login</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

function gotoLogin() {
  router.push('/login')
}

</script>


<style scoped lang="scss">
.create-page {
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

  .create-wrap {
    width: 630px;
    height: 820px;
    border-radius: 12px;
    background: #fff;
    padding: 60px 80px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    .input-wrap {
      margin-top: 20px;


      .input-item {
        margin-top: 20px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;

        label {
          font-weight: bold;
        }

        input {
          margin-top: 4px;
          border: 1px solid #ccc;
          border-radius: 10px;
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
          margin-top: 40px;

          .submit {
            width: 100%;
            padding: 0 30px;
            height: 66px;
            border: none;
            border-radius: 10px;
            background: #0032B8;
            font-weight: bold;
            font-size: 18px;
            color: #FFFFFF;
            cursor: pointer;

            &:hover {
              background: #265cec;
            }
          }
        }
      }

      .input-checkbox {
        margin-top: 20px;
        display: flex;
        align-items: center;

        input {
          font-size: 80px;
        }

        p {
          margin-left: 10px;
        }
      }

      .row-wrap {
        display: flex;

        .input-item:not(:first-child) {
          margin-left: 18px;
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
}

</style>
