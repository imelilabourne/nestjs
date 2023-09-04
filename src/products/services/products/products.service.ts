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

    deleteProduct(id: any){
        this.productRepository.delete({"variationId": id}).then(() => {
            return this.productRepository.find()
        })
    }
}
