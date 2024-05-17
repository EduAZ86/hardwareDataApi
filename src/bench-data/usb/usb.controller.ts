import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { CreateBenchDataDto } from '../dto/create-bench-data.dto';
import { UpdateBenchDataDto } from '../dto/update-bench-data.dto';

@Controller('usb')
export class UsbController {
  constructor(private readonly usbService: BenchDataService) { }

  @Post()
  create(@Body() createUsbDto: CreateBenchDataDto) {
    return this.usbService.create(createUsbDto);
  }

  @Get()
  findAll() {
    return this.usbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsbDto: UpdateBenchDataDto) {
    return this.usbService.update(+id, updateUsbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usbService.remove(+id);
  }
}
