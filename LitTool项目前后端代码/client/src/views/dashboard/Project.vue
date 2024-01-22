<template>
    <div class="container container-left">
      <div class="title">过渡段 - 项目</div>
  
      <div class="intro-text">
        <p>
          过渡段可以让你的引言更加严密并且内容更加丰富。一种过渡段是关于项目背景的，你的研究是否涉及评估某个政策或项目的影响？如果是，下面提供了关于该政策或项目的详细信息。
        </p>
      </div>
  
      <div class="input-box">
        <label for="projectName" class="left-label">项目名称</label>
        <input v-model="projectName" type="text" id="projectName" placeholder="Example:APRP (Area Poverty Reduction Program)" style="color: #888;">
      </div>
  
      <div class="input-box">
        <label for="projectDetails" class="left-label">项目详细信息</label>
        <textarea v-model="projectDetails" id="projectDetails" placeholder="Famde he roam ams to ebcate o mtousetodstrom emdte and ospne ares to paces wit ete work oprtnte and me cordtons trmay opetes wtm the same ount,mowmg toueodstoviaesto mearby touns or the county entet, two oons are ofeec: re aatmrts m oubichousme comuntes o a subscy os 0 n er apta to urtas or buda ew touse wth the ounty Tthe ooemesu ted in housetods mowing to es solated ad more deeoed areas, wit mproved acesto amentes such s scthols and heathar nstitutons. Ewidene sugeststhatsctho guaty stigterin the destnatonregion;for the housing voucher group." style="color: #888; height: 150px;"></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projectName: "",
        projectDetails: ""
      };
    },
    methods: {
      submitForm() {
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
        console.log('项目名称:', this.projectName);
        console.log('项目详细信息:', this.projectDetails);
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
  
  .intro-text {
    margin-bottom: 15px;
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
  