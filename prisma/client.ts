import { PrismaClient } from '@prisma/client'

export var prisma: PrismaClient

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  // In development, reuse the same prisma client
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export const pick = (orig:[], keys:[]) => keys.reduce((acc, key) => ({...acc, [key]: orig[key]}), {})


export default prisma
