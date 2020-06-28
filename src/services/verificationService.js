import { distanceService, scooterService } from './serviceFactory.js'

export const getRecentRodeScooters = async (currentAvailability) => {
  const scooters = await scooterService.list()

  return currentAvailability.filter(x => {
    const scooter = scooters.find(y => y.systemId === x.id)

    if (scooter && distanceService.is60MetersApart({
      lat: x.lat,
      lng: x.lng
    }, {
      lat: scooter.lat,
      lng: scooter.lng
    })) {
      return x
    }
  })
}
