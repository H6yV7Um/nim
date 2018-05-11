/*
  20180124
  author:oneminuter
*/

// 非匿名方式登录
var chatroom = null;
function initChatroom(roomid){
  console.log("初始化聊天室");

  document.querySelector(".messagePannel").innerHTML = "";
  var li = document.createElement("li");
  li.className = "divid_line";
  document.querySelector(".messagePannel").appendChild(li);

  chatroom = SDK.Chatroom.getInstance({
    appKey: Config.appKey,
    account: Config.account,
    token: Config.token,
    chatroomId: roomid,
    chatroomAddresses: data.chatroomIdAddress,
    onconnect: onChatroomConnect,
    onerror: onChatroomError,
    onwillreconnect: onChatroomWillReconnect,
    ondisconnect: onChatroomDisconnect,
    // 消息
    onmsgs: onChatroomMsgs
  });
} 
function onChatroomConnect(chatroom) {
  console.log('进入聊天室', chatroom);

  //设置聊天室连接状态
  data.chatroomConnectStatus = true;
  //在线人数
  data.chatroomOnlineMemberNum = chatroom.chatroom.onlineMemberNum;
  //直播房间名
  data.chatroomName = chatroom.chatroom.custom;
  //进入直播间的用户昵称
  data.usernick = chatroom.member.nick;
  //进入直播间的用户头像
  data.avatar = chatroom.member.avatar;
  //聊天室房间号
  data.chatroomId = chatroom.chatroom.id;
  //直播拉流地址
  data.broadcastUrl = chatroom.chatroom.broadcastUrl;

  //界面初始化
  init();
  //获取历史消息
  getHistoryMsgs(new Date().valueOf(), 100);
  //事件绑定
  bind();
}
function onChatroomWillReconnect(obj) {
  // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
  console.log('即将重连', obj);
}
function onChatroomDisconnect(error) {
  // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
  console.log('连接断开', error);

  //设置聊天室连接状态
  data.chatroomConnectStatus = true;

  if (error) {
    switch (error.code) {
    // 账号或者密码错误, 请跳转到登录页面并提示错误
    case 302:
      break;
    // 被踢, 请提示错误后跳转到登录页面
    case 'kicked':
      break;
    default:
      break;
    }
  }
}
function onChatroomError(error, obj) {
  console.log('发生错误', error, obj);
}
function onChatroomMsgs(msgs) {
  console.log('收到聊天室消息', msgs);
  for(var i = 0; i < msgs.length; i++) {
    switch(msgs[i].type) {
      //系统消息
      case "notification":
        doNotification(msgs[i]);
        break;
      case "text":
        buildTextMsg(msgs[i]);
        break;
      default:
        console.log("收到消息类型：", msgs[i].type, msgs[i]);
    }
  }
}

///////////////////////////////////////////////////////////////

//界面初始化
function init() {
  //初始化直播
  initPlayer()

  document.querySelector(".divid_line").style.display = "none";
  document.querySelector(".roomCustom").innerHTML = data.chatroomName;
  document.querySelector(".onlineNum").innerHTML = data.chatroomOnlineMemberNum;
  document.querySelector(".avater").querySelector("img").src = data.avatar;
  document.querySelector(".nick").innerHTML = data.usernick;
}

//事件绑定
function bind() {
  //发送按钮
  document.querySelector(".sendTextBtn").onclick = function () {
    sendText();
  }
  //键盘发送
  document.onkeyup = function(event) {
    if (event.keyCode == 13 && event.ctrlKey){
      sendText();
    }
  }

  //选择房间
  var analys = document.querySelectorAll(".roomList > li");
  for (var i = 0; i < analys.length; i++) {
    analys[i].onclick = function() {
      selectChatroom(this);
    }
  }
}

//发送文本消息
function sendText() {
  text = document.querySelector(".textContent").value;
  if (text.replace(/(^\s*)|(\s*$)/g, "") == "") {
    return;
  }

  var msg = chatroom.sendText({
    text: text,
    done: function (error, msg) {
      //绘制消息界面
      buildTextMsg(msg);
      //清空输入框
      document.querySelector(".textContent").value = "";
    }
  });
}

//系统消息处理
function doNotification(msg) {
  switch(msg.attach.type) {
    case "memberExit":
      refreshOnlineMemberNum(-1);
      break;
    case "memberEnter":
      refreshOnlineMemberNum(1);
      break;
    default:
      console.log("收到系统消息类型:", msg.attach, msg)
  }
}

