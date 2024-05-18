import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto'
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('hdd')
export class HddController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createHddDto: CreateBenchDataDto) {
    return this.benchDataService.create('hddData', createHddDto);
  }


  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('hddData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('hddData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHddDto: UpdateBenchDataDto) {
    return this.benchDataService.update('hddData', id, updateHddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('hddData', id);
  }
}
