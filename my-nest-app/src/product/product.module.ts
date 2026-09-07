//
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductLoggerMiddleware } from './product-logger/product-logger.middleware';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProductLoggerMiddleware)
      .forRoutes(ProductController);
  }
}