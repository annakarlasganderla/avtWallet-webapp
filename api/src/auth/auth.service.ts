import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto, AuthResponse } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async login(authDto: AuthDto): Promise<AuthResponse> {
    const { login, password } = authDto;
    const user = await this.usersService.findByLogin(login);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: login, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
