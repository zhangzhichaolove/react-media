<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, shallowRef } from 'vue'

const containerRef = ref<HTMLDivElement | null>(null)
const darkMode = ref(false)
const primaryColor = ref('#6366f1')
let root: any = null

const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']
let colorIndex = 0

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  mountReact()
}

const changeColor = () => {
  colorIndex = (colorIndex + 1) % colors.length
  primaryColor.value = colors[colorIndex]
  mountReact()
}

const mountReact = async () => {
  if (!containerRef.value) return
  
  const [React, ReactDOM, { VideoPlayer }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('@peakchao/react-media')
  ])
  
  // Import styles
  await import('@peakchao/react-media/style')
  
  if (root) {
    root.unmount()
  }
  
  root = ReactDOM.createRoot(containerRef.value)
  root.render(
    React.createElement(VideoPlayer, {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://peach.blender.org/wp-content/uploads/bbb-splash.png',
      darkMode: darkMode.value,
      primaryColor: primaryColor.value,
    })
  )
}

onMounted(() => {
  mountReact()
})

onBeforeUnmount(() => {
  if (root) {
    root.unmount()
    root = null
  }
})
</script>

<template>
  <div class="demo-container">
    <div class="demo-controls">
      <button @click="toggleDarkMode" class="demo-btn">
        {{ darkMode ? '☀️ 浅色模式' : '🌙 深色模式' }}
      </button>
      <button @click="changeColor" class="demo-btn">
        🎨 切换主题色
      </button>
      <span class="color-indicator" :style="{ backgroundColor: primaryColor }"></span>
    </div>
    <div ref="containerRef" class="player-wrapper"></div>
  </div>
</template>

<style scoped>
.demo-container {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.demo-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-btn {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.demo-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.color-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
}

.player-wrapper {
  width: 100%;
}
</style>
