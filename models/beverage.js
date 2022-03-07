import mongoose from "mongoose";

const Schema = mongoose.Schema

const beverageSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    lowercase: true},
  }, {
    timestamps: true
})

const Beverage = mongoose.model('Beverage', beverageSchema)

export {
  Beverage
}