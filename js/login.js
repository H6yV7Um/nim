/*
  20180124
  author:oneminuter
*/
//登录
function dologin(form) {
	var mobile = form.mobile.value;
	var passwd = form.passwd.value;

	if (mobile == "") {
		alert("请输入手机号");
		return false;
	}

	if (passwd == "") {
		alert("请输入密码");
		return false;
	}
	//请求登录配置参数
	var req = {
		url: "/v1/user/login",
		method: "POST",
		header: {
			"Api-Accept":"application/futurebots.cn+json;version=1",
			"device":"html"
		},
		data: JSON.stringify({
			mobile: mobile + "",
			passwd: passwd
		}),
		success: function(res) {
			if (res.code == 200) {
				setSessionStorage("token", res.data.token);
			} else {
				alert(res.message);
			}
		},
		error: function(err) {
			console.log("网络错误:", err);
		}
	}

	//发送ajax请求
	ajaxPost(req);

	var timer = setTimeout(function(){
		clearTimeout(timer);
		var token = getSessionStorage("token");
		if ( token != "" || token != "undefined" || token == null) {
			//请求云信账号
			getNeteaseAccount(token);
		} else {
			//请求登录失败，重新请求
			dologin(form);
		}
	}, 500);

	return false
}

//获取网易云信账号
function getNeteaseAccount(token) {
	var req = {
		url: "/v1/netease/user/account",
		method: "GET",
		header: {
			"Api-Accept":"application/futurebots.cn+json;version=1",
			"device":"html",
			"token": token
		},
		success: function(res) {
			if (res.code == 200) {
				setSessionStorage("account", res.data.accid);
				//覆盖用户token
				setSessionStorage("token", res.data.token);

				window.location.href = "index.html";
			} else {
				alert(res.message);
			}
		},
		error: function(err) {
			console.log("网络错误:", err);
		}
	}
	ajaxGet(req);
}