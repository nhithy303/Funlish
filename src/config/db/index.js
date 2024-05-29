const mongoose = require('mongoose')
const secret = require('./secret')
const connectionStr = secret.connectionStr

async function connect() {
  try {
    await mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    console.log('Connect successfully!!!')
  } catch (error) {
    console.log(`Connect failure!!!\nError: ${error}`)
  }
}

module.exports = { connect }
