import { Injectable } from '@nestjs/common';
import { CreateBenchDataDto } from './dto/create-bench-data.dto';
import { UpdateBenchDataDto } from './dto/update-bench-data.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeviceDataDocument } from './schema/bench-data.schema';
import { DeviceType } from './dto/device-type';

@Injectable()
export class BenchDataService {
    private DeviceModels: { [key: string]: Model<DeviceDataDocument> };

    constructor(
        @InjectModel('cpuData') private cpuModel: Model<DeviceDataDocument>,
        @InjectModel('gpuData') private gpuModel: Model<DeviceDataDocument>,
        @InjectModel('ramData') private ramModel: Model<DeviceDataDocument>,
        @InjectModel('ssdData') private ssdModel: Model<DeviceDataDocument>,
        @InjectModel('hddData') private hddModel: Model<DeviceDataDocument>,
        @InjectModel('usbData') private usbModel: Model<DeviceDataDocument>,
    ) {
        this.DeviceModels = {
            cpuData: this.cpuModel,
            gpuData: this.gpuModel,
            ramData: this.ramModel,
            ssdData: this.ssdModel,
            hddData: this.hddModel,
            usbData: this.usbModel,
        };
    }


    async create(deviceType: DeviceType, createBenchDataDto: CreateBenchDataDto) {
        const deviceCreated = await this.DeviceModels[deviceType].create(createBenchDataDto)
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

    async update(deviceType: DeviceType, id: string, updateBenchDataDto: UpdateBenchDataDto) {
        const updatedDevice = await this.DeviceModels[deviceType].findByIdAndUpdate(id, updateBenchDataDto, { new: true });
        return updatedDevice
    }

    async remove(deviceType: DeviceType, id: string) {
        const deletedDevice = await this.DeviceModels[deviceType].findByIdAndDelete(id);
        return deletedDevice
    }
}
