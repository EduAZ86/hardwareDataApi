import {
    IsString, IsNumber,
    MinLength,
    IsUrl,
    IsNotEmpty
} from 'class-validator';

class IStatistics {
    
    @IsNotEmpty()
    @IsNumber()
    rank: number
    @IsNotEmpty()
    @IsNumber()
    benchmark: number
    @IsNotEmpty()
    @IsString()
    samples: string
}

export class CreateDeviceDataDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    partNumber: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    brand: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    model: string;


    statistics: IStatistics

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    @MinLength(8)
    url: string;
}
