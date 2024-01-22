<template>
    <div class="container container-left">
      <div class="title">过渡段-背景</div>
  
      <div class="input-box">
        <label for="backgroundTransition" class="left-label">过渡段内容</label>
        <textarea v-model="backgroundTransition" id="backgroundTransition" placeholder="Example: The background and prevalence of violence against women"></textarea>
      </div>
  
      <div class="input-box">
        <label for="detailedBackground" class="left-label">详细信息</label>
        <textarea v-model="detailedBackground" id="detailedBackground" placeholder="Example: The background and prevalence of violence against women, highlighting the global significance of addressing this issue for achieving gender equality and empowering women and girls, with specific examples from different countries"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundTransition: "",
        detailedBackground: "",
      };
    },
    methods: {
      submitForm() {
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
        console.log('Background Transition:', this.backgroundTransition);
        console.log('Detailed Background:', this.detailedBackground);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #000;
  }
  
  .container-left {
    margin-left: 20px; /* 调整左边距 */
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #004480;
  }
  
  .input-box {
    margin-bottom: 15px;
  }
  
  .left-label {
    text-align: left;
    display: block;
    margin-bottom: 5px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
  }
  
  button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  