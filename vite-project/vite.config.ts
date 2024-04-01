import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      // Define the environment variables with the `VITE_` prefix
      // for client-side access
      "process.env": env,
    },
  };
});
