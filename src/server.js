import Agenda from 'agenda'

import {
  httpService,
  mongoService,
  availabilityService,
  distanceService
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
    const currentAvailability = await httpService.list()
    const latestAvailability = await availabilityService.getLatest()

    if (latestAvailability.data?.length > 0) {
      // TODO: run verificationService method
    }

    // TODO: Check schema before inserting
    availabilityService.insert(currentAvailability)
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
