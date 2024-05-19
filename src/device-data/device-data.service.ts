import { Injectable } from '@nestjs/common';
import { CreateDeviceDataDto } from './dto/create-device-data.dto';
import { UpdateDeviceDataDto } from './dto/update-device-data.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CpuData, CpuDataDocument, GpuData, GpuDataDocument, HddData, HddDataDocument, RamData, RamDataDocument, SsdData, SsdDataDocument, UsbData, UsbDataDocument } from './schema/device-data.schema';
import { Document, Model } from 'mongoose';
import { DeviceType } from './dto/device-type';

@Injectable()
export class DeviceDataService {

  private DeviceModels: { [key: string]: Model<Document> };

  constructor(
    @InjectModel(CpuData.name) private cpuDataModule: Model<CpuDataDocument>,
    @InjectModel(GpuData.name) private gpuDataModule: Model<GpuDataDocument>,
    @InjectModel(RamData.name) private ramDataModule: Model<RamDataDocument>,
    @InjectModel(SsdData.name) private ssdDataModule: Model<SsdDataDocument>,
    @InjectModel(HddData.name) private hddDataModule: Model<HddDataDocument>,
    @InjectModel(UsbData.name) private usbDataModule: Model<UsbDataDocument>,
  ) {
    this.DeviceModels = {
      cpuData: this.cpuDataModule,
      gpuData: this.gpuDataModule,
      ramData: this.ramDataModule,
      ssdData: this.ssdDataModule,
      hddData: this.hddDataModule,
      usbData: this.usbDataModule,
    };
  }


  async create(deviceType: DeviceType, createDeviceDataDto: CreateDeviceDataDto) {
    const deviceCreated = await this.DeviceModels[deviceType].create(createDeviceDataDto)
    return deviceCreated
  }

  async findAll(deviceType: DeviceType, lengthPage: number, offset: number,) {
    let query = this.DeviceModels[deviceType].find().skip(offset);
    if (lengthPage > 0) {
      query = query.limit(lengthPage);
    }
    const foundDevices = await query.lean();
    return foundDevices;
  }

  async findOne(deviceType: DeviceType, id: string) {
    const findDevice = await this.DeviceModels[deviceType].findById(id)
    return findDevice
  }

  async update(deviceType: DeviceType, id: string, updateDeviceDataDto: UpdateDeviceDataDto) {
    const updatedDevice = await this.DeviceModels[deviceType].findByIdAndUpdate(id, updateDeviceDataDto, { new: true });
    return updatedDevice
  }

  async remove(deviceType: DeviceType, id: string) {
    const deletedDevice = await this.DeviceModels[deviceType].findByIdAndDelete(id);
    return deletedDevice
  }
}
