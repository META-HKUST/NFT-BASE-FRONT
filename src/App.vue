<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo" @click="handleClickLogo"> LOGO</div>
      <div class="input-wrap"><input placeholder="search"></div>
      <nav>
        <RouterLink to="/myaccount">My account</RouterLink>
        <RouterLink to="/explore">Explore</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
      </nav>
      <div class="right-wrap">
        <button v-if="!store.token&&showSignin" class="btn" @click="gotoLogin">Sign in</button>
        <button v-if="!!store.token" class="btn" @click="handleLogout">Logout</button>
      </div>
    </div>
  </header>
  <div class="router-wrap">
    <RouterView/>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import {useStore} from "@/stores/store";
import {notification, message} from "ant-design-vue";
import {watch, ref} from "vue";
import Footer from "@/components/Footer.vue";

const router = useRouter()

const store = useStore()

function handleLogout() {
  store.setToken('')
  message.info({content: '用户已退出！'})
  router.push('/login')
}

function gotoLogin() {
  router.push('/login')
}

let showSignin = ref(true)

watch(() => router.currentRoute.value.path,
    (newPath, oldPath) => {
      if (newPath === '/login') {
        showSignin.value = false
      } else {
        showSignin.value = true
      }
    }, {immediate: true})

function handleClickLogo() {
  router.push({path: '/'})
}

</script>

<style>
@import '@/assets/base.css';

#app {
  font-weight: normal;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

header {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
//margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
//display: inline-block; padding: 0 1rem; //border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>

<style scoped lang="scss">
.header {
  padding: 0 20px;
  flex-shrink: 0;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      margin: 0 20px;
      font-weight: bold;
      cursor: pointer;
    }

    .input-wrap {
      margin-left: 12px;

      input {
        width: 240px;
        height: 36px;
        border-radius: 18px;
        border: 1px solid #444;
        padding: 0 20px 0 40px;
      }
    }

    nav {
      margin-left: 20px;
      display: flex;
      justify-content: flex-start;

      a {
        font-weight: bold;
        font-size: 18px;
        color: #666;
        white-space: nowrap;
        transition: all 0.1s;

        &:hover {
          color: #0f78b3;
        }

        &.router-link-exact-active {
          color: #0f78b3;
        }

        &.router-link-exact-active:hover {
          background-color: transparent;
        }

      }
    }

    .right-wrap {
      .btn {
        padding: 0 30px;
        height: 44px;
        border: none;
        border-radius: 10px;
        background: #0032B8;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
        cursor: pointer;
        white-space: nowrap;

        &:hover {
          background: #265cec;
        }
      }
    }
  }
}

.router-wrap {
  margin-top: 80px;
  flex-grow: 1;
  width: 100%;
}
</style>
