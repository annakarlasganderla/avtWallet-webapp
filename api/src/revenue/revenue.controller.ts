import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Request,
} from '@nestjs/common';
import { RevenueService } from './services/revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { PageDto, PageOptionsDto, WhereDto } from './dto/page.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Revenue } from './entities/revenue.entity';
import {
  CreatedEntity,
  DeletedEntity,
  UpdatedEntity,
} from 'src/common/dto/default-responses';
import {
  IBarChart,
  IPieChart,
  IStackedChart,
} from './dto/charts-interface.dto';
@ApiTags('revenues')
@Controller('revenues')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Post('create')
  @ApiResponse({ status: 201, type: CreatedEntity })
  create(@Body() createRevenueDto: CreateRevenueDto): Promise<CreatedEntity> {
    return this.revenueService.create(createRevenueDto);
  }

  @Post('list-all')
  @ApiResponse({ status: 200, type: PageDto })
  findAll(
    @Body() pageOptionsDto: PageOptionsDto,
    @Request() request: any,
  ): Promise<PageDto<Revenue>> {
    return this.revenueService.findAll(pageOptionsDto, request);
  }

  @Get('get/:id')
  @ApiResponse({ status: 200, type: Revenue })
  findOne(@Param('id') id: string): Promise<Revenue> {
    return this.revenueService.findOne(id);
  }

  @Get('amount')
  @ApiResponse({ status: 200, type: Number })
  getAmount(@Request() request: any): Promise<number> {
    return this.revenueService.getAmount(request);
  }

  @Get('pie-chart')
  @ApiResponse({ status: 200 })
  getPieChart(@Request() request: any): Promise<IPieChart> {
    return this.revenueService.getPieChart(request);
  }

  @Get('stacked-chart')
  @ApiResponse({ status: 200 })
  getStackedChart(@Request() request: any): Promise<IStackedChart> {
    return this.revenueService.getStackedChart(request);
  }

  @Post('bar-chart')
  @ApiResponse({ status: 200 })
  getBarChart(
    @Body() pageOptionsDto: WhereDto,
    @Request() request: any,
  ): Promise<IBarChart> {
    return this.revenueService.getBarChart(pageOptionsDto, request);
  }

  @Put('edit/:id')
  @ApiResponse({ status: 200, type: UpdatedEntity })
  update(
    @Param('id') id: string,
    @Body() updateRevenueDto: UpdateRevenueDto,
  ): Promise<UpdatedEntity> {
    return this.revenueService.update(id, updateRevenueDto);
  }

  @Delete('delete/:id')
  @ApiResponse({ status: 200, type: DeletedEntity })
  remove(@Param('id') id: string): Promise<DeletedEntity> {
    return this.revenueService.softDelete(id);
  }
}
