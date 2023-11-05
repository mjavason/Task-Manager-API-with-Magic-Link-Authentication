import { Document, Types } from 'mongoose';

interface ITask extends Document {
  _id?: string | Types.ObjectId;
  user: string | Types.ObjectId;
  title: string;
  description: string;
  due_date: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  deleted?: boolean;
}

export default ITask;
