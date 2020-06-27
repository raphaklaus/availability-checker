import ScooterAvailabilityHistory from '../models/scooterAvailabilityModelHistory.js'

export const isEmpty = async () => {
  return ScooterAvailabilityHistory.count() === 0
}

export const insert = async (data) => {
  const document = new ScooterAvailabilityHistory({
    data: mapIds(data)
  })

  return document.save()
}

export const findInHistory = async (scooterSystemId) => {
  const history = await ScooterAvailabilityHistory.findOne({
    'data.systemId': scooterSystemId
  }, {
    created_at: -1
  }).populate({
    path: 'data'
  })

  return history.data.find(x => x.systemId === scooterSystemId)
}

const mapIds = (data) => {
  return data.map(x => {
    return {
      systemId: x.id,
      ...x
    }
  })
}
