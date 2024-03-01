import {Schema} from 'mongoose';

export const CompanySchema = new Schema({

  company_name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone_number: {
    type: String,
    require: true
  },
  emial: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  zip_code: {
    type: Number,
    require: false
  },
  website: {
    type: String,
    require: false
  },
  industry: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})