<template>
  <div>
<!--    <div>首页</div>-->
<!--    <button @click="handleLogout">Logout</button>-->
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useStore} from "@/stores/store";
import {notification, message} from "ant-design-vue";

const router = useRouter()

const store = useStore()

if (!store.token) {
  router.push('/login')
}

function handleLogout() {
  store.setToken('')
  message.info({content: '用户已退出！'})
  router.push('/login')
}

</script>

