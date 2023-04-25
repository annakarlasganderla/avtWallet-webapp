import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { Public } from 'src/auth/decorators/auth.decorators';

@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) { }

  @Post()
  @Public()
  create(@Body() createRevenueDto: CreateRevenueDto) {
    return this.revenueService.create(createRevenueDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.revenueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRevenueDto: UpdateRevenueDto) {
    return this.revenueService.update(id, updateRevenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueService.softDelete(id);
  }
}
