import { PrismaClient } from "@/generated/prisma/client";

declare global {
  // Garantir que Prisma não crie múltiplas instâncias em HMR
  // Isso evita erros no Next.js com hot reload
  // @ts-ignore
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
