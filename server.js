let http = require('http')

let users = [{
  id: 1,
  name: '张三'
},{
  id: 2,
  name: '李四'
}]
let server = http.createServer((req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if(req.url === '/api/users') {
    res.end(JSON.stringify(users))
  }else {
    res.end('not founds')
  }
})
server.listen(3000,()=> {
  console.log('后端api服务器已启动在3000端口')
})
