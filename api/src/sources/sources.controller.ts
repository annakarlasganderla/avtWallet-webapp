import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { SourcesService } from './services/sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sources')
@Controller('sources')
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Post('create')
  create(@Body() createSourceDto: CreateSourceDto) {
    return this.sourcesService.create(createSourceDto);
  }

  @Get('list-all')
  findAll(@Request() request: any) {
    return this.sourcesService.findAll(request);
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.sourcesService.findOne(id);
  }

  @Put('edit/:id')
  update(@Param('id') id: string, @Body() updateSourceDto: UpdateSourceDto) {
    return this.sourcesService.update(id, updateSourceDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string, @Request() request: any) {
    return this.sourcesService.softDelete(id, request);
  }
}
