<template>
  <div class="container">
    <div class="upload-section">
      <label for="file-upload" class="custom-file-upload">
        <input id="file-upload" type="file" @change="handleFileChange" />
        浏览文件
      </label>

      <div class="drop-area" @dragover.prevent @drop.prevent="handleDrop">
        将文件拖到这里上传
      </div>

      <button @click="uploadFile" class="upload-button">上传文件</button>
    </div>

    <!-- 文件上传成功提示 -->
    <div v-if="uploadSuccess" class="success-message">
      文件上传成功! 文件名: {{ uploadedFileName }}
    </div>

    <!-- 请确认所有文献的引用信息无误提示 -->
    <div v-if="showTable" class="confirmation-message">
      请确认所有文献的引用信息无误
    </div>

    <!-- 显示引用信息表格 -->
    <div class="table-container" v-if="showTable">
      <table class="reference-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Journal</th>
            <th>Reference</th>
            <th>APA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reference, index) in references" :key="index">
            <td contenteditable="true">{{ reference.title }}</td>
            <td contenteditable="true">{{ reference.author }}</td>
            <td contenteditable="true">{{ reference.year }}</td>
            <td contenteditable="true">{{ reference.journal }}</td>
            <td contenteditable="true">{{ reference.reference }}</td>
            <td contenteditable="true">{{ reference.apa }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 生成引用数据库按钮 -->
    <button @click="generateDatabase" class="generate-button" v-if="showTable">
      生成引用数据库
    </button>

    <!-- 引用数据库生成成功提示 -->
    <div v-if="databaseGenerated" class="success-message">
      引用数据库生成成功，请在侧栏进入开始引用模块
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFileName: "",
      file: null,
      uploadSuccess: false,
      showTable: false,
      references: [
        { title: "Sample Title", author: "Sample Author", year: "2022", journal: "Sample Journal", reference: "Sample Reference", apa: "Sample APA" },
        // 添加默认信息
      ],
      databaseGenerated: false,
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
      this.uploadedFileName = this.file.name;
    },
    handleDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
    },
    uploadFile() {
      this.uploadSuccess = true;
      this.showTable = true;
    },
    generateDatabase() {
      this.databaseGenerated = true;
    },
  },
};
</script>

<style>
.confirmation-message {
  font-size: 18px;
  margin-top: 10px;
}

.container {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}

/* 其他样式代码，不变 */

</style>

<style scoped>
/* 媒体查询样式，不变 */

.input-editing {
  border: 1px solid #4caf50;
}

.full-text {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

.full-text:hover {
  color: red;
}

.confirmation-message {
  font-size: 18px;
  margin-top: 10px;
}


.container {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}

.upload-section {
  display: flex;
  gap: 10px;
}

.custom-file-upload,
.drop-area,
.upload-button,
.generate-button {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-upload:hover,
.drop-area:hover,
.upload-button:hover,
.generate-button:hover {
  background-color: #f2f2f2;
}

.custom-file-upload input {
  display: none;
}

.drop-area {
  flex: 1;
  text-align: center;
  font-size: 16px;
}

.success-message {
  color: green;
  font-size: 18px;
  margin-top: 10px;
}

.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.reference-table {
  border-collapse: collapse;
  width: 100%;
}

.reference-table th,
.reference-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.reference-table th {
  background-color: #f2f2f2;
}

.input-editing {
  border: 1px solid #4caf50;
}

.generate-button {
  margin-top: 10px;
  text-align: center;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
}

.edit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #45a049;
}
</style>

<style scoped>
/* 添加媒体查询 */
@media (min-width: 600px) {
  .container {
    max-width: 600px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 992px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

.input-editing {
  border: 1px solid #4caf50;
}
</style>
