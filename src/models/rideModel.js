import mongoose from 'mongoose'

const rideSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  scooterId: {
    type: Number,
    required: true
  }
})

export default mongoose.model('ride', rideSchema)
