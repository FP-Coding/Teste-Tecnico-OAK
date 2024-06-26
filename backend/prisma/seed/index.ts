import { PrismaClient } from '@prisma/client';
import { createProducts } from './products';

const prisma = new PrismaClient();

async function main() {
  await createProducts();
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
