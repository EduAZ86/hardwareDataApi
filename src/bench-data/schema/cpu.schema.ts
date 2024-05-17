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
    return SchemaFactory.createForClass(DeviceData);
}

export const CpuDataSchema = createDeviceDataSchema('cpu');
export const GpuDataSchema = createDeviceDataSchema('gpu');
export const RamDataSchema = createDeviceDataSchema('ram');
export const UsbDataSchema = createDeviceDataSchema('usb');
export const SsdDataSchema = createDeviceDataSchema('ssd');
export const HddDataSchema = createDeviceDataSchema('hdd');