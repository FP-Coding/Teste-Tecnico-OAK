import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/product/product.module';
import { PrismaService } from './database/prisma/prisma.service';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
