import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AreasController } from './areas/areas.controller';
import { AreasModule } from './areas/areas.module';
import { MaterialsModule } from './materials/materials.module';
import { MaterialsController } from './materials/materials.controller';


@Module({
  imports: [
    DatabaseModule,
    AreasModule,
    MaterialsModule
    ],
  controllers: [AppController, AreasController, MaterialsController ],
  providers: [AppService ],
})
export class AppModule {}
