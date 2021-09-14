import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  id: number;

  @Prop()
  text: string;

  @Prop()
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
