const mongoose = require('mongoose')

allDesignations={
    desg: String
}

module.exports = mongoose.model("All Designations", allDesignations)
