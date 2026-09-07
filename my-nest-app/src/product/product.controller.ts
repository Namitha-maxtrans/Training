import { Controller, Get,Body, Param, Post, Put, Patch,Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductdto } from '../dto/createProductdto';
import { UpdateProductDto } from '../dto/updateProduct';
import { PositiveNumberPipe } from './pipes/positive-number/positive-number.pipe';


@Controller('product')
export class ProductController {
    constructor(private readonly prod:ProductService){}
            @Get()
                getProduct(){
                    return this.prod.getAllProducts()
                
            }
            @Get(':id') 
            getp(@Param('id',PositiveNumberPipe) id:number){
                return this.prod.getProductById(Number(id))
            }
            @Post()
             create(@Body() body:createProductdto){
               return this.prod.createProduct(body)
             }
          @Put(':id')
          update(@Param('id') id:string ,@Body() data:{name:string;price:number}){
            return this.prod.updateProduct(Number(id),data)
          }
          @Patch(':id')
          part(@Param('id') id:string,@Body() data:UpdateProductDto){
            return this.prod.patchProduct(Number(id),data)
          }
          @Delete(':id')
                deleteProduct(@Param('id') id: string) {
                    return this.prod.deleteProduct(Number(id));
            }
}

