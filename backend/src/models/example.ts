import mongoose, { Document } from "mongoose";

interface Example extends Document {
  firstProperty: string;
  secondProperty: Number;
  thirdProperty: string;
}

const ExampleSchema = new mongoose.Schema<Example>({
  firstProperty: String,
  secondProperty: Number,
  thirdProperty: String,
});

const ExampleModel = mongoose.model<Example>("Example", ExampleSchema);

export { ExampleModel, Example };
