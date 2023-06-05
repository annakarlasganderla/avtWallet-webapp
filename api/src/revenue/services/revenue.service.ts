import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateRevenueDto } from '../dto/create-revenue.dto';
import { UpdateRevenueDto } from '../dto/update-revenue.dto';
import { Revenue } from '../entities/revenue.entity';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { handleErrors } from 'src/common/services/common.service';
import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
  WhereDto,
} from '../dto/page.dto';
import { PayMethod } from '../enum/payMethod';

@Injectable()
export class RevenueService {
  private logger = new Logger(Revenue.name);

  constructor(
    @InjectRepository(Revenue)
    private revenueRepository: Repository<Revenue>,
  ) {}

  async create(createRevenueDto: CreateRevenueDto) {
    try {
      this.revenueRepository.create(createRevenueDto);
      this.logger.log('Revenue created successfully');

      return { message: createRevenueDto.name };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Revenue>> {
    try {
      const { order, skip, take, where } = pageOptionsDto;
      const queryBuilder = this.revenueRepository.createQueryBuilder('revenue');

      const { whereString, values } = this.buildWhere(where);

      // queryBuilder
      //   .orderBy('revenue.createdAt', order)
      //   .skip(skip)
      //   .take(take)
      //   .where('revenue.tagId = :tagId AND revenue.payMethod :payMethod', {
      //     tagId: 1,
      //     payMethod: PayMethod.MONEY,
      //   });

      queryBuilder
        .orderBy('revenue.createdAt', order)
        .skip(skip)
        .take(take)
        .where(whereString, values);

      const itemCount = await queryBuilder.getCount();
      const { entities } = await queryBuilder.getRawAndEntities();

      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

      return new PageDto(entities, pageMetaDto);
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async findOne(id: string) {
    try {
      const revenue = await this.revenueRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!revenue) throw new HttpException('Revenue not found', 404);

      return revenue;
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async update(id: string, updateRevenueDto: UpdateRevenueDto) {
    try {
      const revenue = await this.revenueRepository.findOne({
        where: {
          id,
          deletedAt: IsNull(),
        },
      });

      if (!revenue) throw new HttpException('Revenue not found', 404);

      revenue.name = updateRevenueDto.name;
      revenue.coin = updateRevenueDto.coin;
      revenue.value = updateRevenueDto.value;
      revenue.payMethod = updateRevenueDto.payMethod;
      revenue.date = updateRevenueDto.date;
      revenue.description = updateRevenueDto.description;
      revenue.typeRevenue = updateRevenueDto.typeRevenue;
      revenue.source = updateRevenueDto.source;
      revenue.tag = updateRevenueDto.tag;
      revenue.updatedAt = new Date();

      await this.revenueRepository.update(id, revenue);
      return { message: updateRevenueDto.name };
    } catch (e: any) {
      handleErrors(e.message, e.code);
    }
  }

  async softDelete(id: string) {
    try {
      const revenue = await this.revenueRepository
        .findOneBy({ id })
        .then((revenue) => {
          revenue.deletedAt = new Date();
          return this.revenueRepository.save(revenue);
        });

      return { message: revenue.name };
    } catch (e) {
      handleErrors(e.message, e.code);
    }
  }

  /**
   * HELPERS
   */

  private buildWhere(options: WhereDto) {
    let whereString = '';
    let values = {};

    if (options.name != '') {
      whereString += `revenue.name = :name`;

      values['name'] = options.name;
    }

    if (options.payMethod) {
      const condition = `revenue.payMethod = :payMethod`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : `${condition}`;

      values['payMethod'] = options.payMethod;
    }

    if (options.tagId) {
      const condition = `revenue.tagId = :tagId`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : `${condition}`;

      values['tagId'] = options.tagId;
    }

    if (options.value) {
      const condition = `revenue.value = :value`;

      whereString.length > 0
        ? (whereString += ` AND ${condition}`)
        : `${condition}`;

      values['value'] = options.value;
    }

    return {
      whereString,
      values,
    };
  }
}
