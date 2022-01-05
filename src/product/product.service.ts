import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { products } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(products) private readonly proRepository: Repository<products>
    ){}
}
