import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialDTO } from './dto/material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(public materialsService: MaterialsService) { }

  @Get()
  showAllMaterials() {
    return this.materialsService.findAll();
  }

  @Post()
  async create(@Body() material: MaterialDTO): Promise<any> {
    return this.materialsService.create(material);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() material: MaterialDTO): Promise<any> {
    material.id = Number(id);
    return this.materialsService.update(material);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.materialsService.delete(id);
  }
}
