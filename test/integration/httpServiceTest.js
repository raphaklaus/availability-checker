import assert from 'assert'
import { validateSchema } from '../support/utils.js'
import schema from './scooterAvailabilitySchema.js'
import { httpService } from '../../src/services/serviceFactory.js'

describe('Get scooters', function () {
  before(async function () {
    this.result = await httpService.list()
  })

  it('should return valid list of scooters', function () {
    assert(validateSchema(this.result, schema).errors.length === 0)
  })
})
