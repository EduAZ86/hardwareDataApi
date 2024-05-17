import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('ssd')
export class SsdController {
  constructor(private readonly ssdService: BenchDataService) { }

  @Post()
  create(@Body() createSsdDto: CreateBenchDataDto) {
    return this.ssdService.create(createSsdDto);
  }

  @Get()
  findAll() {
    return this.ssdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ssdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSsdDto: UpdateBenchDataDto) {
    return this.ssdService.update(+id, updateSsdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ssdService.remove(+id);
  }
}
