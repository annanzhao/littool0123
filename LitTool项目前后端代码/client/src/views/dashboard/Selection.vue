<template>
  <div class="feature-selection">
    <!-- 大标题 -->
    <h1 class="page-title">功能选择</h1>

    <!-- 四个功能展示 -->
    <div class="feature-container">
      <!-- Lit Cite -->
      <div @click="navigateTo('litcite')" class="feature-item">
        <img src="src/assets/images/1.jpg" alt="Lit Cite" />
        <p>一款由AI区动的自动文献引用工具</p>
      </div>

      <!-- Chatbot -->
      <div @click="navigateTo('chatbot')" class="feature-item">
        <img src="src/assets/images/2.png" alt="Chatbot" class="feature-image" />
        <p>用AI生成顶刊风格的introduction</p>
      </div>

      <!-- Intro Genius -->
      <div @click="navigateTo('introgenius')" class="feature-item">
        <img src="src/assets/images/3.jpg" alt="Intro Genius" />
        <p>向AI助手询问学术，编程和写作问题</p>
      </div>

      <!-- Chatpaper -->
      <div @click="navigateTo('chatpaper')" class="feature-item">
        <img src="src/assets/images/4.jpg" alt="Chatpaper" />
        <p>在与AI的交流中更好的理解论文</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 根据点击的功能导航到相应页面
    navigateTo(feature) {
      if (feature === 'chatbot') {
        // 跳转到 Overview 页面
        this.$router.push('/dashboard/Direction');
      } else if (feature === 'litcite') {
        // 跳转到 Upload 页面
        this.$router.push('/dashboard/Upload');
      } else {
        console.log(`Navigating to ${feature} page`);
      }
    },
  },
};
</script>
<style scoped>
<style scoped>
.page-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}

.feature-container {
  display: flex;
  justify-content: space-around;
}

.feature-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

.feature-item:hover {
  transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
}

.feature-item img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 80%;
  margin-bottom: 50px;
}

</style>
