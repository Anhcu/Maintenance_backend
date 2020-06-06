import { Module } from '@nestjs/common';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';
import { DatabaseModule } from '../database/database.module';
import { materialProvider } from './materials.provider';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [MaterialsController],
  providers: [...materialProvider,
    MaterialsService],
  exports: [ MaterialsService]
})
export class MaterialsModule {}
