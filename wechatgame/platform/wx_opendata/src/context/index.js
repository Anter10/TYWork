var cachedChallengeData = undefined;
var cachedClassicData = undefined;
var myUserData = undefined;
var Player_titile = ['初学乍练','初窥门径','略知一二','粗通皮毛','登堂入室','了然於胸','渐入佳境','驾轻就熟','豁然贯通',
    '青出於蓝','融会贯通','略有小成','心领神会','炉火纯青','出类拔萃','技冠群雄','出神入化','傲视群雄',
    '登峰造极','深不可测','惊世骇俗','绝代宗师','随心所欲','震古铄今','威镇寰宇','空前绝后','天人合一',
    '超凡入圣','返璞归真','破碎虚空'];

var PLAYER_TITLE2 = [
    [1, '青铜初级'],
    [2, '青铜中级'],
    [3, '青铜高级'],
    [3, '白银初级'],
    [3, '白银中级'],
    [3, '白银高级'],
    [4, '黄金初级'],
    [4, '黄金中级'],
    [4, '黄金高级'],
    [5, '铂金初级'],
    [5, '铂金中级'],
    [5, '铂金高级'],
    [6, '钻石初级'],
    [6, '钻石中级'],
    [6, '钻石高级'],
    [7, '星耀初级'],
    [7, '星耀中级'],
    [7, '星耀高级'],
    [10000000, '方块传奇']
];

wx.onMessage(function (data) {

    if (data.method === "getFriendCloudStorage") {
        var keys = data.types;
        wx.getFriendCloudStorage({
        keyList: keys,
        success: function (result) {
            //console.log('OpenRegion | getFriendCloudStorage | success | ' + JSON.stringify(result));
            console.log('OpenRegion | getFriendCloudStorage | success | ');
            var sharedCanvas = wx.getSharedCanvas();
            var context = sharedCanvas.getContext("2d");
            context[data.data.method_id] = {
                data : result.data,
                status: true
            }
        },
        fail: function (params) {
            var sharedCanvas = wx.getSharedCanvas();
            var context = sharedCanvas.getContext("2d");
            context[data.data.method_id] = {
                data : params,
                status: false
            }
        },
        complete: function () {
        }
    });
    }

    if (data.method == "getUserInfo") {
        console.log("getUserInfo 111");
        wx.getUserInfo({
            openIdList: ['selfOpenId'],
            lang: 'zh_CN',
            success: function(params) {
                console.log('OpenRegion | getUserInfo | success | ' + JSON.stringify(params));
                var sharedCanvas = wx.getSharedCanvas();
                var context = sharedCanvas.getContext("2d");
                context[data.data.method_id] = {
                    data : params.data,
                    status: true
                }
            },
            fail: function(params) {
                console.log('OpenRegion | getUserInfo | fail | ' + JSON.stringify(arguments));
                var sharedCanvas = wx.getSharedCanvas();
                var context = sharedCanvas.getContext("2d");
                context[data.data.method_id] = {
                    data : params,
                    status: false
                }
            }
        });
    }
    _drawWaitting();
    var command = data.method;
    if (myUserData == undefined) {
        wx.getUserInfo({
            openIdList: ['selfOpenId'],
            success: function (result) {
                myUserData = result.data[0];
                myUserData.nickname = myUserData.nickName;
                _handleDrawCommand(command);
            },
            fail: function () {
                _drawError();
            }
        })
    }
    else{
        setTimeout(function() {
            _handleDrawCommand(command);
        }, 1500);
    }
});

