import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserResponse } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/auth.decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatedEntity, DeletedEntity } from 'src/common/dto/default-responses';
import { GetUserResponse } from './dto/get-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Public()
  @Post('create')
  @ApiResponse({ status: 201, type: CreatedEntity })
  async create(@Body() createUserDto: CreateUserDto): Promise<CreatedEntity> {
    return await this.usersService.create(createUserDto);
  }

  @Get('get/:id')
  @ApiResponse({ status: 200, type: GetUserResponse })
  async findOne(@Param('id') id: string): Promise<GetUserResponse> {
    return await this.usersService.findById(id);
  }

  @Put('edit/:id')
  @ApiResponse({ status: 200, type: UpdateUserResponse })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserResponse> {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete('delete/:id')
  @ApiResponse({ status: 200, type: DeletedEntity })
  async delete(@Param('id') id: string): Promise<DeletedEntity> {
    return await this.usersService.softDelete(id);
  }
}
