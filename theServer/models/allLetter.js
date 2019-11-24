const mongoose= require('mongoose')

appletter={
    name: String,
    desg: String,
    jdate: String,
    lettertype: String,
    ctc: String,
    hr: String,
    newctc: String
}

module.exports = mongoose.model("All Letter", appletter)