const express = require('express');
const https = require('https');
const url = require('url');

const app = express();

app.get('/', (req, res) => {
  const imageUrl = 'http://m.qpic.cn/psc?/V50EUuRq1wZcjn09AVgE2Q5heT2pbuIg/ruAMsa53pVQWN7FLK88i5mrJOTGs92wGhIJ5ObCVi5kZcs2j*7aSJyhBpJdCS7ihUuxjfQGIfFzZ9Js45eID1JMQ8jIpTMbxbAufTOkSods!/b&bo=cgxABnIMQAYBNxA!&rf=viewer_4';
  const parsedUrl = url.parse(imageUrl);
  const options = {
    hostname: parsedUrl.hostname,
    path: parsedUrl.path,
    headers: {
      'Referer': 'http:localhost:3000' // 设置Referer头部，模拟来自你的网页的请求
    }
  };

  const proxyReq = https.request(options, (proxyRes) => {
    res.setHeader('Content-Type', proxyRes.headers['content-type']);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (error) => {
    console.error(error);
    res.sendStatus(500);
  });

  proxyReq.end();
});

const PORT = 8080; // 代理服务器监听的端口号
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});