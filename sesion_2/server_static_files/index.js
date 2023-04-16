const http = require("http")
const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use("/", express.static("public"))

http.createServer(app).listen(8080)