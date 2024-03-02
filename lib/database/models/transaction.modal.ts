import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  creaditedAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  plan: { type: String },
  credits: { type: String },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);
export default Transaction;
