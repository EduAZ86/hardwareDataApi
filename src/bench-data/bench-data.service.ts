import { Injectable } from '@nestjs/common';
import { CreateBenchDataDto } from './dto/create-bench-data.dto';
import { UpdateBenchDataDto } from './dto/update-bench-data.dto';

@Injectable()
export class BenchDataService {
    create(createBenchDataDto: CreateBenchDataDto) {
        return 'This action adds a new cpu';
    }

    findAll() {
        return `This action returns all cpu`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cpu`;
    }

    update(id: number, updateBenchDataDto: UpdateBenchDataDto) {
        return `This action updates a #${id} cpu`;
    }

    remove(id: number) {
        return `This action removes a #${id} cpu`;
    }
}
