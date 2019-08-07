const express = require("express"),
mongoose = require("mongoose"),
routes = require("./routes"),
server = express()

mongoose.connect("mongodb+srv://dannystack:dannystack@cluster0-anp2r.mongodb.net/omnistack8?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3000, () => console.log("Serving on port 3000."))
