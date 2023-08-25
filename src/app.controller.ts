import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get("products")
  // getTasks() {
  //   return this.appService.getProducts()
  // }

  // @Post("product")
  // addProduct(@Body() addProduct: ProductDto) {
  //   return this.appService.addProduct(addProduct)
  // }

  // @Get("product/:variationId")
  // getOneProduct(@Param('variationId') id: string) {
  //   return this.appService.getProducts().find(prod => prod.variationId == id)
  // }

  // @Delete("product/:variationId")
  // deleteOneProduct(@Param('variationId') id: string) {
  //   return this.appService.deleteProduct(id)
  // }
}
