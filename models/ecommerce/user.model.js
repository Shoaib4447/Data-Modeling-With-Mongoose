import moongooes from 'mongoose';

const userSchema = new moongooes.Schema(
  {
    username: {
      type: String,
      required: [true, 'Enter your username: '],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Enter your email: '],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      lowercase: true,
      required: true,
    },
  },
  { timestamps: true }
);
// timestams give us 2 fields createdby :and createdat:

export const User = mongoose.model('User', userSchema);
