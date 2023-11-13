import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './typeorm/entities/Product';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: 'nestjs_mysql',
    entities: [ Product ],
    synchronize: true
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
