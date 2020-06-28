import { scooterModel } from '../models/modelFactory.js'

export const isEmpty = async () => {
  return await scooterModel.countDocuments() === 0
}

export const list = async () => {
  return scooterModel.find({})
}

export const insert = async (scooters) => {
  const bulkDocuments = scooters
    .map(x => {
      const { id, ...rest } = x

      return {
        systemId: id,
        ...rest
      }
    })
    .map(x => ({
      updateOne: {
        filter: {
          systemId: x.systemId
        },
        update: x,
        upsert: true
      }
    }))

  return scooterModel.bulkWrite(bulkDocuments)
}
