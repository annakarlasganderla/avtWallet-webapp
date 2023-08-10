import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto, AuthResponse } from '../dto/auth.dto';
import { UserService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async login(authDto: AuthDto): Promise<AuthResponse> {
    const { login, password } = authDto;

    try {
      const user = await this.userService.findByLogin(login);

      if (
        user &&
        !(await this.userService.isPasswordsEqual(password, user.password))
      ) {
        throw new UnauthorizedException();
      }

      const payload = { username: login, sub: user.id, coin: user.coin };

      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: process.env.SECRET,
        }),
      };
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
