const express = require('express')
const app = express()

// 設定靜態資料夾
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/:name', (req, res) => {
  const { name } = req.params
  // 倒入 name 資料
  res.render('person.ejs', { name })
})

app.listen(5500, () => {
  console.log('server is running on 5500 port')
})