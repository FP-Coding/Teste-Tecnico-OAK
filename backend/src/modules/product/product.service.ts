import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { productCreateDTO } from './dto/productCreate.dto';
import { productFindDTO } from './dto/productFind.dto';
import { ERRORS_MESSAGES } from '../../errors';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.product.findMany({ orderBy: [{ price: 'asc' }] });
  }

  async getOne({ id }: productFindDTO) {
    const product = await this.prisma.product.findFirst({
      where: { id: Number(id) },
    });
    if (!product) {
      throw new HttpException(
        { message: ERRORS_MESSAGES.PRODUCT_NOT_FOUND },
        HttpStatus.NOT_FOUND,
      );
    }
    return product;
  }

  async create(infoProduct: productCreateDTO) {
    const isAlredyExist = await this.prisma.product.findFirst({
      where: { name: infoProduct.name },
    });
    if (isAlredyExist) {
      throw new HttpException(
        { message: ERRORS_MESSAGES.PRODUCT_CONFLICT },
        HttpStatus.CONFLICT,
      );
    }
    return this.prisma.product.create({ data: infoProduct });
  }

  async delete({ id }: productFindDTO) {
    await this.getOne({ id });
    await this.prisma.product.delete({ where: { id: Number(id) } });
  }
}
