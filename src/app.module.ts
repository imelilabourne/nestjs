import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './typeorm/entities/Product';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQLHOST,
    port: +process.env.MYSQLPORT,
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    entities: [ Product ],
    synchronize: true
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
