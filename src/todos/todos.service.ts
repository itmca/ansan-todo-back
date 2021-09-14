import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async update(id: number, createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoModel
      .findOneAndUpdate({ id: id }, createTodoDto)
      .exec();
  }

  async delete(id: number): Promise<TodoDocument> {
    return await this.todoModel.findOneAndDelete({ id: id }).exec();
  }
}
