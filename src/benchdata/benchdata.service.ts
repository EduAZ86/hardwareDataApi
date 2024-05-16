import { Injectable } from '@nestjs/common';

@Injectable()
export class BenchdataService {
    getAllBenchData() {
        return "hola service nest"
    }
}
