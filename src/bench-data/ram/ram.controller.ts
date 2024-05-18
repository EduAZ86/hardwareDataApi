import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('ram')
export class RamController {
  constructor(private readonly benchDataService: BenchDataService) { }

  @Post()
  create(@Body() createRamDto: CreateBenchDataDto) {
    return this.benchDataService.create('ramData', createRamDto);
  }

  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('ramData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('ramData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRamDto: UpdateBenchDataDto) {
    return this.benchDataService.update('ramData', id, updateRamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('ramData', id);
  }
}
