import Agenda from 'agenda'

import {
  httpService,
  mongooseService,
  verificationService,
  scooterService,
  rideService,
  logService
} from './services/factoryService.js'

logService.configure()

const agenda = new Agenda({
  db: {
    address: `mongodb://${process.env.MONGO_HOST}/agenda`,
    options: {
      useUnifiedTopology: true
    }
  }
})

agenda.define('check for scooters recently on a ride', async job => {
  try {
    console.info('Checking for rides...')
    const currentAvailability = await httpService.list()

    if (!(await scooterService.isEmpty())) {
      const rodeScooters = await verificationService.getRecentRodeScooters(currentAvailability)
      console.info(`Scooters ridden: ${rodeScooters.length}`)
      await rideService.insertMany(rodeScooters)
    }

    await scooterService.insert(currentAvailability)
    console.info('Finished!')
  } catch (error) {
    console.error(error)
  }
})

mongooseService.connect()
  .then(() => agenda.start())
  .then(() => agenda.every(process.env.SCHEDULE, 'check for scooters recently on a ride'))
  .catch(error => {
    console.error(error)
  })
