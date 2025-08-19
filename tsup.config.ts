import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
    'react-dom/client'
  ],
  bundle: true,
  splitting: false,
  treeshake: false,
  noExternal: [/.*/], // Bundle everything except external
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.platform = 'browser'
    options.target = 'es2020'
    options.packages = 'bundle'
  },
  onSuccess: 'npm run build:css',
})