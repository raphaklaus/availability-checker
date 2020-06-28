import mongoose from 'mongoose'

export const connect = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.error(error)
  }
}
