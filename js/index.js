/*
  20180124
  author:oneminuter
*/
//切换聊天室
function changeRoom(roomid) {
    //如果当前连个聊天室，先退出当前聊天室
    if (roomid != data.chatroomId && data.chatroomConnectStatus) {
        // 断开聊天室
        chatroom.disconnect()
    }

    //判断链接状态，获取聊天室地址
    if (!data.nimConnectStatus) {
        var timer = setTimeout(function(){
            clearTimeout(timer);
            changeRoom(roomid);
        }, 2000);
    }

    //获取聊天室地址
    if (roomid != data.chatroomId){
        getChatroomAddress(roomid);
    }
}

//获取聊天室地址
function getChatroomAddress (roomid){
    nim.getChatroomAddress({
      chatroomId: roomid,
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
            initChatroom(roomid);
        }
    });
}

//登录或者退出
function loginAndlogout() {
    nim.disconnect();
    //清除数据
    sessionStorage.clear();
    //跳转到登录页
    window.location.href = "login.html";
}


var emNode = null;
//初始化表情
function initEmoji(){
    var that = this,
        emojiConfig = {
        'emojiList':emojiList,  //普通表情
        'width': 350,
        'height':300,
        'imgpath':'./images/',     
        'callback':function(result){        
            that.cbShowEmoji(result);
        }
    }
    emNode = new CEmojiEngine(document.querySelector("#emojiTag"),emojiConfig); 
}

function cbShowEmoji(data){
    var input = document.querySelector("#editText").value;
    document.querySelector("#editText").value = (input + data.emoji);
}

(function(){
    var page = {
        bind: function () {
            document.querySelector("#emoji").onclick = function() {
                var display = document.querySelector(".m-emoji-wrapper").style.display;
                if (display == "none" || display == "") {
                    document.querySelector(".m-emoji-wrapper").style.display = "block";
                }else{
                    document.querySelector(".m-emoji-wrapper").style.display = "none";
                }
            }
        }
    }

    initEmoji();
    page.bind();


})()