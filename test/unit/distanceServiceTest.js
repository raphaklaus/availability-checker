import assert from 'assert'
import {
  is60MetersApart
} from '../../src/services/distanceService.js'

describe('Distance Service', () => {
  it('should not detect that 2 points are separated by 60 meters or more', () => {
    const point1 = {
      lat: 41.3945014,
      lng: 2.1745278
    }

    const point2 = {
      lat: 41.3942688,
      lng: 2.1743964
    }

    assert(!is60MetersApart(point1, point2))
  })

  it('should detect that 2 points are separated by 60 meters or more', () => {
    const point1 = {
      lat: 41.4034884,
      lng: 2.1813668
    }

    const point2 = {
      lat: 41.389449,
      lng: 2.1748984
    }

    assert(is60MetersApart(point1, point2))
  })
})
