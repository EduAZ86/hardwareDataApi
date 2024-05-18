import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('usb')
export class UsbController {
  constructor(private readonly benchDataService: BenchDataService) { }


  @Post()
  create(@Body() createUsbDto: CreateBenchDataDto) {
    return this.benchDataService.create('usbData', createUsbDto);
  }

  @Get()
  findAll(@Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.benchDataService.findAll('usbData', lengthPage, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benchDataService.findOne('usbData', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsbDto: UpdateBenchDataDto) {
    return this.benchDataService.update('usbData', id, updateUsbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchDataService.remove('usbData', id);
  }
}
