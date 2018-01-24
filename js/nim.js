var data = {}

// 注意这里, 引入的 SDK 文件不一样的话, 你可能需要使用 SDK.NIM.getInstance 来调用接口
var nim = SDK.NIM.getInstance({
    // debug: true,
    appKey: Config.appKey,
    account: Config.account,
    token: Config.token,
    onconnect: onConnect,
    onwillreconnect: onWillReconnect,
    ondisconnect: onDisconnect,
    onerror: onError
});
function onConnect() {
    console.log('连接成功');
    //设置连接成功标志
    data.nimConnectStatus = true;
}
function onWillReconnect(obj) {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    console.log('即将重连');
    console.log(obj.retryCount);
    console.log(obj.duration);
}
function onDisconnect(error) {
    // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    console.log('丢失连接');
    console.log(error);
    
    //设置连接成功标志
    data.nimConnectStatus = true;

    if (error) {
        switch (error.code) {
        // 账号或者密码错误, 请跳转到登录页面并提示错误
        case 302:
            break;
        // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
        case 417:
            break;
        // 被踢, 请提示错误后跳转到登录页面
        case 'kicked':
            break;
        default:
            break;
        }
    }
}
function onError(error) {
    console.log(error);
}

	