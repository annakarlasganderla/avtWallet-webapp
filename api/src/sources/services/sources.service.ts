import { Injectable, Logger, HttpException } from '@nestjs/common';
import { CreateSourceDto } from '../dto/create-source.dto';
import { UpdateSourceDto } from '../dto/update-source.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from '../entities/source.entity';
import { IsNull, Repository } from 'typeorm';
import { DeletedUserDto } from 'src/common/dto/default-responses';
import {
  convertToken,
  handleErrors,
} from '../../common/services/common.service';
import { UserService } from 'src/users/services/users.service';

@Injectable()
export class SourcesService {
  private logger = new Logger(Source.name);

  constructor(
    @InjectRepository(Source)
    private sourceRepository: Repository<Source>,
    private userService: UserService,
  ) {}

  async create(createSourceDto: CreateSourceDto) {
    try {
      if (createSourceDto.name === '')
        throw new HttpException('Tag is not empty', 404);
      if (createSourceDto.userId === '')
        throw new HttpException('User is not empty', 404);
      const { userId } = createSourceDto;

      const user = await this.userService.findOne(userId);

      const newSource = new Source();
      newSource.name = createSourceDto.name;
      newSource.user = user;

      const source = this.sourceRepository.create(newSource);

      this.logger.log('Source created successfully');
      this.sourceRepository.save(source);

      return { message: source.name };
    } catch (e: any) {
      throw e;
    }
  }

  async findAll(context: any): Promise<Source[]> {
    try {
      const userId = convertToken(context);
      const query = this.sourceRepository
        .createQueryBuilder('source')
        .where('source.deletedAt IS NULL')
        .andWhere('(source.userId =:userId OR source.userId IS NULL)', {
          userId,
        });
      return query.getMany();
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findOne(id: string) {
    try {
      const source = await this.sourceRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!source) throw new HttpException('Source not found', 404);

      return source;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async update(id: string, updateSourceDto: UpdateSourceDto) {
    try {
      const source = await this.sourceRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (source) {
        source.name = updateSourceDto.name;
        source.updatedAt = new Date();

        await this.sourceRepository.update(id, source);
        return { message: UpdateSourceDto.name };
      }

      throw HttpException;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async softDelete(id: string, context: any): Promise<DeletedUserDto> {
    try {
      const userId = convertToken(context);
      const source = await this.sourceRepository
        .findOne({ where: { id: id, user: { id: userId } } })
        .then((source) => {
          source.deletedAt = new Date();
          return this.sourceRepository.save(source);
        });

      return { message: source.name };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }
}
