/** 
*  使用mockjs随机生成数据以供graphql服务器查询
**/


var Mock=require("mockjs");

var data=Mock.mock({
  'data1|10-20':[{
    "id|+1":1,
    "name":"@name",
    "information":"@title"
  }],
  'data2|10-20':[{
    "id|+1":1,
    "address":"@url"
  }]
})

module.exports = data
