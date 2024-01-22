<template>
    <div class="home-container">
      <header>
        <h1>Lit Tool</h1>
        <p>AI让社会科学研究更简单</p>
      </header>
      <main>
        <section>
          <h2>让 AI 处理这些繁琐的任务</h2>
          <p>文献综述、论文润色、文献引用……释放研究者的创造力，专注于创造性的工作。</p>
          <button @click="startUsing">开始使用</button>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LitToolHome',
    methods: {
      startUsing() {
        // 在这里处理开始使用的逻辑
        console.log("开始使用 Lit Tool");
  
        // 添加页面跳转逻辑
        this.$router.push("/login"); // Assuming your login page is at "/login"
      }
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    background: linear-gradient(to right, #ecf0f1, #3498db); /* 使用浅色调的渐变色 */
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
    header h1 {
      font-size: 3rem;
      margin: 0;
      animation: fadeIn 2s ease-in;
    }
  
    header p {
      font-size: 1.5rem;
      animation: fadeIn 3s ease-in;
    }
  
    main section {
      margin-top: 20px;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      animation: moveUp 1s ease-in-out;
    }
  
    button {
      padding: 10px 20px;
      margin-top: 20px;
      background-color: #ff5722;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      box-shadow: 0 4px 8px rgba(255, 87, 34, 0.4);
    }
  
    button:hover {
      background-color: #e64a19;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    @keyframes moveUp {
      from { transform: translateY(20px); }
      to { transform: translateY(0); }
    }
  </style>
  