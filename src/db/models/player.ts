import mongoose, { Document } from "mongoose";

export interface PLayerInterface {
    name: string;
    lastName: string;
    address: string;
    gender: string;
    job: string;
    age: number;
}
export interface PlayerDocument extends PLayerInterface, Document {
    updatedAt: Date;
    createdAt: Date;
  }

  const PlayerSchema = new mongoose.Schema<PlayerDocument>(
    {
      name: { type: String, required: [true, "name required"] },
      lastName: { type: String },
      address: { type: String, required: [true, "address required"] },
      gender: { type: String, required: [true, "gender is required"] },
      job: { type: String },
      age: { type: Number, min: [18, "age must be adult"] },
    },
    {
      timestamps: true, // to create updatedAt and createdAt
    }
  );

  const playerModel = mongoose.model("PLayer", PlayerSchema);
export default playerModel;