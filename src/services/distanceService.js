import geolib from 'geolib'

export const is60MetersApart = (point1, point2) => {
  return geolib.getDistance(point1, point2) >= 60
}
