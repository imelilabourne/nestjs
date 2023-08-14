import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("products")
  getTasks() {
    return this.appService.getProducts()
  }

  @Post("product")
  addProduct(@Body() addProduct: ProductDto) {
    return this.appService.addProduct(addProduct)
  }

  @Get(":variationId")
  getOneProduct(@Param('variationId') id: string) {
    return this.appService.getProducts().find(prod => prod.variationId == id)
  }
}
