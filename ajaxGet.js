/**
*  向node服务器发送get请求并附带查询条件
*  获取数据后用handlebars渲染到页面中
**/

$.ajax({
	type: "GET",
	url: "http://localhost:3000?query={item{name,id,information,address}}",
	dataType: "json",
	success: function(datas) {
		random(datas.data.item)
	}
})

function random(data) {
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var context = {
		data
	}
	var html = template(context);
	$("body").append(html);
}