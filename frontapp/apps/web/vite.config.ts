import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
    // '@frontapp/api_call': path.resolve(__dirname, '/frontapp/packages/api_call'),
  
    '@frontapp/api_call/AuthContext': path.resolve(__dirname, '../../packages/api_call/src/authentication/AuthContext.tsx'),
    '@frontapp/api_call/ExerciseContext': path.resolve(__dirname, '../../packages/api_call/src/exercise/ExerciseContext.tsx'),
  }
  },
})
