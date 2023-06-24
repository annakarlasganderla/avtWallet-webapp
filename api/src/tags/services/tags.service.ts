import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { Tag } from '../entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { handleErrors } from 'src/common/services/common.service';

@Injectable()
export class TagsService {
  private logger = new Logger(Tag.name);

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    try {
      if (createTagDto.name === '')
        throw new HttpException('Tag is not empty', 404);
      const tag = this.tagRepository.create(createTagDto);

      this.logger.log('Created successfully');
      this.tagRepository.save(tag);

      return { message: tag.name };
    } catch (e: any) {
      throw e;
    }
  }

  async findAll(): Promise<Tag[]> {
    try {
      return await this.tagRepository.find({
        where: {
          deletedAt: IsNull(),
        },
      });
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findOne(id: string) {
    try {
      const tag = await this.tagRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!tag) throw new HttpException('Tag not found', 404);

      return tag;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    try {
      const tag = await this.tagRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (tag) {
        tag.name = updateTagDto.name;
        tag.updatedAt = new Date();

        await this.tagRepository.update(id, tag);
        return { message: updateTagDto.name };
      }

      throw HttpException;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async softDelete(id: string) {
    try {
      const tag = await this.tagRepository.findOneBy({ id }).then((tag) => {
        tag.deletedAt = new Date();
        return this.tagRepository.save(tag);
      });

      return { message: tag.name };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }
}
