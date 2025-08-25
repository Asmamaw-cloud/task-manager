require('dotenv').config()
console.log("MONGO_URI from env:", process.env.MONGO_URI);


const app = require('./app')
const connectDB = require('./config/db')

connectDB() // connect to MongoDB

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
