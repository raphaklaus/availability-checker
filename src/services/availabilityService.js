import ScooterAvailabilityHistory from '../models/scooterAvailabilityModelHistory.js'

export const getLatest = async () => {
  return ScooterAvailabilityHistory.findOne({}, { created_at: -1 }).populate({
    path: 'data'
  })
}

export const insert = async (data) => {
  const document = new ScooterAvailabilityHistory({
    data: mapIds(data)
  })

  return document.save()
}

const mapIds = (data) => {
  return data.map(x => {
    return {
      systemId: x.id,
      ...x
    }
  })
}
