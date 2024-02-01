<template>
  <div class="container container-left">
     <div class="tabs">
       <button :class="{'active-tab': currentTab === 'form'}" @click="currentTab = 'form'">确认信息</button>
       <button :class="{'active-tab': currentTab === 'result'}" @click="showResults">生成润色后版本</button>
     </div>
    <div v-if="showWarning" class="info-message">Submit your info first!</div>
 
 <div v-if="currentTab === 'form'">
   <div class="container container-left">
     <div class="title">整体生成</div>
 
     <div class="input-box">
       <label for="articleTitle" class="left-label">你文章的标题是什么?</label>
       <input v-model="title" type="text" id="articleTitle" placeholder="Example: Fighting violence against women: The role of female political representation" class="custom-input">
     </div>
 
     <div class="input-box">
       <label for="coreStory" class="left-label">核心故事或研究问题</label>
       <textarea v-model="coreStory" id="coreStory" placeholder="Example: The effect of female political representation on domestic violence" class="custom-textarea"></textarea>    
     </div>
 
     <div class="input-box">
       <label for="empiricalStrategy" class="left-label">实证策略</label>
       <textarea v-model="empiricalStrategy" id="empiricalStrategy" placeholder="Example: regression discontinuity (RD)" class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="mainIdeas" class="left-label">实证策略的主要思路</label>
       <textarea v-model="mainIdeas" id="mainIdeas" placeholder="Example: We compare Brazilian municipalities where a female candidate barely won..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="datasetIntroduction" class="left-label">数据集介绍</label>
       <textarea v-model="datasetIntroduction" id="datasetIntroduction" placeholder="Example: BVamp eHomicde and iolence ata source..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="researchFinding1" class="left-label">研究发现1</label>
       <textarea v-model="researchFinding1" id="researchFinding1" placeholder="Example: we find that the presence of a female mayor leads to a 50%..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="researchFinding2" class="left-label">研究发现2</label>
       <textarea v-model="researchFinding2" id="researchFinding2" placeholder="Example: These results are not attributable to pre-existing municipal characteristics..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="researchFinding3" class="left-label">研究发现3</label>
       <textarea v-model="researchFinding3" id="researchFinding3" placeholder="Example: Collectively, our findings offer compelling evidence that women in office play a significant role..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="articleStructure" class="left-label">文章结构</label>
       <textarea v-model="articleStructure" id="articleStructure" placeholder="Example: 2. Institutional background; 3. Data; 4. Empirical strategy; 5. Results; 6. Potential mechanisms; 7. Conclusion" class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="background" class="left-label">背景</label>
       <textarea v-model="background" id="background" placeholder="Example: The background and prevalence of violence against women" class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="backgroundInformation" class="left-label">Background Information</label>
       <textarea v-model="backgroundInformation" id="backgroundInformation" placeholder="Example: The background and prevalence of violence against women, highlighting the global significance..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="projectIntroduction" class="left-label">项目介绍</label>
       <textarea v-model="projectIntroduction" id="projectIntroduction" placeholder="Example: APRP (Area Poverty Reduction Program)" class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="projectDetails" class="left-label">项目的详细信息</label>
       <textarea v-model="projectDetails" id="projectDetails" placeholder="Example: Cammmt cae o es m m t sMilaest rearby tons..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="relatedLiterature" class="left-label">相关文献</label>
       <textarea v-model="relatedLiterature" id="relatedLiterature" placeholder="Example: (1) Hessami.Z.. da Fonseca ML.. 2020.Female political representation and su..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="abstract" class="left-label">摘要</label>
       <textarea v-model="abstract" id="abstract" placeholder="Example: Famo ele muesieate te erecto womens o a eadersto m oa oemert o omesicyo ente aanst women..." class="custom-textarea"></textarea>
     </div>
 
     <div class="input-box">
       <label for="relatedLiteratureTitle" class="left-label">相关文献标题与简介</label>
       <textarea v-model="relatedLiteratureTitle" id="relatedLiteratureTitle" placeholder="Example: 1. Decarolis, F., Fisman, R., Pinotti, P., Vannutelli, S., Wang, Y., 202. Gender and bureaucratic corruption: Evidence from two countries. J. Law Econ." class="custom-textarea"></textarea>
     </div>
 
  <button class="button" @click="submitIntroduction">提交</button>
  
  <button class="button" @click="historyVersion">查看历史版本</button>


        <el-drawer
          v-model="table"
          title="历史版本"
          direction="rtl"
          size="50%"
        >
          <el-table :data="gridData">
            <el-table-column type="selection" width="55" />
            <el-table-column property="genTime" label="生成时间" width="200" />
            <el-table-column property="resultGroup" label="分组" width="200" />
            <el-table-column property="result" label="结果" />

            <el-table-column fixed="right" label="Operations" width="120">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>       
              </template>
            </el-table-column>

          </el-table>
        </el-drawer>

     </div>
 
     <div v-if="currentTab === 'result'">
       <!-- 结果视图 -->
       <div class="title">生成润色后版本</div>
       <!-- 展示表单提交的结果 -->
       <p>文章标题: {{ title }}</p>
       <!-- 其他结果内容... -->
       <button @click="currentTab = 'form'">返回编辑</button>
     </div>
 </div>
 
 <div v-if="currentTab === 'result'">
 
   <div class="container container-left">
     <div class="title">生成结果</div>
     <div class="input-box">
       
       <!-- <textarea v-model="empiricalStrategy" id="empiricalStrategy" placeholder="Example: regression discontinuity (RD)" class="custom-textarea"></textarea>
          -->         
           <el-input
             type="textarea"
             :rows="20"
             placeholder="请输入内容"
             v-model="result.resultDataTxt">
       </el-input>    
     </div>
 
   </div>
 
 </div>
 
 
  <div v-if="isLoading" class="loading-animation">
     <div class="loader"></div>
   </div>
    </div>
    
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       // 表单字段
       introductionGuid: "",
       userGuid: "",
       title: '',
       coreStory: '',
       empiricalStrategy: '',
       mainIdeas: '',
       datasetIntroduction: '',
       researchFinding1: '',
       researchFinding2: '',
       researchFinding3: '',
       articleStructure: '',
       background: '',
       backgroundInformation: '',
       projectIntroduction: '',
       projectDetails: '',
       relatedLiterature: '',
       abstract: '',
       relatedLiteratureTitle: '',
       common:{
         mode:2
       },
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        genTime: '2024-01-28',
        resultGroup: '论文标题',
        result: '研究问题',
        oid:'',
      }],
       result:{
         resultDataTxt:''
       },
       // 响应处理
       submitSuccess: false,
       submitError: '',
       resultMessage: '', // 用于显示提交成功的消息
       errorMessage: '', // 用于显示错误消息
       currentTab: 'form', // 控制当前激活的标签页
       showWarning: false, // 控制是否显示提交信息提示
       isLoading: false, // 控制加载动画的显示与隐藏      
     };
   },
   
   methods: {

  //侧滑
  handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    historyVersion(){
      var data = {introductionGuid:this.introductionGuid};      
       axios.post('http://lit-tool.natapp1.cc/api/Intro/GetIntroVersions', data, {
         headers: {
           'Content-Type': 'application/json-patch+json',
           'accept': 'text/plain'
         }
       })
       .then(response => {
         // 将结果赋值给一个变量以在视图中显示
         if(response.data.isSuccess){
           this.gridData = response.data.result;   
           this.table = true;       
         }
         else{
           this.alterError('保存失败');
         }
       });
    },
  //侧滑
     showResults() {
       // 更新当前标签页为结果视图
       this.currentTab = 'result';       
       return;
       console.log('showResults 方法被调用');
       if (this.allFieldsFilled) {
         this.submitIntroduction(); // 如果所有字段都已填写，则调用提交函数
       } else {
         // 如果未填写所有字段，则显示警告消息
         this.showWarning = true; 
         setTimeout(() => {
           this.showWarning = false; // 3秒后隐藏警告消息
         }, 3000);
       }
     },
     checkFormAndShowResults() {
       if (this.allFieldsFilled) {
         this.currentTab = 'result';
         this.showWarning = false;
       } else {
         this.showWarning = true;
         setTimeout(() => {
           this.showWarning = false;
         }, 3000); // 3秒后隐藏提示
       }
     },
     
     submitIntroduction() {
       this.isLoading = true; // 请求开始，显示加载动画
       console.log('submitIntroduction 方法被调用');
       var data = this.getData();      
       axios.post('http://lit-tool.natapp1.cc/api/Intro/SaveIntro', data, {
         headers: {
           'Content-Type': 'application/json-patch+json',
           'accept': 'text/plain'
         }
       })
       .then(response => {
         // 将结果赋值给一个变量以在视图中显示
         if(response.data.isSuccess){
           this.introductionGuid = response.data.result;
 
           // 请求成功
           this.isLoading = false; // 请求完成，隐藏加载动画
           this.submitSuccess = true;
           this.resultMessage = '您的引言已成功提交!';
           //this.tipOK('保存成功，正在生成润色后版本');                   
         }
         else{
           this.alterError('保存失败');
         }
         // this.generatedVersion = response.data.result;
       })
       .then(response =>{
           //生成
           this.introGenAll();
         }        
       )      
       .catch(error => {
         // 请求失败
         this.isLoading = false; // 请求完成，隐藏加载动画
         this.submitSuccess = false;
         this.submitError = error.response && error.response.data ? error.response.data : error.message;
         this.errorMessage = '提交失败，请稍后再试。';
         console.error('提交失败:', this.submitError);
       });
     },
     introGenAll(){
       var paramData = this.getData();
       axios.post('http://lit-tool.natapp1.cc/api/Intro/IntroGenAll', paramData, {
         headers: {
           'Content-Type': 'application/json-patch+json',
           'accept': 'text/plain'
         }
       })
       .then(response => {        
         // 将结果赋值给一个变量以在视图中显示
         if(response.data.isSuccess){          
           // 请求成功
           this.isLoading = false; // 请求完成，隐藏加载动画
           this.submitSuccess = true;
           this.resultMessage = '您的引言已成功提交!';
           // this.tipOK('已生成完成！');
           this.alterOK('已生成完成！');
 
           this.result.resultDataTxt = response.data.result.data;
           // 更新当前标签页为结果视图
           this.currentTab = 'result';           
         }
         else{
           this.alterError('保存失败');
         }
       })
       .catch(error => {
         // 请求失败
         this.isLoading = false; // 请求完成，隐藏加载动画
         this.submitSuccess = false;
         this.submitError = error.response && error.response.data ? error.response.data : error.message;
         this.errorMessage = '提交失败，请稍后再试。';
         console.error('提交失败:', this.submitError);
       });      
     },   
     getData() {
       return  {
         introductionGuid: this.introductionGuid,
         userGuid: this.userGuid,
         title: this.title,
         coreStroy: this.coreStory,
         empiricStrategy: this.empiricalStrategy,
         empiricMind: this.mainIdeas,
         dataIntro: this.datasetIntroduction,
         research1: this.researchFinding1,
         research2: this.researchFinding2,
         research3: this.researchFinding3,
         docStruct: this.articleStructure,
         backGround: this.background,
         backGroundInfo: this.backgroundInformation,
         projIntro: this.projectIntroduction,
         projIntroDtl: this.projectDetails,
         relateDoc: this.relatedLiterature,
         summary: this.abstract,
         relateDocTitle: this.relatedLiteratureTitle
       };         
     },    
     tipOK(mes) {
         this.$notify({
           title: '成功',
           message: mes,
           duration: 1000
         });        
     },    
     alterOK(mes) {
         this.$notify({
           title: '成功',
           message: mes,
           type: 'success'
         });
     },
     alterError(mes) {
         this.$notify({
           title: '失败',
           message: mes,
           type: 'success'
         });
     },
     test() {
         this.coreStory='123';
         this.setIntro();
       }
   },
 
  computed: {
     allFieldsFilled() {
       return this.articleTitle && this.coreStory && this.empiricalStrategy && this.mainIdeas &&
              this.datasetIntroduction && this.researchFinding1 && this.researchFinding2 &&
              this.researchFinding3 && this.articleStructure && this.background &&
              this.backgroundInformation && this.projectIntroduction && this.projectDetails &&
              this.relatedLiterature && this.abstract && this.relatedLiteratureTitle;
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
 
 .custom-input,
 .custom-textarea {
   width: 100%;
   padding: 10px;
   box-sizing: border-box;
   margin-top: 5px;
   border: 1px solid #ccc;
   border-radius: 5px;
   resize: vertical;
   font-size: 16px;
   color: #888; /* 灰色文本颜色 */
 }
 
 button {
   background-color: #4caf50;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-size: 16px;
 }
 .tabs button {
   background-color: transparent; /* 背景透明 */
   border: none;
   padding: 10px 20px;
   cursor: pointer;
   font-size: 16px; /* 根据需要调整字体大小 */
   margin-bottom: -2px; /* 与活动标签底部边框对齐 */
 }
 
 /* 当按钮是活动状态时，会出现底部边框 */
 .tabs button.active-tab {
   color: #ff4d4f; /* 活动标签的文字颜色 */
 }
 
 .tabs button.active-tab::after {
   content: '';
   display: block;
   margin: auto;
   height: 2px;
   width: 100%; /* 下划线宽度 */
   background-color: #ff4d4f; /* 下划线颜色 */
 }
 
 /* 信息提示样式 */
 .info-message {
   color: #ff4d4f; /* 提示信息的文字颜色 */
   font-size: 16px; /* 根据需要调整字体大小 */
   text-align: center;
   padding: 10px 0; /* 上下填充 */
   margin-top: 20px; /* 与上方元素的间距 */
   font-weight: bold; /* 文字加粗 */
 }
 
 /* 为了避免提示信息出现时页面跳动，可以设置其默认状态为透明 */
 .info-message {
   opacity: 0;
   transition: opacity 0.5s ease-in-out;
 }
 
 /* 当提示信息应该显示时，改变其透明度 */
 .info-message.show {
   opacity: 1;
 }
 .loading-animation {
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5); /* 半透明背景遮罩 */
   z-index: 9999; /* 确保加载动画在最前面 */
 }
 
 .loader {
   border: 4px solid #f3f3f3;
   border-top: 4px solid #3498db;
   border-radius: 50%;
   width: 40px;
   height: 40px;
   animation: spin 2s linear infinite; /* 添加旋转动画 */
 }
 
 @keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
 }
 .button{
   margin-left: 10px;
   margin-right: 10px;
 }
 </style>
 
