import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { productCreateDTO } from './dto/productCreate.dto';
import { productFindDTO } from './dto/productFind.dto';

@Controller('products')
@UsePipes(new ValidationPipe())
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param() infoProduct: productFindDTO) {
    await this.productsService.delete(infoProduct);
  }

  @Get('/:id')
  async getOne(@Param() infoProduct: productFindDTO) {
    return this.productsService.getOne(infoProduct);
  }

  @Get('/')
  async getAll() {
    return this.productsService.getAll();
  }

  @Post('/')
  async create(@Body() infoProduct: productCreateDTO) {
    return this.productsService.create(infoProduct);
  }
}
