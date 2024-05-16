import { PartialType } from '@nestjs/mapped-types';
import { CreateBenchDataDto } from './create-bench-data.dto';

export class UpdateBenchDataDto extends PartialType(CreateBenchDataDto) { }
