const express = require('express')
const app = express()

// 設定靜態資料夾
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

const users = [
  {id: 1, label: 'ryan', age: 30},
  {id: 2, label: 'tom', age: 32}
]

app.get('/users', (req, res) => {
  res.render('users.ejs', { users })
})

app.listen(5500, () => {
  console.log('server is running on 5500 port')
})