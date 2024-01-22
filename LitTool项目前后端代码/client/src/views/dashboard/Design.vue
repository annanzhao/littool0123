<template>
    <div class="container container-left">
      <div class="title">研究设计模块</div>
  
      <div class="input-box">
        <label for="empiricalStrategy" class="left-label">实证策略</label>
        <input v-model="empiricalStrategy" type="text" id="empiricalStrategy" placeholder="Example: regression discontinuity (RD)" style="color: #888;">
      </div>
  
      <div class="input-box">
        <label for="mainIdea" class="left-label">实证策略的主要思路</label>
        <textarea v-model="mainIdea" id="mainIdea" placeholder="Example: We compare Brazilian municipalities where a female candidate barely won to those where a female candidate barely lost mayoral elections" style="color: #888;"></textarea>
      </div>
  
      <div class="input-box">
        <label for="dataSource" class="left-label">你的数据集是什么?</label>
        <textarea v-model="dataSource" id="dataSource" placeholder="Example: Homicide and violence data source is the Brazilian Ministry of Health's TABNET Platform and covers the period 2000-2016, local election data source is the Brazilian Electoral Court (Tribunal Superior Eleitoral)." style="color: #888;"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        empiricalStrategy: "",
        mainIdea: "",
        dataSource: ""
      };
    },
    methods: {
      submitForm() {
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
        console.log('Empirical Strategy:', this.empiricalStrategy);
        console.log('Main Idea:', this.mainIdea);
        console.log('Data Source:', this.dataSource);
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
  