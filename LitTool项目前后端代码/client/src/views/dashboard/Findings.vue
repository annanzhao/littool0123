<template>
    <div class="main-panel">
      <div class="container">
        <!-- Research Findings Module -->
        <div class="module">
          <div class="title">研究发现模块</div>
  
          <div class="input-box">
            <label class="left-label" for="finding1">研究发现1</label>
            <textarea v-model="finding1" id="finding1" placeholder="Example: We find that the presence of a female mayor leads to a 50% average reduction in both the homicide rate and violence against women over a four-year term"></textarea>
          </div>
  
          <div class="input-box">
            <label class="left-label" for="finding2">研究发现II</label>
            <textarea v-model="finding2" id="finding2" placeholder="Example: These results are not attributable to pre-existing municipal characteristics or other observable mayor attributes."></textarea>
          </div>
  
          <div class="input-box">
            <label class="left-label" for="finding3">研究发现III</label>
            <textarea v-model="finding3" id="finding3" placeholder="Example: Collectively, our findings offer compelling evidence that women in office play a significant role in effectively addressing violence against women."></textarea>
          </div>
  
          <button @click="submitFindings">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showResearchFindings = ref(true);  // Set to true initially
  const finding1 = ref('');
  const finding2 = ref('');
  const finding3 = ref('');
  
  const submitFindings = () => {
    // Handle the submission logic here, you can send data to the server or perform other actions
    console.log('Finding 1:', finding1.value);
    console.log('Finding 2:', finding2.value);
    console.log('Finding 3:', finding3.value);
  };
  </script>
  
  <style scoped>
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 1200px; /* 调整容器宽度 */
  margin: 0 auto;
  color: #000;
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
  color: #888;
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