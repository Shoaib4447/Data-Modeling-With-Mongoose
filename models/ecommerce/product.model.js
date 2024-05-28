import mongoose from 'mongoose';

const productSchema = new mongoose.Scheam(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },

    price: {
      type: Number,
      default: 0,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: ture,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestams: true }
);

export const Product = mongoose.model('Product', productSchema);
