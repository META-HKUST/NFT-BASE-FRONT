<template>
  <div class="explore-page">
    explore
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

function gotoLogin() {
  router.push('/login')
}

</script>


<style scoped lang="scss">
.explore-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  background: #cab;
  padding: 10px;
}

</style>
