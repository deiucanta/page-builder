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
    'react-dom/client',
    'react-dom/server'
  ],
  bundle: true,
  splitting: false,
  treeshake: false,
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.platform = 'browser'
    options.target = 'es2020'
    // Remove packages: 'bundle' - this might be causing the issue
  },
  onSuccess: 'npm run build:css',
})