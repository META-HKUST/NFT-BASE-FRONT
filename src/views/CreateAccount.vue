<template>
  <div class="create-page">
    <div class="create-wrap" v-if="!state.isRegister">
      <p>required fields have an asterisk:* </p>
      <div class="input-wrap">
        <div class="input-item">
          <label>Email*</label>
          <input v-model="state.email" placeholder="Email" type="email"/>
        </div>
        <div class="input-item">
          <label>Password*</label>
          <input v-model="state.passwd" placeholder="password" type="password"/>
        </div>
        <div class="input-item">
          <label>Name*</label>
          <input v-model="state.name" placeholder="name"/>
        </div>
        <label class="input-checkbox">
          <input type="checkbox" v-model="state.isAgree"/>
          <p>I certify that l am 18 years or older, and agree to the User Agreement and Privacy Policy. </p>
        </label>
        <div class="input-item submit">
          <button class="submit" @click="handleRegister">Create account</button>
        </div>
      </div>
      <button class="goto-login" @click="gotoLogin">goto Login</button>
    </div>
    <div class="create-wrap registered" v-else>
      <div class="top">Verify your email</div>
      <div class="bottom">
        <div class="time">{{ state.time }}</div>
        <p>We sent a verification email to526606715@qq.com. Click the link inside to getstartd! </p>
        <div class="btn-line">
          <p>没有收到Email?</p>
          <button class="send-btn" :class="state.timeout?'active':''" @click="handleSendEmail">Send email again</button>
        </div>
        <button class="goto-login" @click="gotoLogin">goto Login</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs, reactive, ref, toRaw} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {notification, message} from "ant-design-vue";
import {useStore} from "@/stores/store";
import {register, sendRegisterEmail} from "@/apis/user";
import Utils from "@/utils/utils";

const router = useRouter()
const route = useRoute()

const state: any = reactive({
  email: '',
  passwd: '',
  name: '',
  isAgree: false,
  isRegister: false,
  timer: null,
  time: 60,
  timeout: false
})

const store = useStore()

if (store.token) {
  router.replace({name: 'Home'})
}


function setTime() {
  state.time = 60;
  state.timeout = false
  state.timer = setInterval(() => {
    state.time--;
    if (state.time === 0) {
      window.clearInterval(state.timer)
      state.timer = null
      state.timeout = true
    }
  }, 1000)
}

async function handleRegister() {
  const {email, passwd, name, isAgree} = toRaw(state)
  if (!email) {
    message.error("请输入Email!")
    return
  } else if (!Utils.isValidEmail(email)) {
    message.error("Email格式不对!")
    return
  } else if (passwd.length < 6) {
    message.error("请输入密码!（长度至少6位）")
    return
  } else if (!name) {
    message.error("请输入用户名!")
    return
  } else if (!isAgree) {
    message.error("请同意用户条款!")
    return
  }

  const res: any = await register({email, passwd, name})
  if (res.code === 0) {
    state.isRegister = true
    setTime()
    notification.success({message: "注册成功！请查收Email激活账号！"})
  } else {
    notification.error({message: res.msg + ' (' + res.code + ')'})
  }
}

async function handleSendEmail() {
  const {email, name} = toRaw(state)
  const res: any = await sendRegisterEmail({email, name})
  if (res.code === 0) {
    setTime()
    notification.success({message: "发送成功！请查收Email激活账号！"})
  } else {
    notification.error({message: res.msg + ' (' + res.code + ')'})
  }
}

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

    .goto-login {
      border: none;
      border-radius: 20px;
      background: #4467f5;
      margin-top: 100px;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      height: 40px;
      padding: 0 40px;

      &:hover {
        background: #2f54eb;
      }
    }

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
        padding: 4px;

        &:hover {
          cursor: pointer;
          background: #deeaf6;
        }

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


  }

  .create-wrap.registered {
    padding: 0;
    display: flex;
    flex-flow: column nowrap;

    .top {
      color: #fff;
      background: #2f54eb;
      font-size: 30px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 140px;
    }

    .bottom {
      background: #fff;
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .time {
        font-size: 80px;
        background: #00bd7e;
        width: 140px;
        height: 140px;
        border-radius: 70px;
        color: #fff;
        display: flex;
        //justify-items: center;
        justify-content: center;
        align-items: center;
      }

      > p {
        color: #333;
        padding: 40px 100px;
        text-align: center;
        font-size: 18px;
      }

      .btn-line {
        margin-top: 100px;
        display: flex;
        align-items: center;

        > p {
          padding: 0 20px;
        }

        .send-btn {
          border: none;
          border-radius: 30px;
          height: 60px;
          background: #8c8d8e;
          color: #fff;
          padding: 0 40px;
          font-size: 20px;

          &.active {
            background: #4467f5;

            &:hover {
              cursor: pointer;
              background: #2f54eb;
            }

          }
        }
      }
    }

  }
}

</style>
