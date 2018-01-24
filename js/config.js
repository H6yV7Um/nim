/*
	配置文件
	20180122-oneminuter
*/
var Config = {
	appKey: "9a2e16abdec605acddba4c1962fea0da",
	account: "b72b4ce7db2cfd46de0d08d18ea6b225",
	token: "5eda68dbdb8f227de47d82cc950b89b7",
	//王艳丹
	// roomid:"20805960",
	//戴鹏
	// roomid:"20788912",
	//朱靳
	// roomid:"20926447",
	//王天
	// roomid:"20716567",
	//方志坚
	// roomid:"20936126"
	//何英源
	// roomid:"20876173"
}

//设置sessionStorage
function setSessionStorage(key, value) {
	sessionStorage.setItem(key,value);
}

//获取sessionStorage
function getSessionStorage(key) {
	return sessionStorage.getItem(key);
}