import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_','CLIENT_', "SERVER_"]);
  //console.log(env);

  return {
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'import.env.VITE_AUTOR':JSON.stringify(env.VITE_AUTOR),
      'import.env.VITE_BACKEND_BASE': JSON.stringify(env.VITE_BACKEND_BASE)
    },
    server :{
      proxy: {
        '/backender' : env.VITE_API_URL
      }
    },
    plugins: [react()],
  };
});
