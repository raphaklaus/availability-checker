import Agenda from 'agenda'

import {
  httpService,
  mongoService,
  verificationService,
  scooterService,
  rideService
} from './services/factoryService.js'

const agenda = new Agenda({
  db: {
    address: `mongodb://${process.env.MONGO_HOST}/agenda`,
    options: {
      useUnifiedTopology: true
    }
  }
})

agenda.define('check available scooters', async job => {
  try {
    const currentAvailability = await httpService.list()

    if (!(await scooterService.isEmpty())) {
      const scooters = await verificationService.getRecentRodeScooters(currentAvailability)
      await rideService.insertMany(scooters)
    }

    await scooterService.insert(currentAvailability)
  } catch (error) {
    console.error(error)
  }
})

mongoService.connect()
  .then(() => agenda.start())
  .then(() => agenda.every(process.env.SCHEDULE, 'check available scooters'))
  .catch(error => {
    console.error(error)
  })
