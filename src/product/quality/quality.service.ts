import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { quality } from './quality.entity';

@Injectable()
export class QualityService {
    constructor(
        @InjectRepository(quality) private readonly qualityRepository: Repository<quality>
    ) { }
}
