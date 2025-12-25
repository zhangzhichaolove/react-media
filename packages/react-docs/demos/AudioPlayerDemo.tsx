import React, { useState } from 'react'
import { AudioPlayer } from '@peakchao/react-media'
import '@peakchao/react-media/style'

export default function AudioPlayerDemo() {
  const [darkMode, setDarkMode] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#6366f1')

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #e5e7eb',
            background: darkMode ? '#1f2937' : '#fff',
            color: darkMode ? '#fff' : '#374151',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '14px', color: '#6b7280' }}>Theme:</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            style={{
              width: '32px',
              height: '32px',
              padding: 0,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          />
        </div>
      </div>
      
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        title="SoundHelix Song 1"
        artist="T. Schürger"
        cover="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
        darkMode={darkMode}
        primaryColor={primaryColor}
      />
    </div>
  )
}
