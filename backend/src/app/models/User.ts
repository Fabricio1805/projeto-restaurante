import { model, Schema } from 'mongoose';

export const User = model(
  'users',
  new Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  }),
);
