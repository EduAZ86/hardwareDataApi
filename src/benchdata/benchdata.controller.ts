import { Controller, Get } from '@nestjs/common';
import { BenchdataService } from './benchdata.service';

@Controller('benchdata')
export class BenchdataController {
    constructor(private benchdataService: BenchdataService) {}
    
    @Get('/benchdata')
    getAllBenchData() {
        return this.benchdataService.getAllBenchData
    }
}
