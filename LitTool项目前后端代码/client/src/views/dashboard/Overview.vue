<template>
    <div class="container container-left">
      <div class="title">研究问题模块</div>
  
      <div class="input-box">
        <label for="articleTitle" class="left-label">你文章的标题是什么?</label>
        <input v-model="articleTitle" type="text" id="articleTitle" placeholder="Example: Fighting violence against women: The role of female political representation" style="color: #888;">
      </div>
  
      <div class="input-box">
        <label for="coreStory" class="left-label">你文章的核心故事是什么? 你文章研究的是什么问题?</label>
        <textarea v-model="coreStory" id="coreStory" placeholder="Example: The effect of female political representation on domestic violence" style="color: #888;"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
      <div v-if="currentTab === 'result'">
      <!-- 结果视图 -->
      <div class="title">生成润色后版本</div>
      <p>文章标题: {{ articleTitle }}</p>
      <p>核心故事: {{ coreStory }}</p>
      <!-- 可以根据需要添加更多内容 -->
      <button @click="currentTab = 'form'">返回编辑</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      articleTitle: "",
      coreStory: "",
      currentTab: 'form', // 新增变量来控制当前视图
    };
  },
  methods: {
    submitForm() {
      // 创建请求体
      const requestBody = {
        balance: 0,  // 假设 balance 是一个静态值
        title: this.articleTitle,
        coreStroy: this.coreStory  
      };

      // 向服务器发送请求
      fetch('http://lit-tool.natapp1.cc/api/Intro/ResearchQquestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json-patch+json',
          'accept': 'text/plain'
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.currentTab = 'result'; // 提交成功后，切换到结果视图
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
  
  input,
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