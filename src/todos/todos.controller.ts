import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.create(createTodoDto);
  }

  @Put(':id')
  async toggle(@Param('id') id: number, @Body() createTodoDto: CreateTodoDto) {
    return this.todosService.update(id, createTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.todosService.delete(id);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }
}
