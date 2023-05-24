import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    example: 'Lunch',
    description: `Lunch tag`,
  })
  name: string;
}
