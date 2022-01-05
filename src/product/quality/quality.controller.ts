import { Controller } from '@nestjs/common';
import { QualityService } from './quality.service';

@Controller('quality')
export class QualityController {
    constructor(
        private qualityService: QualityService
    ) { }
}
