import { Connection } from 'typeorm';
import { AreaEntity } from './entity/area.entity';


export const areaProvider = [
  {
    provide: 'AREA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(AreaEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];