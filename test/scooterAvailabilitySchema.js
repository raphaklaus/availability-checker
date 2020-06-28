export default {
  type: 'array',
  items: {
    properties: {
      id: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
      lat: {
        type: 'number'
      },
      lng: {
        type: 'number'
      },
      battery: {
        type: 'number'
      },
      type: {
        type: 'number'
      }
    },
    required: ['id', 'name', 'lat', 'lng', 'battery', 'type']
  }
}
