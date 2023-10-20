import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterDto } from 'src/dto/filter.dto';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/typeorm/entities/Product';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    async getProducts(filterDto: FilterDto){
        let tasks = await this.productRepository.find()
        const { search } = filterDto 
        if (Object.keys(filterDto).length) {
            if(search) tasks = tasks.filter(data => data.variationId.toString().includes(search) || data.category.toLowerCase().includes(search) || data.desc.toLowerCase().includes(search))
        } 
            
        return tasks
    }

    addProduct(productDetails: ProductDto){
        const prod = this.productRepository.create({
            ...productDetails
        })

        return this.productRepository.save(prod)
    }

    importProducts(products: ProductDto[]){
        const prods = this.productRepository.create(products)

        return this.productRepository.save(prods)
    }

    deleteProduct(ids: any){
        const idArray = ids.split(',') //GET - {URL}/products/${id} (separated by comma if multiple ids)
        this.productRepository.delete(idArray).then(() => {
            return this.productRepository.find()
        })
    }
}
