import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MaterialEntity } from './entity/material.entity';
import { MaterialDTO } from './dto/material.dto';

@Injectable()
export class MaterialsService {
  constructor(@Inject('MATERIAL_REPOSITORY') private materialsRepository: Repository<MaterialEntity>,) {}

  async findAll(): Promise<MaterialDTO[]>{
    return await this.materialsRepository.find();
  }

  async create(material: MaterialDTO): Promise<MaterialDTO> {
    return await this.materialsRepository.save(material)
  }

  async update(material: MaterialDTO): Promise<any> {
    return await this.materialsRepository.update(material.id, material);
  }

  async delete(id): Promise<any> {
    return await this.materialsRepository.delete(id);
  }
}
