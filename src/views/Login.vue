<template>
  <div class="login-page">
    <div class="login-wrap">
      <h1 class="title"> Sign in</h1>
      <div class="label-line">
        <label>New users?</label>
        <p class="btn-label" @click="createAccount">Create account</p>
      </div>
      <div class="input-wrap">
        <div class="item"><input placeholder="Email" type="email" v-model="state.email"/></div>
        <div class="item"><input placeholder="Password" type="password" v-model="state.passwd"/></div>
        <div class="item">
          <p class="btn-label" @click="resetPassword">Forget the Password?</p>
        </div>
        <div class="item submit">
          <button class="submit" @click="handleLogin">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs, reactive, ref, toRaw} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {notification, message} from "ant-design-vue";
import {useStore} from "@/stores/store";
import {login} from '@/apis/user';
import Utils from "@/utils/utils";

const router = useRouter()
const route = useRoute()

const state: any = reactive({
  email: '',
  passwd: ''
})

const store = useStore()

if (store.token) {
  router.replace({name: 'Home'})
}

async function handleLogin() {
  const {email, passwd} = toRaw(state)
  if (!email || !passwd) {
    message.error({
      content: '请输入Email和密码！'
    })
    return
  } else if (!Utils.isValidEmail(email)) {
    message.error("Email格式不对!")
    return
  }

  const res: any = await login({email, passwd})

  if (res.code === 100) {
    store.setToken(res.data.token)
    // notification.success({message: res.msg})
    router.replace({name: "Home"})
  } else {
    notification.error({message: res.msg + ' (' + res.code + ')'})
  }
}

function createAccount() {
  router.push('/register')
}

function resetPassword() {
  router.push('/resetpassword')
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
