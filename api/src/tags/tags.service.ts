import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class TagsService {
  private logger = new Logger(Tag.name);

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) { }

  private handleErrors(message: string) {
    this.logger.log(message);

    throw new HttpException(message, 500);
  }

  async create(createTagDto: CreateTagDto) {
    try {
      const tag = this.tagRepository.create(createTagDto);

      this.logger.log('Tag created successfully');
      this.tagRepository.save(tag);

      return { message: tag.name };
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async findAll(): Promise<Tag[]> {
    try {
      return this.tagRepository.find();
    } catch (e: any) {
      this.handleErrors(e.message);
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
      this.handleErrors(e.message);
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
      this.handleErrors(e.message);
    }
  }

  async softDelete(id: string) {
    try {
      const tag = await this.tagRepository
        .findOneBy({ id })
        .then((tag) => {
          tag.deletedAt = new Date();
          return this.tagRepository.save(tag);
        });

      return { message: tag.name };
    } catch (e) {
      this.handleErrors(e.message);
    }
  }
}
