const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const forThemRouter = require('./routes/for-them.js')
const albumsRoutes = require('./routes/albumsRoutes.js')
const contentsRoutes = require('./routes/contentsRoutes.js')
const cors = require('cors')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/forThem', forThemRouter)
app.use('/albums', albumsRoutes)
app.use('/contents', contentsRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  console.log(err)
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'not found'}})
})

const listener = () => console.log(`listening on port ${port}`);
app.listen(port, listener)
