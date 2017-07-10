// 数据处理函数（用于整合两表数据）
function compute(data1,data2){
  var result=[];
  for(var i=0;i<data1.length&&i<data2.length;i++){
    if(data1[i]["id"]==data2[i]["id"]){
      var o = data1[i];
      for(var key in data2[i]){
        if(!(key in o)){
          o[key]=data2[i][key]
        }
      };
      result.push(o)
    }
  }
  return result
}

module.exports=compute