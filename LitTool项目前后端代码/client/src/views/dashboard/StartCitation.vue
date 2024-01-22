<template>
    <div id="app">
      <div class="editor-container">
        <div id="editor-container" @mouseup="handleMouseUp"></div>
        <div v-if="showSuggestions" ref="suggestions" class="suggestions">
          <ul>
            <li v-for="(sentence, index) in suggestedSentences" :key="index" @click="addSuggestedSentence(sentence)">
              {{ sentence }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  
  export default {
    data() {
      return {
        showSuggestions: false,
        suggestedSentences: [
          'This is a suggested sentence.',
          'Another suggested sentence here.',
          'Check out this suggestion.',
          'Here is another suggestion.',
          'The last suggested sentence.'
        ],
      };
    },
    mounted() {
      this.initEditor();
    },
    methods: {
      initEditor() {
        this.quill = new Quill('#editor-container', {
          theme: 'snow',
        });
  
        // 设置文本框初始高度为屏幕的一半
        const screenHeight = window.innerHeight;
        this.quill.container.style.height = `${screenHeight / 2}px`;
  
        // 监听选择文本事件
        this.quill.on('selection-change', (range) => {
          if (range && range.length > 0) {
            const bounds = this.quill.getBounds(range.index, range.length);
            const editorBounds = this.quill.container.getBoundingClientRect();
            const suggestionsTop = bounds.bottom + editorBounds.top;
            this.showSuggestions = true;
            this.$nextTick(() => {
              // 设置建议列表的位置
              this.$refs.suggestions.style.top = `${suggestionsTop}px`;
            });
          } else {
            this.showSuggestions = false;
          }
        });
      },
      handleMouseUp() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        this.showSuggestions = !!selectedText;
      },
      addSuggestedSentence(sentence) {
        const selectedText = this.quill.getSelection();
        if (selectedText) {
          const insertIndex = selectedText.index + selectedText.length;
          this.quill.insertText(insertIndex, ' ' + sentence);
          this.quill.setSelection(insertIndex + sentence.length + 1);
          this.showSuggestions = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式 */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  #app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
  
  .editor-container {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
  }
  
  .suggestions {
    width: 20%; /* 调整建议列表的宽度 */
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  
  .suggestions li {
    padding: 8px;
    border-bottom: 1px solid #eee;
  }
  
  .suggestions li:last-child {
    border-bottom: none;
  }
  </style>
  