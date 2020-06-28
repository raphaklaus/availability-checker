import rideModel from '../models/rideModel.js'

export const insertMany = async (data) => {
  return rideModel.insertMany(
    data.map(x => ({
      scooterId: x.id,
      date: new Date()
    }))
  )
}
