var compute=require('./compute.js')
var graphql = require('graphql');
var data=require('./datas.js');

// 获取数据
data1=data.data1;
data2=data.data2

// 数据1类型定义
var First = new graphql.GraphQLObjectType({
  name: "First",
  fields: {
    id: {
      type: graphql.GraphQLString
    },
    information: {
      type: graphql.GraphQLString
    },
    name:{
      type:graphql.GraphQLString
    }
  }
});

// 数据2类型定义
var Second = new graphql.GraphQLObjectType({
  name: "Second",
  fields: {
    id: {
      type: graphql.GraphQLString
    },
    address: {
      type: graphql.GraphQLString
    }
  }
})

// 整合后的类型
var Third = new graphql.GraphQLObjectType({
  name: "Second",
  fields: {
    id: {
      type: graphql.GraphQLString
    },
    name:{
      type:graphql.GraphQLString
    },
    address: {
      type: graphql.GraphQLString
    },
    information: {
      type: graphql.GraphQLString
    }
  }
})

// 定义查询类型query（用于查询数据的返回形式）
var queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    item: {
      type: new graphql.GraphQLList(Third),
      resolve: function() {
        var result=compute(data1,data2)
        return result
      }
    }
  }
})

// 指定schema
var schema = new graphql.GraphQLSchema({
  query: queryType
})

module.exports=schema