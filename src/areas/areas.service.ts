import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AreaEntity } from './entity/area.entity';
import { AreaDTO } from './dto/area.dto';

@Injectable()
export class AreasService {

  constructor(@Inject('AREA_REPOSITORY') private areasRepository: Repository<AreaEntity>, ) { }

  async findAll(): Promise<AreaDTO[]> {
    return await this.areasRepository.find();
  }

  async create(area: AreaDTO): Promise<AreaDTO> {
    return await this.areasRepository.save(area);
  }

  async update(area: AreaDTO): Promise<any> {
    return await this.areasRepository.update(area.id, area);
  }

  async delete(id): Promise<any> {
    return await this.areasRepository.delete(id);
  }

}
