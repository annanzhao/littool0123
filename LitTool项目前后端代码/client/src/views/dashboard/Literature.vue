<template>
    <div class="container container-left">
      <div class="title">过渡段-文献</div>
  
      <div class="input-box">
        <p>
          过渡段可以让你的introduction逻辑更严密，并且内容更丰富。如果你想要通过讨论相关文献来引用你的论文，请输入你文章的相关文献的标题和简介。这是选择性的，你可以选择不生成。
        </p>
      </div>
  
      <div class="input-box">
        <label for="literatureTitle" class="left-label">Related Literature</label>
        <textarea v-model="literatureTitle" id="literatureTitle" placeholder="(1)Hessami.Z..da Fonseca.M.L. ... (文献内容)" rows="10"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        literatureTitle: "",
      };
    },
    methods: {
      submitForm() {
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
        console.log('Related Literature:', this.literatureTitle);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
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
    height: 200px; /* 增加文本输入框的高度 */
    overflow-y: auto; /* 显示滚动条 */
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
  