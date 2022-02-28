import { Injectable } from '@nestjs/common';
import { IXbrlDTO } from './types/IXbrlDTO';
import { ixbrlDTO1 } from './entities/IXbrlDTOs';

@Injectable()
export class IxbrlService {
  create(createIxbrlDto: IXbrlDTO) {
    return 'This action adds a new ixbrl';
  }

  createStyled(createIxbrlDto: IXbrlDTO) {
    return 'This action adds a new ixbrl';
  }

  findOne(id: number): IXbrlDTO {
    return ixbrlDTO1;
  }

  remove(id: number) {
    return `This action removes a #${id} ixbrl`;
  }
}
