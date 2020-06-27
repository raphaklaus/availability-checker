import { distanceService, availabilityService } from './factoryService.js'

export const getRecentRodeScooters = async (currentAvailability) => {
  currentAvailability
    .filter(async x => {
      const latestScooterRecord = await isScooterInHistory(x.id)

      if (latestScooterRecord && distanceService.is60MetersApart({
        lat: x.lat,
        lng: x.lng
      }, {
        lat: latestScooterRecord.lat,
        lng: latestScooterRecord.lng
      })) {
        return x
      }
    })
}

const isScooterInHistory = async (scooterSystemId) => {
  return availabilityService.findInHistory(scooterSystemId)
}
