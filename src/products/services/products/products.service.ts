import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/typeorm/entities/Product';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    getProducts(){
        return this.productRepository.find()
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
