import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IxbrlModule } from './ixbrl/ixbrl.module';

@Module({
  imports: [IxbrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
