<template>
    <div class="container container-left">
      <div class="title">文章结构编辑</div>
  
      <div class="input-box">
        <label for="structure" class="left-label">文章结构</label>
        <textarea v-model="articleStructure" id="structure" placeholder="例如：2. Institutional background; 3. Data; 4. Empirical strategy; 5. Results; 6. Potential mechanisms; 7. Conclusion" style="color: #888;"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articleStructure: ""
      };
    },
    methods: {
      submitForm() {
        console.log('Submitted Article Structure:', this.articleStructure);
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
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
    margin-left: 20px;
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
  