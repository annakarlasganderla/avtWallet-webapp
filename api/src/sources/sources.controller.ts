import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SourcesService } from './services/sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/auth.decorators';

@ApiTags('sources')
@Controller('sources')
@Public()
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) { }

  @Post('create')
  create(@Body() createSourceDto: CreateSourceDto) {
    return this.sourcesService.create(createSourceDto);
  }

  @Get('list-all')
  findAll() {
    return this.sourcesService.findAll();
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
  remove(@Param('id') id: string) {
    return this.sourcesService.softDelete(id);
  }
}
