import mongoose, { Document, Schema } from "mongoose";
import { Customer } from "../../model/customer";

export interface ICustomerDocument extends Document, Customer {}

const CustomerSchema: Schema = new Schema({
  document: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export default mongoose.model<ICustomerDocument>("Customer", CustomerSchema);
