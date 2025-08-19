# Page Builder

A React-based page builder component library with drag-and-drop functionality.

## Installation

```bash
npm install github:deiucanta/page-builder
# or
pnpm add github:deiucanta/page-builder
```

## Usage

```tsx
import { PageBuilder, Block, Field } from '@deiucanta/page-builder'
import '@deiucanta/page-builder/styles.css'

// Define your blocks
const blocks = [
  {
    type: 'hero',
    fields: [
      { name: 'title', type: 'text', defaultValue: '' },
      { name: 'description', type: 'textarea', defaultValue: '' },
    ]
  }
]

function App() {
  const handleSave = async (data) => {
    // Save the page data
    console.log('Saving:', data)
  }

  return (
    <PageBuilder
      blocks={blocks}
      onSave={handleSave}
      previewUrl="/preview"
    />
  )
}
```

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```