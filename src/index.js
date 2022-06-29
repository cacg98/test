const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('app running')
})

app.get('/', (req, res) => {
    res.send('funciona bien')
})
