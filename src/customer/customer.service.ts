import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customers } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(customers) private readonly cusRepository: Repository<customers>
    ) { }

    // async getAll(): Promise<customers>{
    //     return await this.cusRepository.find();
    // }    



}
