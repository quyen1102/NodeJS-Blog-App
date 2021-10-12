
// nodemon: lắng nghe sự thay đổi khi code có thay đổi, và k cần thoát chương trình và chạy lại

const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    let a = 1
    let b = 2
    let c = a + b
  res.send('Trần Thái Quyền xin chào các bạn!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})