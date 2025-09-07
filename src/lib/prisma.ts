import { PrismaClient } from "@/generated/prisma/client";

declare global {
  // Garantir que Prisma não crie múltiplas instâncias em HMR
  // Isso evita erros no Next.js com hot reload
  // @ts-ignore
  // var prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();

export default prisma;
