import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service'
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('gpu')
export class GpuController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createGpuDto: CreateBenchDataDto) {
    return this.benchDataService.create('gpuData', createGpuDto);
  }

  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('gpuData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('gpuData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGpuDto: UpdateBenchDataDto) {
    return this.benchDataService.update('gpuData', id, updateGpuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('gpuData', id);
  }
}
