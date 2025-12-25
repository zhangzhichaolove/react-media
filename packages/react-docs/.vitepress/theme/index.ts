// VitePress custom theme
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VideoPlayerDemo from './components/VideoPlayerDemo.vue'
import AudioPlayerDemo from './components/AudioPlayerDemo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('VideoPlayerDemo', VideoPlayerDemo)
    app.component('AudioPlayerDemo', AudioPlayerDemo)
  }
} satisfies Theme
