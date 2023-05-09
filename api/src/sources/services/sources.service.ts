import { Injectable, Logger, HttpException } from '@nestjs/common';
import { CreateSourceDto } from '../dto/create-source.dto';
import { UpdateSourceDto } from '../dto/update-source.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from '../entities/source.entity';
import { IsNull, Repository } from 'typeorm';
import { DeletedUserDto } from 'src/common/dto/default-responses';
import { handleErrors } from '../../common/services/common.service';

@Injectable()
export class SourcesService {
  private logger = new Logger(Source.name);

  constructor(
    @InjectRepository(Source)
    private sourceRepository: Repository<Source>,
  ) {}

  async create(createSourceDto: CreateSourceDto) {
    try {
      const source = this.sourceRepository.create(createSourceDto);

      this.logger.log('Source created successfully');
      this.sourceRepository.save(source);

      return { message: source.name };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findAll(): Promise<Source[]> {
    try {
      return this.sourceRepository.find();
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

  async softDelete(id: string): Promise<DeletedUserDto> {
    try {
      const source = await this.sourceRepository
        .findOneBy({ id })
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
