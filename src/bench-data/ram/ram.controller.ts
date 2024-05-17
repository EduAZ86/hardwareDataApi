import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('ram')
export class RamController {
  constructor(private readonly ramService: BenchDataService) {}

  @Post()
  create(@Body() createRamDto: CreateBenchDataDto) {
    return this.ramService.create(createRamDto);
  }

  @Get()
  findAll() {
    return this.ramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRamDto: UpdateBenchDataDto) {
    return this.ramService.update(+id, updateRamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ramService.remove(+id);
  }
}
