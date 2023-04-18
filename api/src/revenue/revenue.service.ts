import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { Revenue } from './entities/revenue.entity';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RevenueService {
  private logger = new Logger(Revenue.name);

  constructor(
    @InjectRepository(Revenue)
    private revenueRepository: Repository<Revenue>,
  ) { }

  private handleErrors(message: string) {
    this.logger.log(message);

    throw new HttpException(message, 500);
  }

  async create(createRevenueDto: CreateRevenueDto) {
    try {
      const revenue = this.revenueRepository.create(createRevenueDto);

      this.logger.log('Revenue created successfully');
      this.revenueRepository.save(revenue);

      return { message: revenue.name };
    } catch (e: any) {
      this.handleErrors(e.message);
    }
  }

  async findAll(): Promise<Revenue[]> {
    try {
      return this.revenueRepository.find();
    } catch (e: any) {
      this.handleErrors(e.message);
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
      this.handleErrors(e.message);
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

      if (revenue) {
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
      }

      throw HttpException;
    } catch (e: any) {
      this.handleErrors(e.message);
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
      this.handleErrors(e.message);
    }
  }
}
