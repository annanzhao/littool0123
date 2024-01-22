<template>
    <div class="register-panel">
      <n-card title="用户注册">
        <n-form :rules="rules" :model="user">
          <n-form-item path="username" label="用户名">
            <n-input v-model:value="user.username" placeholder="请输入用户名" />
          </n-form-item>
          <n-form-item path="email" label="邮箱">
            <n-input v-model:value="user.email" placeholder="请输入邮箱" />
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input v-model:value="user.password" type="password" placeholder="请输入密码" />
          </n-form-item>
        </n-form>
        <template #footer>
          <n-checkbox v-model:checked="user.rember" label="记住我" />
          <n-button @click="register">注册</n-button>
        </template>
      </n-card>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, inject } from 'vue'
  import { UserStore } from '../stores/UserStore'
  
  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  const message = inject("message")
  const axios = inject("axios")
  const userStore = UserStore()
  
  /**验证表单规则 */
  let rules = {
    username: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      { min: 3, max: 12, message: "用户名长度在 3 到 12 个字符", trigger: "blur" },
    ],
    email: [
      { required: true, message: "请输入邮箱", trigger: "blur" },
      { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
    ],
  }
  
  /**用户注册数据 */
  const user = reactive({
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    rember: localStorage.getItem("rember") == 1 || false,
  })
  
  /**注册 */
  const register = async () => {
    let result = await axios.post("/user/register", {
      username: user.username,
      email: user.email,
      password: user.password
    });
    if (result.data.code == 200) {
      userStore.token = result.data.data.token
      userStore.username = result.data.data.username
      userStore.id = result.data.data.id
  
      // 把数据存储到localStorage
      if (user.rember) {
        localStorage.setItem("username", user.username)
        localStorage.setItem("email", user.email)
        localStorage.setItem("password", user.password)
        localStorage.setItem("rember", user.rember ? 1 : 0)
      }
      router.push("/dashboard")
      message.info("注册成功")
    } else {
      message.error("注册失败")
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .register-panel {
    width: 500px;
    margin: 0 auto;
    margin-top: 130px;
  }
  </style>
  