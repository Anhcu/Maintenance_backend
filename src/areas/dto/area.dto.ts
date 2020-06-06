import { ApiProperty } from '@nestjs/swagger';

export class AreaDTO {

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phonenumber: string;
}