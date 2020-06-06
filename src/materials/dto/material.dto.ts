import { ApiProperty } from '@nestjs/swagger';

export class MaterialDTO {

  @ApiProperty()
  id: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  updatedDate: Date;

  @ApiProperty()
  store: string;

  @ApiProperty()
  description: string;
}