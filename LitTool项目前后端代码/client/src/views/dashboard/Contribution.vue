<template>
    <div class="container container-left">
      <div class="title">边际贡献</div>
      <div class="input-box">
        <p>
          最后，我们需要生成文章的边际贡献。请注意，生成边际贡献会消耗你不少的 token 量。首先，请输入你自己文章的 abstract，这将帮助我们更好地与其他文献进行对比。
        </p>
      </div>
  
      <div class="input-box">
        <label for="abstract" class="left-label">Abstract</label>
        <textarea
          v-model="abstract"
          id="abstract"
          placeholder="Example: mestieate thefectof women's polca leaderstip n oca goverment on omestc violence apanst womenusng a egression distontinuty desgr, we ompare Braan municipateswhere femacandidate arely won to those where female candidate barey lost maoa electons. Me nd tha the resence fa female maor ladsto a 0 ave reducton i both the homcde ate and wodlence apainstwoman oetour-veartem Teseresu ts re ot abulet re-erstng mund pa thaatcerstics or ther oserae mao atbteoetvy, ur ngs ofe compe ng edence that women n oite ptaya sienicantroereffectively addressing violence against women."
          style="color: grey; overflow: auto; height: 200px;"
        ></textarea>
      </div>
  
      <div class="input-box">
        <label for="literatureSummary" class="left-label">Summary of Other Relevant Literature</label>
        <textarea
          v-model="literatureSummary"
          id="literatureSummary"
          placeholder="1.Decarolis,F,Fisman,R,inotti,P, Vannutell, s, Wang,,222. Gender and bureaucratic coruption: Evidence from two countries. J.Law Econ. Organ."
          style="color: grey; overflow: auto; height: 200px;"
        ></textarea>
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        abstract: "",
        literatureSummary: "",
      };
    },
    methods: {
      submitForm() {
        // 在这里可以进行提交操作，例如将数据发送到服务器
        // 这里只是简单地在控制台输出
        console.log('Abstract:', this.abstract);
        console.log('Literature Summary:', this.literatureSummary);
      },
    },
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
    overflow: auto;
    height: 200px; /* 设置高度 */
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
  