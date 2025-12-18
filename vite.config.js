import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  build: {
    chunkSizeWarningLimit: 1000, // Naikkan limit warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Pisahkan library berat ke file terpisah (chunking)
          if (id.includes('node_modules')) {
            if (id.includes('@react-three') || id.includes('three')) {
              return 'vendor-3d'; // 3D engine dipisah
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation'; // Framer motion dipisah
            }
            return 'vendor'; // Sisa node_modules
          }
        },
      },
    },
  },
})
