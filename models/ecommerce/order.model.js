import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type : mongoose.Types.ObjectId,
    ref : 'Product'
  },
  quantity:{
    type: Number
    required: true
  }
})


const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type:mongoose.Schema.Types.ObjectID,
      ref:'User'
    },
    orderItems:{
      type: [orderItemSchema]
    },
    address:{
      type:String,
      required: true
    },
    status:{
      type:Sting,
      enum:["PENDING","CANCELLED" , "DELIVERED"],
      default:"PENDING"
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);