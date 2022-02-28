import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { IxbrlService } from './ixbrl.service';
import { IXbrlDTO } from './types/IXbrlDTO';

@Controller('ixbrl')
export class IxbrlController {
  constructor(private readonly ixbrlService: IxbrlService) {}

  @Get(':id')
  findOne(@Param('id') id: string): IXbrlDTO {
    return this.ixbrlService.findOne(+id);
  }

  @Post()
  create(@Body() createIxbrlDto: IXbrlDTO) {
    return this.ixbrlService.create(createIxbrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ixbrlService.remove(+id);
  }

  @Post('/export/:id')
  @HttpCode(202)
  createStyled(@Body() createIxbrlDto: IXbrlDTO) {
    return this.ixbrlService.createStyled(createIxbrlDto);
  }
}
