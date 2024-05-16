import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service'
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('cpu')
export class CpuController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createCpuDto: CreateBenchDataDto) {
    return this.benchDataService.create(createCpuDto);
  }

  @Get()
  findAll() {
    return this.benchDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuDto: UpdateBenchDataDto) {
    return this.benchDataService.update(+id, updateCpuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove(+id);
  }
}
