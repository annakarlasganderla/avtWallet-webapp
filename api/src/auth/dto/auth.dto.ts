import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    example:
      'ileruhsbnflkgjshdfklgjhsdklfjhgpqoweiuqnfsjdfhlshlkjhsdflkghjklsdfg',
    description: `Token generated by the api`,
  })
  access_token: string;
}

export class AuthDto {
  @ApiProperty({
    example: 'admin',
    description: `Login word`,
  })
  login: string;

  @ApiProperty({
    example: 'admin',
    description: `Your password`,
  })
  password: string;
}
