import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('ssd')
export class SsdController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createSsdDto: CreateBenchDataDto) {
    return this.benchDataService.create('ssdData', createSsdDto);
  }

  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('ssdData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('ssdData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSddDto: UpdateBenchDataDto) {
    return this.benchDataService.update('ssdData', id, updateSddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('ssdData', id);
  }
}
