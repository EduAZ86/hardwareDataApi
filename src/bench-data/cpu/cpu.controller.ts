import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service'
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('cpu')
export class CpuController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createCpuDto: CreateBenchDataDto) {
    return this.benchDataService.create('cpuData', createCpuDto);
  }

  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('cpuData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('cpuData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuDto: UpdateBenchDataDto) {
    return this.benchDataService.update('cpuData', id, updateCpuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('cpuData', id);
  }
}
