# React Media 🎬

[![npm version](https://img.shields.io/npm/v/@peakchao/react-media.svg)](https://www.npmjs.com/package/@peakchao/react-media)
[![React](https://img.shields.io/badge/React-18.x%20%7C%2019.x-brightgreen.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README.zh-CN.md) | English

A beautiful, feature-rich media player component library for React. Includes customizable Video and Audio players with modern UI, dark mode support, and full TypeScript integration.

📚 **[Documentation](https://zhangzhichaolove.github.io/react-media/en/)**

## 📷 Preview

### Video Player
![Video Player](./screenshot/视频播放器.png)

### Audio Player
| Light Mode | Dark Mode |
|:----------:|:---------:|
| ![Audio Player](./screenshot/音乐播放器.png) | ![Audio Player Dark](./screenshot/音乐播放器-暗色.png) |

## ✨ Features

- 🎥 **Video Player** - Full-featured video player with custom controls, Picture-in-Picture, and mini player
- 🎵 **Audio Player** - Beautiful audio player with album art support
- 🌙 **Dark Mode** - Built-in dark mode support
- 🎨 **Customizable** - Easily customize primary color and themes
- 📱 **Responsive** - Mobile-friendly design with touch gestures
- ⌨️ **Keyboard Shortcuts** - Full keyboard control support
- ♿ **Accessible** - Screen reader friendly
- 🔧 **TypeScript** - Complete type definitions included
- ⚡ **Lightweight** - No external dependencies

## 📦 Installation

```bash
# npm
npm install @peakchao/react-media

# yarn
yarn add @peakchao/react-media

# pnpm
pnpm add @peakchao/react-media
```

## 🚀 Quick Start

### Import Styles

```tsx
// App.tsx or index.tsx
import '@peakchao/react-media/style'
```

### Use Components

```tsx
import { VideoPlayer, AudioPlayer } from '@peakchao/react-media'

function App() {
  return (
    <>
      {/* Video Player */}
      <VideoPlayer
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
      />

      {/* Audio Player */}
      <AudioPlayer
        src="https://example.com/audio.mp3"
        title="Song Title"
        artist="Artist Name"
        cover="https://example.com/cover.jpg"
      />
    </>
  )
}
```

## 📹 VideoPlayer

A modern video player with all the controls you need.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | *required* | Video source URL |
| `poster` | `string` | - | Poster image URL |
| `autoplay` | `boolean` | `false` | Auto-play video on load |
| `loop` | `boolean` | `false` | Loop video playback |
| `muted` | `boolean` | `false` | Mute video by default |
| `controls` | `boolean` | `true` | Show player controls |
| `primaryColor` | `string` | `'#6366f1'` | Theme primary color |
| `darkMode` | `boolean` | `false` | Enable dark mode |
| `keyboardShortcuts` | `boolean` | `true` | Enable keyboard shortcuts |
| `showPiP` | `boolean` | `true` | Show Picture-in-Picture button |
| `miniPlayer` | `boolean` | `false` | Enable mini player mode |
| `backgroundColor` | `string` | `'transparent'` | Player background color |

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `←` / `→` | Seek ±5 seconds |
| `↑` / `↓` | Volume ±10% |
| `M` | Mute/Unmute |
| `F` | Toggle Fullscreen |

### Children (Custom Controls)

```tsx
<VideoPlayer src="video.mp4">
  {/* Custom controls can be added as children */}
  <button className="rm-btn">Download</button>
  <button className="rm-btn">Share</button>
</VideoPlayer>
```

## 🎵 AudioPlayer

An elegant audio player with cover art and track info display.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | *required* | Audio source URL |
| `title` | `string` | - | Track title |
| `artist` | `string` | - | Artist name |
| `cover` | `string` | - | Cover image URL |
| `primaryColor` | `string` | `'#6366f1'` | Theme primary color |
| `darkMode` | `boolean` | `false` | Enable dark mode |

## 🎨 Theming

```tsx
function App() {
  return (
    <>
      {/* Custom theme with dark mode */}
      <VideoPlayer
        src="video.mp4"
        primaryColor="#8b5cf6"
        darkMode={true}
      />
    </>
  )
}
```

## 🪝 Hooks

### useMediaControl

A custom hook for controlling media playback programmatically.

```tsx
import { useMediaControl } from '@peakchao/react-media'

function App() {
  const { ref, play, pause, toggle, seek, setVolume } = useMediaControl()

  return (
    <>
      <VideoPlayer ref={ref} src="video.mp4" />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </>
  )
}
```

## 📄 License

MIT License © 2025 [peakchao](https://github.com/zhangzhichaolove)
