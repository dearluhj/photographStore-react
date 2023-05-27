const express = require("express")
const ip = require("ip")
const bodyParser = require("body-parser");
const getnavlist = require("./service/getnavlist")
const getpictures = require("./service/getpictures")
const getpicturedetail = require("./service/getpicturedetail")
const path = require("path")
const fs = require("fs")
const request = require("request")

const app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
  next()
})

app.get("/navlist", (req, res) => {
  console.log("请求标签栏数据")
  let list = getnavlist()
  let data = {
    time: new Date().getTime(),
    data: list
  }
  res.send(data)
})

app.get("/detail", (req, res) => {
  console.log(req.query.pid);
  let val = getpicturedetail(req.query.pid || "")
  res.send(val)
})

app.post("/styles", (req, res) => {
  console.log("请求图片数据");
  let picturelist = [];
  let gid = req.body.gid || 0,
    page = req.body.page || 1

  picturelist = getpictures(gid, page)
  let data = {
    time: new Date().getTime(),
    data: picturelist
  }
  res.send(data);
})

//代理图片请求
app.get("/proxy", (req, res) => {
  res.set({
    'Content-Type': 'image/jpeg'
  })
  let url = req.query.url

  let proxyreq = request(url, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, './error.jpg'));
    }
  })
  proxyreq.pipe(
    res
  )
  proxyreq.on('error', (error) => {
    res.sendFile(path.join(__dirname, './error.jpg'));
  });
})

let server = app.listen(8081, function () {

  var host = ip.address()
  var port = server.address().port

  console.log("应用实例已启动")
  console.log("本地地址 http://localhost:%s", port)
  console.log("局域网地址 http://%s:%s", host, port)

})