import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  CreatedEntity,
  DeletedUserDto,
  UpdatedEntity,
} from 'src/common/dto/default-responses';
import { Not } from 'typeorm';

@Injectable()
export class UsersService {
  private logger = new Logger(User.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private handleErrors(message: string) {
    this.logger.log(message);

    throw new HttpException(message, 500);
  }

  async create(createUserDto: CreateUserDto): Promise<CreatedEntity> {
    try {
      const user = this.usersRepository.create(createUserDto);

      this.logger.log('User created successfully');
      this.usersRepository.save(user);

      return { message: user.name };
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return this.usersRepository.find();
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
          deletedAt: Not(null),
        },
      });

      if (!user) throw new HttpException('user_not_found', 404);

      return user;
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async findByLogin(login: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOneBy({ login });

      if (!user) throw new HttpException('user_not_found', 404);

      return user;
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdatedEntity> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id,
          deletedAt: Not(null),
        },
      });

      if (user) {
        user.name = updateUserDto.name;
        user.email = updateUserDto.email;
        user.login = updateUserDto.login;
        user.password = updateUserDto.password;
        user.updatedAt = new Date();

        await this.usersRepository.update(id, user);
        return { message: updateUserDto.name };
      }

      throw new InternalServerErrorException();
    } catch (e: any) {
      this.handleErrors(e.message);
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
      this.handleErrors(e.message);
    }
  }
}
