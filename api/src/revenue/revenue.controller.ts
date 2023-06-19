import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  Logger,
} from '@nestjs/common';
import { RevenueService } from './services/revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { PageOptionsDto } from './dto/page.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/auth.decorators';
import { Revenue } from './entities/revenue.entity';

@ApiTags('revenues')
@Controller('revenues')
@Public()
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) { }
  private logger = new Logger(Revenue.name);

  @Post('create')
  create(@Body() createRevenueDto: CreateRevenueDto) {
    return this.revenueService.create(createRevenueDto);
  }

  @Post('list-all')
  findAll(@Body() pageOptionsDto: PageOptionsDto) {
    return this.revenueService.findAll(pageOptionsDto);
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.revenueService.findOne(id);
  }

  @Put('edit/:id')
  update(@Param('id') id: string, @Body() updateRevenueDto: UpdateRevenueDto) {
    return this.revenueService.update(id, updateRevenueDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.revenueService.softDelete(id);
  }
}
