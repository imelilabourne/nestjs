import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
  @Get()
  getProducts() {
    return this.productsService.getProducts()
  }

  @Post()
  addProduct(@Body() createdProduct: ProductDto){
    return this.productsService.addProduct(createdProduct)
  }

  @Delete('/:variationId')
  deleteProduct(@Param('variationId') id: number){
    return this.productsService.deleteProduct(id)
  }
}
