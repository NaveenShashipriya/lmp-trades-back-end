import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityController } from './quality.controller';
import { quality } from './quality.entity';
import { QualityService } from './quality.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([quality])
  ],
  controllers: [QualityController],
  providers: [QualityService]
})
export class QualityModule {}