var _handleDrawCommand = function (command) {
    if (command == 'drawRankChallenge') {
        //_collectRankData('ELS_CURRENT_STAGE', function (succ, data) {
        _collectRankData('ELS_PKSTAR', function (succ, data) {
            if (succ) {
                cachedChallengeData = data;
                _drawWithData(command, data, true);
            }
            else {
                if (cachedChallengeData === undefined) {
                    _drawError();
                }
                else {
                    _drawWithData(command, cachedChallengeData, true);
                }
            }
        });
    }
    else if (command == 'drawRankClassic') {
        //_collectRankData('ELS_CURRENT_CLASSIC_SCORE', function (succ, data) {
        _collectRankData('ELS_CURRENT_STAGE2', function (succ, data) {
            if (succ) {
                cachedClassicData = data;
                _drawWithData(command, data, false);
            }
            else {
                if (cachedClassicData === undefined) {
                    _drawError();
                }
                else {
                    _drawWithData(command, cachedClassicData, false);
                }
            }
        });
    }
};

var _getPKStarLevel = function (star) {
        if(!star) return [0, 0];
        var len = PLAYER_TITLE2.length;
        var startotal=0, star_level=0, cur_star=0;
        for(var i=0; i<len; i++){
            var starnum = PLAYER_TITLE2[i][0];
            startotal+=starnum;
            if(startotal>=star){
                star_level = i;
                break;
            }
        }
        cur_star = PLAYER_TITLE2[star_level][0] - (startotal-star);
        return [star_level, cur_star];
};


var _drawWithData = function (command, data, isChallenge) {

    var _isChallenge = isChallenge;
    data = data.filter(function (x) {
        return x.KVDataList.length == 1;
    });
    data.sort(function (lhr, rhr) {
        var lvalue = parseInt(lhr.KVDataList[0].value);
        if (isNaN(lvalue)) lvalue = 0;
        var rvalue = parseInt(rhr.KVDataList[0].value);
        if (isNaN(rvalue)) rvalue = 0;
        return rvalue - lvalue;
    });
    data.forEach(function (x, idx) {
        x.rank = idx + 1;
        x.value = parseInt(x.KVDataList[0].value);
        if (isNaN(x.value)) {
            x.value = 0;
        }
    });
    // 先画自己
    var me = undefined;
    for (var i = 0; i < data.length; i++) {
        if (_isMySelf(data[i], myUserData)) {
            me = data.splice(i, 1)[0];
        }
    }
    if (me == undefined) {
        me = {
            openid: myUserData.openId,
            nickname: myUserData.nickname,
            avatarUrl: myUserData.avatarUrl,
            KVDataList: [{
                key: command,
                value: '0'
            }],
            rank: '999+',
            value: 0
        };
    }
    data.unshift(me);

    var shareCanvas = wx.getSharedCanvas();
    var context = shareCanvas.getContext("2d");
    context.clearRect(0, 0, 510, 1890);

    var values = data.map(function (x) {
        return x.value;
    });
    console.log('_drawWithData => ' + command + ' => ' + JSON.stringify(values));

    //530*600
    context.font = "28px Arial";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.globalAlpha = 0.9;

    if (data && data.length > 0) {
        for (var idx = 0; idx < 21; idx++) {
            var baseHeight = idx * 90 + 45;
            if (idx % 2 == 0) {
                if (idx == 0) {
                    context.fillStyle = "#BEE8F5";
                } else {
                    context.fillStyle = "#BEE8F5";
                }
            } else {
                context.fillStyle = "#CEF6FD";
            }
            context.fillRect(0, baseHeight - 45, 530, 90);
            context.fillStyle = "#0083B9";
            if (idx < data.length) {
                //排行
                context.textAlign = "center";
                if (idx < 4) {
                    var image = wx.createImage();
                    image.toY = baseHeight - 28;
                    if (data[idx].rank == 1) {
                        image.src = "res/raw-assets/resources/ddz_rank_1.png";
                    }
                    else if (data[idx].rank == 2) {
                        image.src = "res/raw-assets/resources/ddz_rank_2.png";
                    }
                    else if (data[idx].rank == 3) {
                        image.src = "res/raw-assets/resources/ddz_rank_3.png";
                    }
                    else {
                        context.fillText(data[idx].rank, 40, baseHeight + 6);
                    }
                    image.onload = function (event) {
                        var img = event.target;
                        context.drawImage(img, 17, img.toY, 48, 55);
                    };
                } else {
                    context.fillText(data[idx].rank, 40, baseHeight + 6);
                }

                //头像
                var headImage = wx.createImage();
                headImage.toY = idx;
                if (data[idx].avatarUrl != "") {
                    headImage.src = data[idx].avatarUrl;
                } else {
                    headImage.src = "res/raw-assets/resources/ddz_avatar_bg.png";
                }
                headImage.onload = function (event) {

                    context.save(); // 保存当前ctx的状态

                    var img = event.target;
                    var r = 33;
                    var lineTop = img.toY * 90 + 45 - r;

                    //context.arc(73 + r, lineTop + r,r,  0, 360); //画出圆
                    //context.clip(); //裁剪上面的圆形

                    context.drawImage(img, 73, lineTop, r * 2, r * 2);  // 在刚刚裁剪的园上画图
                    context.restore(); // 还原状态

                    var beforeImage = wx.createImage();
                    beforeImage.lineTop = lineTop;
                    if (img.toY == 0) {
                        beforeImage.src = "res/raw-assets/resources/ddz_avatar_03.png";
                    } else if (img.toY % 2 == 0) {
                        beforeImage.src = "res/raw-assets/resources/ddz_avatar_02.png";
                    } else {
                        beforeImage.src = "res/raw-assets/resources/ddz_avatar_01.png";
                    }
                    // beforeImage.onload = function (event) {
                    //     var image = event.target;
                    //     context.drawImage(image, 73, image.lineTop, r * 2, r * 2);
                    // }
                };

                //昵称
                context.textAlign = "left";
                context.fillText(stringSlice(data[idx].nickname, 10), 186, baseHeight + 6);

                //总奖金
                context.textAlign = "right";

                var _titile = '';
                var _s = data[idx].value.toString();
                if(_isChallenge){
                    var l = _getPKStarLevel(parseInt(_s));
                    _titile = PLAYER_TITLE2[l[0]][1];

                    if(parseInt(_s) < 10){
                        _s = '0' + _s;
                    }

                    _s = _titile;

                }

                context.fillText('' + _s, 480, baseHeight + 6);
            } else {
                context.textAlign = "center";
                context.fillText(idx + 1, 40, baseHeight + 6);
                context.textAlign = "left";
                context.fillText("虚位以待", 186, baseHeight + 6);
            }
        }
    }
    context.globalAlpha = 1;
};

