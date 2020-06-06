import { Connection } from 'typeorm';
import { MaterialEntity } from './entity/material.entity';


export const materialProvider = [
  {
    provide: 'MATERIAL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(MaterialEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];