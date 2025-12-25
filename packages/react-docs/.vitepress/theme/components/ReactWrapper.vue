<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import type { FC } from 'react'

interface Props {
  component: FC<any>
  props?: Record<string, any>
}

const { component, props = {} } = defineProps<Props>()

const containerRef = ref<HTMLDivElement | null>(null)
let root: any = null

const mountReact = async () => {
  if (!containerRef.value) return
  
  // Dynamically import React and ReactDOM only on client side
  const [React, ReactDOM] = await Promise.all([
    import('react'),
    import('react-dom/client')
  ])
  
  // Clean up existing root
  if (root) {
    root.unmount()
  }
  
  // Create new root and render
  root = ReactDOM.createRoot(containerRef.value)
  root.render(React.createElement(component, props))
}

onMounted(() => {
  mountReact()
})

watch(() => props, () => {
  mountReact()
}, { deep: true })

onBeforeUnmount(() => {
  if (root) {
    root.unmount()
    root = null
  }
})
</script>

<template>
  <div ref="containerRef" class="react-wrapper"></div>
</template>

<style scoped>
.react-wrapper {
  width: 100%;
}
</style>
