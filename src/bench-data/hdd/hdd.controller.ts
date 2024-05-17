import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto'
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('hdd')
export class HddController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createHddDto: CreateBenchDataDto) {
    return this.benchDataService.create(createHddDto);
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
  update(@Param('id') id: string, @Body() updateHddDto: UpdateBenchDataDto) {
    return this.benchDataService.update(+id, updateHddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove(+id);
  }
}
