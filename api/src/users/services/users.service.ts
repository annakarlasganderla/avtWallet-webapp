import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto, UpdateUserResponse } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import {
  CreatedEntity,
  DeletedUserDto,
  UpdatedEntity,
} from 'src/common/dto/default-responses';
import { handleErrors } from 'src/common/services/common.service';
import { GetUserResponse } from '../dto/get-user.dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UserService {
  private logger = new Logger(User.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreatedEntity> {
    try {
      const { password } = createUserDto;
      const hashedPassword = await this.hashPassword(password);

      createUserDto.password = hashedPassword;

      const user = this.usersRepository.create(createUserDto);

      this.usersRepository.save(user);

      this.logger.debug('User created successfully');

      return { message: `User ${user.name} created successfully` };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findById(id: string): Promise<GetUserResponse> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!user) throw new HttpException('user_not_found', 404);

      return {
        name: user.name,
        email: user.email,
        login: user.login,
      };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!user) throw new HttpException('user_not_found', 404);

      return user;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findByLogin(login: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOneBy({ login });

      if (!user) throw new HttpException('user_not_found', 404);

      return user;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserResponse> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (user) {
        user.name = updateUserDto.name;
        user.email = updateUserDto.email;
        user.login = updateUserDto.login;
        user.password = updateUserDto.password;
        user.updatedAt = new Date();

        await this.usersRepository.update(id, user);

        this.logger.debug('User updated successfully');

        return {
          name: user.name,
          email: user.email,
          login: user.login,
        };
      }

      throw new InternalServerErrorException();
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async softDelete(id: string): Promise<DeletedUserDto> {
    try {
      const user = await this.usersRepository.findOneBy({ id }).then((user) => {
        user.deletedAt = new Date();
        return this.usersRepository.save(user);
      });

      return { message: user.name };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }

  /**
   * HELPERS
   */

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

  async isPasswordsEqual(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
