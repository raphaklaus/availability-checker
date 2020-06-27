import mongoose from 'mongoose'
import ScooterAvailabilityModel from './scooterAvailabilityModel.js'

const scooterAvailabilityHistory = mongoose.Schema({
  data: [ScooterAvailabilityModel]
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

export default mongoose.model('scooterAvailabilityHistory', scooterAvailabilityHistory)
