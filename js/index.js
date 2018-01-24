//获取聊天室地址
function getChatroomAddress (){
	nim.getChatroomAddress({
	  chatroomId: Config.roomid,
	  done: function (error, obj) {
			console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
			if (error) {
				console.log(error)
				var timer = setTimeout(function(){
					clearTimeout(timer);

					//重新获取聊天室地址
					getChatroomAddress();
				}, 3000)
			}

			//聊天室地址赋值
			data.chatroomIdAddress = obj.address;
			//初始化聊天室
			initChatroom();
		}
	});
}

	