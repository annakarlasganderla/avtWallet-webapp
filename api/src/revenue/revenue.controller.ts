import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RevenueService } from './services/revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { PageDto, PageOptionsDto } from './dto/page.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Revenue } from './entities/revenue.entity';
import {
  CreatedEntity,
  DeletedEntity,
  UpdatedEntity,
} from 'src/common/dto/default-responses';

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
  findAll(@Body() pageOptionsDto: PageOptionsDto): Promise<PageDto<Revenue>> {
    return this.revenueService.findAll(pageOptionsDto);
  }

  @Get('get/:id')
  @ApiResponse({ status: 200, type: Revenue })
  findOne(@Param('id') id: string): Promise<Revenue> {
    return this.revenueService.findOne(id);
  }

  @Get('amount')
  @ApiResponse({ status: 200, type: Number })
  getAmount(): Promise<Number> {
    return this.revenueService.getAmount();
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
