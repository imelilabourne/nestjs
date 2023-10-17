import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { FilterDto } from 'src/dto/filter.dto';
import { ProductDto } from 'src/dto/product.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
  @Get()
  async getProducts(@Query() filterDto: FilterDto) {
    let tasks = await this.productsService.getProducts();
    const { variationId, search } = filterDto 
    if (Object.keys(filterDto).length) {
      if(variationId) tasks = tasks.filter(data => data.variationId === variationId)
      
      if(search) tasks = tasks.filter(data => data.category.includes(search) || data.desc.includes(search))
    } 
    return tasks
  }

  @Post()
  addProduct(@Body() createdProduct: ProductDto){
    return this.productsService.addProduct(createdProduct)
  }

  @Post('/import')
  importProducts(@Body() createdProduct: ProductDto[]){
    return this.productsService.importProducts(createdProduct)
  }

  @Delete('/:variationId')
  deleteProduct(@Param('variationId') ids: number[]){
    return this.productsService.deleteProduct(ids)
  }
}
