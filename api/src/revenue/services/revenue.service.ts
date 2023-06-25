import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateRevenueDto } from '../dto/create-revenue.dto';
import { UpdateRevenueDto } from '../dto/update-revenue.dto';
import { Revenue } from '../entities/revenue.entity';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { convertToken, handleErrors } from 'src/common/services/common.service';
import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
  WhereDto,
} from '../dto/page.dto';
import { TagsService } from 'src/tags/services/tags.service';
import { SourcesService } from 'src/sources/services/sources.service';
import { UserService } from 'src/users/services/users.service';
import { typeRevenue } from '../enum/typeRevenue';
import {
  CreatedEntity,
  DeletedEntity,
  UpdatedEntity,
} from 'src/common/dto/default-responses';

@Injectable()
export class RevenueService {
  private logger = new Logger(Revenue.name);

  constructor(
    @InjectRepository(Revenue)
    private revenueRepository: Repository<Revenue>,
    private userService: UserService,
    private sourceService: SourcesService,
    private tagService: TagsService,
  ) {}

  async create(createRevenueDto: CreateRevenueDto): Promise<CreatedEntity> {
    const { sourceId, tagId, userId } = createRevenueDto;

    const user = await this.userService.findOne(userId);

    if (!user) throw new HttpException('user_not_found', 404);

    const source = await this.sourceService.findOne(sourceId);

    if (!source) throw new HttpException('source_not_found', 404);

    const tag = await this.tagService.findOne(tagId);

    if (!tag) throw new HttpException('tag_not_found', 404);

    const newRevenue = new Revenue();

    newRevenue.name = createRevenueDto.name;
    newRevenue.coin = createRevenueDto.coin;
    newRevenue.value = createRevenueDto.value;
    newRevenue.source = source;
    newRevenue.tag = tag;
    newRevenue.payMethod = createRevenueDto.payMethod;
    newRevenue.description = createRevenueDto.description;
    newRevenue.typeRevenue = createRevenueDto.typeRevenue;
    newRevenue.user = user;
    newRevenue.date = new Date();

    try {
      await this.revenueRepository.save(newRevenue);
      this.logger.log('Revenue created successfully');

      return {
        message: `Revenue ${createRevenueDto.name} created successfully`,
      };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findAll(
    pageOptionsDto: PageOptionsDto,
    context: any,
  ): Promise<PageDto<Revenue>> {
    try {
      const { order, skip, take, where } = pageOptionsDto;
      const queryBuilder = this.revenueRepository.createQueryBuilder('revenue');
      const userId = convertToken(context);
      const { whereString, values } = this.buildWhere(where);

      queryBuilder
        .orderBy('revenue.createdAt', order)
        .skip(skip)
        .take(take)
        .leftJoinAndSelect('revenue.tag', 'tag')
        .where(whereString, values)
        .andWhere('revenue.userId = :user', { user: userId });

      const itemCount = await queryBuilder.getCount();
      const { entities } = await queryBuilder.getRawAndEntities();

      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

      return new PageDto(entities, pageMetaDto);
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findOne(id: string): Promise<Revenue> {
    try {
      const revenue = await this.revenueRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
        relations: ['tag', 'source'],
      });

      if (!revenue) throw new HttpException('Revenue not found', 404);

      return revenue;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async update(
    id: string,
    updateRevenueDto: UpdateRevenueDto,
  ): Promise<UpdatedEntity> {
    const { sourceId, tagId } = updateRevenueDto;

    try {
      const revenue = await this.revenueRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!revenue) throw new HttpException('Revenue not found', 404);

      const source = await this.sourceService.findOne(sourceId);

      if (!source) throw new HttpException('source_not_found', 404);

      const tag = await this.tagService.findOne(tagId);

      if (!tag) throw new HttpException('tag_not_found', 404);

      revenue.name = updateRevenueDto.name;
      revenue.coin = updateRevenueDto.coin;
      revenue.value = updateRevenueDto.value;
      revenue.payMethod = updateRevenueDto.payMethod;
      revenue.date = updateRevenueDto.date;
      revenue.description = updateRevenueDto.description;
      revenue.typeRevenue = updateRevenueDto.typeRevenue;
      revenue.source = source;
      revenue.tag = tag;
      revenue.updatedAt = new Date();

      await this.revenueRepository.update(id, revenue);
      return {
        message: `Revenue ${updateRevenueDto.name} updated successfully`,
      };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async softDelete(id: string): Promise<DeletedEntity> {
    try {
      const revenue = await this.revenueRepository
        .findOneBy({ id })
        .then((revenue) => {
          revenue.deletedAt = new Date();
          return this.revenueRepository.save(revenue);
        });

      return {
        message: `Revenue ${revenue.name} deleted successfully`,
      };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }

  async getAmount(context: any): Promise<number> {
    try {
      const queryBuilder = this.revenueRepository.createQueryBuilder('revenue');
      const userId = convertToken(context);
      queryBuilder
        .where('revenue.deletedAt is null')
        .andWhere('revenue.userId = :user', { user: userId });

      const { entities } = await queryBuilder.getRawAndEntities();

      const amount = entities.reduce((amount: number, entity: Revenue) => {
        let value = 0;
        if (entity.typeRevenue === typeRevenue.EXPENSE) {
          value = amount - entity.value;
        }
        if (entity.typeRevenue === typeRevenue.INCOMING) {
          value = amount + entity.value;
        }
        return value;
      }, 0);

      return amount;
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }
  /**
   * HELPERS
   */

  private buildWhere(options: WhereDto, deteleted = false) {
    let whereString = '';
    let values = {};

    if (options.name && options.name != '') {
      whereString += `revenue.name like :name`;

      values['name'] = `%${options.name}%`;
    }

    if (options.payMethod) {
      const condition = `revenue.payMethod = :payMethod`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : (whereString = `${condition}`);

      values['payMethod'] = options.payMethod;
    }

    if (options.tagId) {
      const condition = `revenue.tagId = :tagId`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : (whereString = `${condition}`);

      values['tagId'] = options.tagId;
    }

    if (options.value) {
      const condition = `revenue.value = :value`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : (whereString = `${condition}`);

      values['value'] = options.value;
    }

    if (!deteleted) {
      const condition = `revenue.deletedAt is null`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : (whereString = `${condition}`);
    }

    return {
      whereString,
      values,
    };
  }
}
