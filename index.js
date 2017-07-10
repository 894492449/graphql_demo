/**
*  graphql类型系统定义
*  express、express-graphql搭建graphql服务器并监听http://localhost:3000
**/


// 加载模块
var graphqlHTTP = require('express-graphql');
var express = require('express');
var schema=require('./typeSystem');

// 使用express和express-graphql模块搭建node服务并进行端口监听
var app=express();

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});// 因前台页面使用ajax请求数据，node端需设置跨域配置

app.use('/', graphqlHTTP({
    schema: schema,
    pretty: true,
  }))
  .listen(3000);
console.log('GraphQL server running on http://localhost:3000/');