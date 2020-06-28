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

agenda.define('wow', async job => {
  try {
    console.log('hmmmm')
    const currentAvailability = await httpService.list()

    if (!(await scooterService.isEmpty())) {
      console.log('HERE!')

      const scooters = await verificationService.getRecentRodeScooters(currentAvailability)
      console.log('FINISHED')

      console.log(scooters.length)

      await rideService.insertMany(scooters)
    }

    // TODO: Check schema before inserting
    await scooterService.insert(currentAvailability)
  } catch (error) {
    console.error(error)
  }
})

mongoService.connect()
  .then(() => agenda.start())
  .then(() => agenda.every(process.env.SCHEDULE, 'wow'))
  .catch(error => {
    console.log('aaaa')
    console.error(error)
  })
