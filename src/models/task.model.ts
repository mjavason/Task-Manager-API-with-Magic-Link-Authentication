import { Schema, model } from 'mongoose';
import { DATABASES } from '../constants';

const taskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: DATABASES.USER,
    required: true,
    autopopulate: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
    select: false,
  },
});

taskSchema.plugin(require('mongoose-autopopulate'));

const TaskModel = model(DATABASES.TASK, taskSchema);

export default TaskModel;
