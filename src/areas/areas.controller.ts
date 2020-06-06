import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreaDTO } from './dto/area.dto';

@Controller('areas')
export class AreasController {

  constructor(public areasService: AreasService){}

  @Get()
  showAllAreas(){
    return this.areasService.findAll();
  }

  @Post()
    async create(@Body() area: AreaDTO): Promise<any> {
      return this.areasService.create(area);
    }  

  @Put(':id')
    async update(@Param('id') id, @Body() area: AreaDTO): Promise<any> {
        area.id = Number(id);
        return this.areasService.update(area);
    }
  @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.areasService.delete(id);
    }  
}
