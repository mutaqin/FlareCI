import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// Fungsi untuk mendeteksi semua file index.ts dan index.css secara otomatis di dalam `src/`
const getInputEntries = (baseDir) => {
  const entries = {};
  const traverse = (dir) => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const fullPath = path.resolve(dir, entry.name);
      const relativePath = path.relative(baseDir, fullPath);

      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (
        entry.isFile() &&
        (entry.name === "index.ts" || entry.name === "index.css")
      ) {
        const key = path.dirname(relativePath).replace(/\\/g, "/");
        entries[key] = fullPath;
      }
    });
  };

  traverse(baseDir);
  return entries;
};

const inputEntries = getInputEntries(path.resolve(__dirname, "src"));

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    outDir: "../public/resources",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: inputEntries,
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  }
});


