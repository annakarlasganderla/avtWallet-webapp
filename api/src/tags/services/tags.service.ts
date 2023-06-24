import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { Tag } from '../entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { convertToken, handleErrors } from 'src/common/services/common.service';
import { UserService } from 'src/users/services/users.service';

@Injectable()
export class TagsService {
  private logger = new Logger(Tag.name);

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
    private userService: UserService,
  ) {}

  async create(createTagDto: CreateTagDto) {
    if (createTagDto.name === '' || !createTagDto.name)
      throw new HttpException('Tag is empty', 404);
    if (createTagDto.userId === '' || !createTagDto.userId)
      throw new HttpException('User is empty', 404);

    try {
      const { userId } = createTagDto;
      const user = await this.userService.findOne(userId);

      const newTag = new Tag();
      newTag.name = createTagDto.name;
      newTag.user = user;

      const tag = this.tagRepository.create(newTag);

      this.logger.log('Created successfully');
      this.tagRepository.save(tag);

      return { message: tag.name };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findAll(context: any): Promise<Tag[]> {
    try {
      const userId = convertToken(context);
      const query = this.tagRepository
        .createQueryBuilder('tag')
        .where('tag.deletedAt IS NULL')
        .andWhere('(tag.userId =:userId OR tag.userId IS NULL)', {
          userId,
        });
      return query.getMany();
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

  async softDelete(id: string, context: any) {
    try {
      const userId = convertToken(context);
      const tag = await this.tagRepository
        .findOne({ where: { id: id, user: { id: userId } } })
        .then((tag) => {
          tag.deletedAt = new Date();
          return this.tagRepository.save(tag);
        });

      return { message: tag.name };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }
}
