import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DeviceDataService } from './device-data.service';
import { CreateDeviceDataDto } from './dto/create-device-data.dto';
import { UpdateDeviceDataDto } from './dto/update-device-data.dto';
import { DeviceType } from './dto/device-type';

@Controller('device-data')
export class DeviceDataController {
  constructor(private readonly deviceDataService: DeviceDataService) { }


  @Post('/:deviceType')
  create(@Param('deviceType') deviceType: DeviceType, @Body() createDeviceDataDto: CreateDeviceDataDto) {
    return this.deviceDataService.create(deviceType, createDeviceDataDto);
  }

  @Get('/:deviceType')
  findAll(@Param('deviceType') deviceType: DeviceType, @Query('lengthPage') lengthPage: number, @Query('offset') offset: number) {
    return this.deviceDataService.findAll(deviceType, lengthPage, offset);
  }

  @Get('/:deviceType/:id')
  findOne(@Param('deviceType') deviceType: DeviceType, @Param('id') id: string) {
    return this.deviceDataService.findOne(deviceType, id);
  }

  @Patch('/:deviceType/:id')
  update(@Param('deviceType') deviceType: DeviceType, @Param('id') id: string, @Body() updateDeviceDataDto: UpdateDeviceDataDto) {
    return this.deviceDataService.update(deviceType, id, updateDeviceDataDto);
  }

  @Delete('/:deviceType/:id')
  remove(@Param('deviceType') deviceType: DeviceType, @Param('id') id: string) {
    return this.deviceDataService.remove(deviceType, id);
  }

}
