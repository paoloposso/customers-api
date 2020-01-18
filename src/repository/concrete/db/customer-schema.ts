import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerDocument extends Document {
    name: string;
    email: string;
    document: string;
}

const CustomerSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  document: { type: String, required: true }
});

export default mongoose.model<ICustomerDocument>('Customer', CustomerSchema);
