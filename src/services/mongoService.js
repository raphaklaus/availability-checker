import mongoose from 'mongoose'

export const connect = async () => {
  try {
    console.log('wow!')

    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log('failed')

    console.error(error)
  }
}
