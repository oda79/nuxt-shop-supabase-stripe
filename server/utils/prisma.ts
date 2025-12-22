import { PrismaClient } from '~/prisma/src/generated/prisma-client/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

type PrismaGlobal = {
  prisma?: PrismaClient
  pool?: Pool
}

const g = globalThis as unknown as PrismaGlobal

function makePrisma() {
  const pool =
    g.pool ??
    new Pool({
      connectionString: process.env.DATABASE_URL
    })

  const adapter = new PrismaPg(pool)

  const prisma = new PrismaClient({
    adapter,
    // If your generated client also accepts log, keep it; if it errors, remove it.
    log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error']
  } as any)

  if (process.env.NODE_ENV !== 'production') {
    g.pool = pool
    g.prisma = prisma
  }

  return prisma
}

export const prisma = g.prisma ?? makePrisma()
