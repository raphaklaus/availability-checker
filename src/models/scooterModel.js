import mongoose from 'mongoose'

const scooterSchema = mongoose.Schema({
  systemId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  battery: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
})

export default mongoose.model('scooter', scooterSchema)
