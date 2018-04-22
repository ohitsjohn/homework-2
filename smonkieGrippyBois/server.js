// import a module used later
const path = require('path')

const DEFAULT_PORT = 3377
<<<<<<< HEAD
const WEBSITE_FOLDER = ''
=======
const WEBSITE_FOLDER = 'website'
>>>>>>> 75f43517f2741d96ed28f03a110493502cef5dc4

const express = require('express')
const app = express()

// Serve up website contents from the specified folder
const websitePath = path.join(__dirname, WEBSITE_FOLDER)
app.use(express.static(websitePath))

// start the web server listening on a port
const port = process.env.PORT || DEFAULT_PORT
app.listen(port)

// log runtime message
console.log(`Server listening at port ${port}`)