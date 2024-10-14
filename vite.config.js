import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [svelte(), envCompatible()],
});