var _drawError = function () {

};

var _drawWaitting = function () {
    var shareCanvas = wx.getSharedCanvas();
    var context = shareCanvas.getContext("2d");
    context.clearRect(0,0,530,1890);
    context.fillStyle="#CEF6FD";
    context.fillRect(0,0,530,1890);
    context.font="28px Arial";
    context.fillStyle="#0083B9";
    context.textAlign="center";
    context.fillText("加载中...",265,350);
};

var _collectRankData = function (key, onDataCallback) {
    wx.getFriendCloudStorage({
        keyList: [key],
        success: function (result) {
            var data = result.data;
            onDataCallback(true, data);
        },
        fail: function () {
            onDataCallback(false, data);
        },
        complete: function () {
        }
    });
};

var _isMySelf = function (lhr, rhr) {
    return lhr.nickname == rhr.nickname && lhr.avatarUrl == rhr.avatarUrl;
};


//先算出整个字符串的长度，并获得第length - 2个字符串的位置，给".."留2个位置
var stringSlice = function (str, length) {
    if (!str) {
        return str;
    }
    var len = 0;
    var tmp = 0;
    var s;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            tmp += 1;
        } else { // 如果是中文则长度加2
            tmp += 2;
        }
        if (tmp <= length - 2) {
            len++;
        }
    }
    if (tmp <= length) {
        s = str.slice(0);
    } else {
        s = str.slice(0, len);
        s += "..";
    }
    return s;
};
