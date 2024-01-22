import { defineStore } from 'pinia'

export const UserStore = defineStore("user", {

    state: () => {
        return {
            id: 0,
            username: "", // 添加用户名属性
            email: "",    // 添加邮箱属性
            password: "", // 添加密码属性
            token: ""
        }
    },
    actions: {},
    getters: {}

})
