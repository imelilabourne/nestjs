import { Body, Controller, Get, Post } from '@nestjs/common';
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
    return addProduct
  }
}
