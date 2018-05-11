var page = {

	data: {
		live:{
			mengmeng:		'rtmp://live.ylteb.com/antlive/4b5bc55deded50e220fa3be7b9ee551b',
			guagua:			'rtmp://live.ylteb.com/antlive/53d8becb86073186679a35ce2173a736',
			dandan:			'rtmp://live.ylteb.com/antlive/59a86ce6260479c3e557153ae840c9ea',
			xixi:			'rtmp://live.ylteb.com/antlive/e90bcbcb99e495e292ac5a7d10eb286c',
			junjun:			'rtmp://live.ylteb.com/antlive/1de7a5fc266b18b6e86d912d9762aae3',
			wangtian:		'rtmp://live.ylteb.com/antlive/f892268513d42318f9cb2e01c1513156',
			fangzhijian:	'rtmp://live.ylteb.com/antlive/30344d9eeb4a4a6e0e5edd79911d444c',
			daipeng:		'rtmp://live.ylteb.com/antlive/52fc302a3649fd83b7150d26d057dad6',
			zhujin:			'rtmp://live.ylteb.com/antlive/cb9dcfe81a4fe1c61874300c9e992585'
		},
		reqUrl: {
			//请求直播间信息
			liveList: '/live/room/getlist',
			//发送消息
			sendMsg: '/live/msg/send',
			//获取聊天室消息
			msgList: '/live/msg/getlist',
		},
		protocol: 'http://',
		host: 'app.arnoldlabs.com',
		pathname: '/chatroom/antLive.html',
		uId: 'a1f5121e8fee25f516642471',
		liveId: 364,
		lastMId: 0, //初始MId
		joinNum: 0, //直播间人数
		liveInfo: [
			{
				status: 0, //第一条等于2的是正在直播
				liveId: 364,
				rtmpList: [
					{
						rtmp: '',
						name: '', //直播名字
						portraitUrl: '' //直播poster
					}
				],
			}
		],
	},

	controller: function(){
		page.init();
		page.bind();
		//获取直播列表信息
		page.getLiveList();
	},

	init: function(){
		//判断当前域名是否是蚂蚁的域名，不是的话，跳转到直播url
		var host = window.location.host;
		if (host != page.data.host) {
			window.location.href = page.data.protocol + page.data.host + page.data.pathname;
		}
	},

	//获取聊天室消息
	getChatMsg: function(){
		var obj = {
			url: page.getUrl('msgList'),
			method: 'get',
			data: {
				liveId: page.data.liveId,
				lastMId: page.data.lastMId,
				uId: page.data.uId
			},
			success: function(res){
				if (res.error.errno == 200) {
					//设置MId
					page.data.lastMId = res.lastMId;
					page.handlerMsg(res.msgList.msg);
				} else {
					console.log(res.error.usermsg);
				}
			},
			error: function(err) {
				console.log("请求失败：", err);
			}
		}
		ajaxGet(obj);
	},

	//处理聊天室消息
	handlerMsg: function(data){
		for(var i = 0; i < data.length; i++) {
			console.log(data[i]);
			var classname = "";
			switch(data[i].type) {
				case 1: //普通消息
					classname = "customerMsg";
					break;
				case 2: //横幅
					classname = "broadcastMsg";
					break;
				case 3: //盈利播报
					classname = "broadcastMsg";
					break;
				case 4: //系统消息
					classname = "systemMsg";
					break;
				case 7: //领取红包代金券
					classname = "voucherMsg";
					break;
				default:
			}

			var li = document.createElement("li");
			li.className = classname;
			li.innerHTML = ['<span>' + data[i].nickName + '</span>',
							'<p>' + data[i].content + (!data[i].profitNum ? '':('<span>' + data[i].profitNum + '<span>')) + '</p>'].join("");

			document.querySelector(".mssagePannel").appendChild(li);
			li.scrollIntoView();
		}
	},

	//请求直播间列表信息
	getLiveList: function() {
		var obj = {
			url: page.getUrl('liveList'),
			method: 'get',
			data:{
				uId: page.data.uId
			},
			success: function(res) {
				if(200 == res.error.errno) {
					//设置直播间信息
					page.setLiveInfo(res.liveList.live);
				} else {
					console.log(res.error.usermsg);
				}
			},
			error: function(err){
				console.log("请求失败：", err);
			}
		}

		ajaxGet(obj);
	},
	setLiveInfo: function(data){
		var isSetLiveId = false;
		for (var i = 0; i < data.length; i++) {
			var liveInfo = {
				status: data[i].status,
				liveId: data[i].liveId,
				rtmpList:[]
			}
			//设置liveId
			if (!isSetLiveId && data[i].status == 2) {
				page.data.liveId = data[i].liveId;
				isSetLiveId = true;
			}

			var rtmpList = [];
			for (var j = 0; j < data[i].rtmpList.rtmp.length; j++) {
				var rtmp = {
					rtmp: data[i].rtmpList.rtmp[j].url,
					name: data[i].teacherList.teacher[j].name, //直播名字
					portraitUrl: data[i].teacherList.teacher[j].portraitUrl //直播poster
				}
				rtmpList.push(rtmp)
			}

			liveInfo.rtmpList = rtmpList;

			page.data.liveInfo.push(liveInfo);
		}
		//开始播放
		page.playLive();
		//获取聊天室消息
		page.getChatMsg();
		var timer = setInterval(function(){
			page.getChatMsg();
		}, 1000);
	},
	//播放直播
	playLive: function(){
		var liveInfos = page.data.liveInfo;
		for(var i = 0; i < liveInfos.length; i++) {
			if (liveInfos[i].status == 2) {
				for (var j = 0; j < liveInfos[i].rtmpList.length; j++) {
					var id = "";
					if (j == 0) {
						id = "leftPlayer"
					}else{
						id = "rightPlayer"
					}
					page.joinLive(id, j, liveInfos[i].rtmpList[j].rtmp);
				}
				break;
			}
		}
	},

	//获取请求地址
	getUrl: function(key) {
		return page.data.reqUrl[key];
	},

	bind: function(){
		//发送按钮
		document.querySelector(".sendTextBtn").onclick = function () {
		  page.sendText();
		}
		//键盘发送
		document.onkeyup = function(event) {
		  if (event.keyCode == 13 && event.ctrlKey){
		    page.sendText();
		  }
		}
	},

	/*
	id: 播放器容器 id
	pos： 0 左边， 1右边（其他都是右边） 
	source: 拉流地址
	*/
	joinLive: function(id, pos, source){
		var playerElement = null;
		if (0 == pos) {
			playerElement = document.querySelector(".prism-player.left_player");
		}else{
			playerElement = document.querySelector(".prism-player.right_player");
		}

	  	if (playerElement != null) {
	  	  document.querySelector(".live_container").removeChild(playerElement);
	  	}
		//动态创建播放器，解决切换问题
		playerElement = document.createElement("div");
		if (0 == pos) {
			playerElement.className = "prism-player left_player";
		} else {
			playerElement.className = "prism-player right_player";
		}
		playerElement.id = id;
		document.querySelector(".live_container").insertBefore(playerElement, document.querySelector(".live_container").childNodes[0]);

		//创建播放器
		page.newPlayer(id, source);
	},

	/*
	name: 播放器容器 id
	source： 拉流地址
	*/ 
	newPlayer: function(id, source){
		var player = new Aliplayer({
	        id: id,
	        autoplay: true,
	        isLive: true,
	        playsinline: true,
	        controlBarVisibility: 'always',
	        useH5Prism: true,
	        useFlashPrism: false,
	        x5_video_position: 'top',
	        width: '50%',
	        height:'100%',
	        x5_type: 'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
	        //支持播放地址播放,此播放优先级最高
	        cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
	        source : source,
	        },function(player){
	            console.log('播放器创建好了。')
		});
	},

	//发送聊天室消息
	sendText: function(){
		text = document.querySelector(".textContent").value;
		if (text.replace(/(^\s*)|(\s*$)/g, "") == "") {
		  return;
		}

		var obj = {
			url: page.getUrl('sendMsg'),
			method: 'get',
			data: {
				liveId: page.data.liveId,
				content: text,
				uId: page.data.uId
			},
			success: function(res) {
				console.log(res);
				document.querySelector(".textContent").value = "";
			},
			error: function(err) {
				console.log("请求失败：",err);
			}
		}

		ajaxGet(obj);
	},
}
page.controller();







