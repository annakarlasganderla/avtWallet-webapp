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
import { TagsService } from './services/tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('create')
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get('list-all')
  findAll(@Request() request: any) {
    return this.tagsService.findAll(request);
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(id);
  }

  @Put('edit/:id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string, @Request() request: any) {
    return this.tagsService.softDelete(id, request);
  }
}