//处理文本消息
function buildTextMsg(msg) {
  var li = document.createElement("li");
  li.className = msg.flow;
  if (msg.flow == "in") {
    li.innerHTML = ['<div class="avater">',
                      '<img src="' + msg.fromAvatar + '">',
                    '</div>',
                    '<span class="nick">' + msg.fromNick + '</span>',
                    '<span>' + formatTime(msg.time) + '</span>',
                    '<p>' + buildEmoji(msg.text) +'</p>'].join("");
  }else{
    li.innerHTML = ['<div class="avater">',
                      '<img src="' + msg.fromAvatar + '">',
                    '</div>',
                    '<span class="nick">' + msg.fromNick + '</span>',
                    '<span>' + formatTime(msg.time) + '</span> <br />',
                    '<p>' + buildEmoji(msg.text) +'</p>'].join("");
  }
  document.querySelector(".messagePannel").appendChild(li);
  li.scrollIntoView(true)
}

//刷新在线人数
function refreshOnlineMemberNum(num) {
  data.chatroomOnlineMemberNum += num;
  document.querySelector(".onlineNum").innerHTML = data.chatroomOnlineMemberNum;
}

//选择房间
function selectChatroom(li) {
  var analys = document.querySelectorAll(".roomList > li");
  for (var i = 0; i < analys.length; i++) {
    analys[i].className = "";
  }

  li.className = "selected";
}


//获取历史聊天记录
function getHistoryMsgs(timestamp, limit){
    chatroom.getHistoryMsgs({
        timetag: timestamp,
        limit: limit,
        msgTypes: ['text', 'image'],
        done: function(error, obj) {
            // console.log('获取聊天室历史' + (!error?'成功':'失败'), error, obj.msgs);
            if (error) {
              return;
            }

            for (var i = 0; i < obj.msgs.length; i++) {
              buildHHistoryMsg(obj.msgs[i]);
            }
        }
      })

    //滚动到最底一条数据视图
    var timer = setTimeout(function(){
      clearTimeout(timer);
      var lis = document.querySelectorAll(".messagePannel > li");
      document.querySelectorAll(".messagePannel > li")[lis.length - 2].scrollIntoView(true);
    }, 1000);
}

//构建历史消息ui
function buildHHistoryMsg(msg) {
  var li = document.createElement("li");
  li.className = msg.flow;
  if (msg.flow == "in") {
    li.innerHTML = ['<div class="avater">',
                      '<img src="' + msg.fromAvatar + '">',
                    '</div>',
                    '<span class="nick">' + msg.fromNick + '</span>',
                    '<span>' + formatTime(msg.time) + '</span>',
                    '<p>' + buildEmoji(msg.text) +'</p>'].join("");
  }else{
    li.innerHTML = ['<div class="avater">',
                      '<img src="' + msg.fromAvatar + '">',
                    '</div>',
                    '<span class="nick">' + msg.fromNick + '</span>',
                    '<span>' + formatTime(msg.time) + '</span> <br />',
                    '<p>' + buildEmoji(msg.text) +'</p>'].join("");
  }

  document.querySelector(".messagePannel").insertBefore(li, document.querySelectorAll(".messagePannel > li")[0]);
}

//初始化直播
function initPlayer() {
  //清楚原有的video
  var playerElement = document.querySelector(".prism-player");
  if (playerElement != null) {
    document.body.removeChild(playerElement);
  }
  //动态创建播放器，解决切换问题
  playerElement = document.createElement("div");
  playerElement.className = "prism-player";
  playerElement.id = "J_prismPlayer";
  document.body.insertBefore(playerElement, document.body.childNodes[0]);

  var urls = data.broadcastUrl.split(",");
  var source = "";
  for(var i = 0; i < urls.length; i++) {
    if (urls[i].indexOf('rtmp') != -1) {
      source = urls[i];
      break;
    }
  }
  var player = new Aliplayer({
            id: 'J_prismPlayer',
            autoplay: true,
            isLive: true,
            playsinline: true,
            controlBarVisibility: 'always',
            useH5Prism: true,
            useFlashPrism: false,
            x5_video_position: 'top',
            width: '75%',
            height:'100%',
            x5_type: 'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
            //支持播放地址播放,此播放优先级最高
            cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
            source : source,
            
            },function(player){
                console.log('播放器创建好了。')
           });
}
