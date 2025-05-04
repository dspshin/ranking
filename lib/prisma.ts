import { PrismaClient } from '../app/generated/prisma';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: 'file:../prisma/dev.db',
    },
  },
});

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client; 