import mongoose from 'mongoose'

export default mongoose.Schema({
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
