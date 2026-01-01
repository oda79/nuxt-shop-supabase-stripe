import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const zodDir = path.join(root, 'layers/shop-commerce/shared/schemas/zod')

// What the generator outputs (bad)
const FROM = "from '../../../prisma/src/generated/prisma-client';"
const TO   = "from '../../../prisma/src/generated/prisma-client/client';"

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p)
    else if (entry.isFile() && (p.endsWith('.ts') || p.endsWith('.mts') || p.endsWith('.cts'))) {
      const src = fs.readFileSync(p, 'utf8')
      if (src.includes(FROM)) {
        fs.writeFileSync(p, src.replaceAll(FROM, TO), 'utf8')
        console.log('patched:', path.relative(root, p))
      }
    }
  }
}

if (!fs.existsSync(zodDir)) {
  console.error('zod dir not found:', zodDir)
  process.exit(1)
}

walk(zodDir)
