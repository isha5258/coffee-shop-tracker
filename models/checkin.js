import mongoose from "mongoose";

const Schema = mongoose.Schema

const checkinSchema = new Schema({
  name: String,
  rating: {
    type: Number, min: 1, max: 5
},
location: String,
comment: String,
parking: Boolean,
owner: {type: Schema.Types.ObjectId, ref: "Profile"},
beverage: {type: Schema.Types.ObjectId, ref: 'Beverage'},

})

const Checkin = mongoose.model('Checkin', checkinSchema)

export {
  Checkin
}