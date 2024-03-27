import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Product {
  name: string;
  description: string;
  price: number;
  availability: boolean;
}

export const createProducts = async () => {
  const products: Product[] = [
    {
      name: 'Game Of Thrones',
      description: 'Livro da saga A song of ice and fire',
      price: 39.9,
      availability: true,
    },
    {
      name: 'Clean Code',
      description: 'Livro de programação que aborda sobre qualidade do código',
      price: 82.84,
      availability: true,
    },
    {
      name: 'Psicologia Financeira',
      description:
        'Livro da área de finanças que dá lições de como lidar com o seu dinheiro',
      price: 33.93,
      availability: true,
    },
  ];

  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
};
