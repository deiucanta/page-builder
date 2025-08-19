import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react/jsx-runtime', 'use-sync-external-store'],
  bundle: true,
  splitting: false,
  treeshake: false,
  noExternal: [/.*/], // Bundle everything except external
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.platform = 'browser'
    options.target = 'es2020'
    options.packages = 'bundle'
    options.alias = {
      'use-sync-external-store/shim': 'react',
      'use-sync-external-store/shim/index': 'react',
      'use-sync-external-store': 'react'
    }
  },
  onSuccess: 'npm run build:css',
})