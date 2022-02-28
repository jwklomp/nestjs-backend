import { Module } from '@nestjs/common';
import { IxbrlService } from './ixbrl.service';
import { IxbrlController } from './ixbrl.controller';

@Module({
  controllers: [IxbrlController],
  providers: [IxbrlService]
})
export class IxbrlModule {}
