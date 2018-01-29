/*
  20180124
  author:oneminuter
*/
//设置sessionStorage
function setSessionStorage(key, value) {
	sessionStorage.setItem(key,value);
}

//获取sessionStorage
function getSessionStorage(key) {
	return sessionStorage.getItem(key);
}

//时间格式化
function formatTime(timestamp) {
	t = new Date(timestamp);
	y = t.getFullYear();
	m = t.getMonth();
	d = t.getDate();

	h = t.getHours();
	min = t.getMinutes();
	s = t.getSeconds();

	return y + "-" + (m+1) + "-" + d + " " + h + ":" + min + ":" + s ;
}


/*
AJAX post请求：
	obj{
		method: 请求方式
		url:请求地址
		data:请求数据json格式
		success: 请求成功执行方法
		error: 请求失败执行方法
	}
*/
function ajaxPost(obj) {
	var xhr = null;
	if (window.XMLHttpRequest){ 
		// code for IE7+, Firefox, Chrome, Opera, Safari 
		xhr = new XMLHttpRequest(); 
	}else{// code for IE6, IE5 
		xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState == 4) {
			var response = JSON.parse(this.responseText);
			if (response.code == 200) {
				obj.success(response)
			} else {
				obj.error(response)
			}
		}
	});
	xhr.open(obj.method,obj.url);
	xhr.setRequestHeader("Api-Accept", "application/futurebots.cn+json;version=1");
	xhr.setRequestHeader("device", "html");
	if (obj.header != null || obj.header != "" || obj.header != "undefined") {
		for (var key in obj.header) {
			xhr.setRequestHeader(key, obj.header[key]);
		}
	}

	xhr.send(obj.data);

}
/*
AJAX get请求
*/
function ajaxGet(obj) {

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState == 4) {

			var response = JSON.parse(this.responseText);
			if (response.code == 200) {
				obj.success(response)
			} else {
				obj.error(response)
			}
		}
	});

	//拼接参数
	var reqData = "&";
	for(var key in obj.data) {
		reqData += key + "=" + obj.data[key];
	}
	//去掉以一个&
	if (reqData.length > 1) {
		reqData = reqData.slice(1);

		obj.url = obj.url + "?" + reqData;
	}

	xhr.open(obj.method,obj.url, true);
	xhr.setRequestHeader("Api-Accept", "application/futurebots.cn+json;version=1");
	xhr.setRequestHeader("device", "html");
	if (obj.header != null || obj.header != "" || obj.header != "undefined") {
		for (var key in obj.header) {
			xhr.setRequestHeader(key, obj.header[key]);
		}
	}

	xhr.send();
}