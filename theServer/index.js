const app = require('express')();
const PORT = process.env.PORT || 3300
const config = require("./config")

const cors = require('cors')
app.use(cors())

const bp = require('body-parser')
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

const mongoose = require('mongoose');
mongoose.connect(config.dburl, {
  useNewUrlParser: true
}).then(() => {
  console.log("MongoDB Connected")
}).catch((err) => {
  if (err)
    throw err;
})

const all_letters= require("./routes/all-letters")
app.use("/letters", all_letters)

app.listen(PORT, (err) => {
  if (err)
    throw err;
  console.log("Server Running at", PORT)
})
