import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  noExternal: [
    '@radix-ui/react-accordion',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-select',
    '@radix-ui/react-slot',
    'class-variance-authority',
    'clsx',
    'lodash',
    'lucide-react',
    'mobx-react-lite',
    'mobx-state-tree',
    'mst-middlewares',
    'react-arborist',
    'tailwind-merge',
    'use-resize-observer'
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  onSuccess: 'npm run build:css',
})