import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberService } from './number/number.service';
import { NumberController } from './number/number.controller';

@Module({
  controllers: [AppController, NumberController],
  providers: [AppService, NumberService],
})
export class AppModule {}
