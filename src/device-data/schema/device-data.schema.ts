import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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
};
@Schema({ collection: 'cpudatas' })
export class CpuData extends DeviceData { }
@Schema({ collection: 'gpudatas' })
export class GpuData extends DeviceData { }
@Schema({ collection: 'ramdatas' })
export class RamData extends DeviceData { }
@Schema({ collection: 'ssddatas' })
export class SsdData extends DeviceData { }
@Schema({ collection: 'hdddatas' })
export class HddData extends DeviceData { }
@Schema({ collection: 'usbdatas' })
export class UsbData extends DeviceData { }

type DeviceDataDocument = DeviceData & Document;
const DeviceDataSchema = SchemaFactory.createForClass(DeviceData);

export type CpuDataDocument = CpuData & Document;
export const CpuDataSchema = SchemaFactory.createForClass(CpuData);

export type GpuDataDocument = GpuData & Document;
export const GpuDataSchema = SchemaFactory.createForClass(GpuData);

export type RamDataDocument = RamData & Document;
export const RamDataSchema = SchemaFactory.createForClass(RamData);

export type SsdDataDocument = SsdData & Document;
export const SsdDataSchema = SchemaFactory.createForClass(SsdData);

export type HddDataDocument = HddData & Document;
export const HddDataSchema = SchemaFactory.createForClass(HddData);

export type UsbDataDocument = UsbData & Document;
export const UsbDataSchema = SchemaFactory.createForClass(UsbData);
