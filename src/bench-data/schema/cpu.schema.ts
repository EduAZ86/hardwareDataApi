import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DeviceDataDocument = DeviceData & Document;

@Schema()
class Statistics {
    @Prop({ type: Number })
    rank: number;

    @Prop({ type: Number })
    benchmark: number;

    @Prop({ type: Number })
    samples: number;
}

@Schema()
class DeviceData {
    @Prop({ type: String })
    partNumber: string;

    @Prop({ type: String })
    brand: string;

    @Prop({ type: String })
    model: string;

    @Prop({ type: Statistics })
    statistics: Statistics;

    @Prop({ type: String })
    url: string;
}

function createDeviceDataSchema(deviceName: string) {
    const schema = SchemaFactory.createForClass(DeviceData);
    schema.set('collection', deviceName);
    return schema;
}

export const CpuDataSchema = createDeviceDataSchema('cpuData');
export const GpuDataSchema = createDeviceDataSchema('gpuData');
export const RamDataSchema = createDeviceDataSchema('ramData');
export const UsbDataSchema = createDeviceDataSchema('usbData');
export const SsdDataSchema = createDeviceDataSchema('ssdData');
export const HddDataSchema = createDeviceDataSchema('hddData');