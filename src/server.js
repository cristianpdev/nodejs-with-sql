import app from './app.js'

require('./database')

app.listen(3333, () => {
  console.log('server running...')
})