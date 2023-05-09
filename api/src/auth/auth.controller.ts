import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto, AuthResponse } from './dto/auth.dto';
import { AuthService } from './services/auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from './decorators/auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Authentication' })
  @ApiResponse({
    status: 200,
    description: 'Authenticate the user when login',
    type: AuthResponse,
  })
  @Post()
  @Public()
  public async login(@Body() authDto: AuthDto): Promise<AuthResponse> {
    return await this.authService.login(authDto);
  }
}
