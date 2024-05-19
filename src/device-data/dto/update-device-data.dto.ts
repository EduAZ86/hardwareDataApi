import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceDataDto } from './create-device-data.dto';

export class UpdateDeviceDataDto extends PartialType(CreateDeviceDataDto) { }
