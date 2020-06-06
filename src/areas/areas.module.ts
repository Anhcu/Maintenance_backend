import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { DatabaseModule } from '../database/database.module';
import { areaProvider } from './areas.provider';
import { AreasController } from './areas.controller';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [AreasController],
  providers: [...areaProvider,
    AreasService],
  exports: [ AreasService]
})
export class AreasModule {}
