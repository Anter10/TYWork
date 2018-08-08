 /*
    展示微信好友的排行榜
    created by gyc on 2018-08-06.
    final changed by gyc on 2018-08-06;
*/

// 当前是否发布微信游戏
var CC_WECHATGAME = true;
var MAIN_MENU_NUM = "x1";
 
//  玩家发送给子域的数据类型
var PTypes={
    // 得到微信好友的信息
    friends:1,
    // 得到某个群的信息
    group:2,
    // 得到玩家的基础信息
    userinfo:3,
    // 提交当前的得分
    submitscore:4,
};

cc.Class({
    extends: cc.Component,
    properties: {
        // 排行榜的滚动scrollview
        gameranklist:cc.ScrollView,
        // 显示loading的文本label
        showloading:cc.Label,
        // 每个scrollview的Item
        rankItem:cc.Prefab,
        // scrollview的父节点
        gamerank:cc.Node,
        // scrollview的容器layout
        content:cc.Node,
    },
    
    // 游戏界面开始
    start () {
        let self = this;
        wx.onMessage(data => {
             self.showloading.node.active = true;
             console.log("当前玩家给子域的数据 = "+JSON.stringify(data));
             if(data.method == PTypes.friends){
               self.getFriendData();  
             }else if(data.method == PTypes.group){
               self.getGroupFriendData()
             }else if(data.method == PTypes.userinfo){
                self.getUserInfoData();
             }else if(data.method == PTypes.submitscore){
                self.submitScore(data.score);
             }
        });
    },
    
    
    //提交得分
    submitScore: function(score) {
        var self = this;
        if (CC_WECHATGAME) {
            wx.getUserCloudStorage({
                // 以key/value形式存储
                keyList: [MAIN_MENU_NUM],
                
                success: function (getres) {
                    self.showloading.node.active = false;
                    if (getres.KVDataList.length != 0) {
                        if (getres.KVDataList[0].value > score) {
                            return;
                        }
                    }
                    // 对用户托管数据进行写数据操作
                    window.wx.setUserCloudStorage({
                        KVDataList: [{key:MAIN_MENU_NUM, value: "" + score}],
                        success: function (res) {
                            console.log('setUserCloudStorage', 'success', res)
                        },
                        fail: function (res) {
                            console.log('setUserCloudStorage', 'fail')
                        },
                        complete: function (res) {
                            console.log('setUserCloudStorage', 'ok')
                        }
                    });
                },
                fail: function (res) {
                    console.log('getUserCloudStorage', 'fail')
                },
                complete: function (res) {
                    console.log('getUserCloudStorage', 'ok')
                }
            });
        } else {
            cc.log("提交得分:" + MAIN_MENU_NUM + " : " + score)
        }
    },
 
    // 得到玩家的基本信息
    getUserInfoData:function(){
        wx.getUserInfo({
            openIdList: ['selfOpenId'],
            lang: 'zh_CN',
            success: function(params) {
                console.log( JSON.stringify(params));
                var sharedCanvas = wx.getSharedCanvas();
                var context = sharedCanvas.getContext("2d");
                 
            },
            fail: function(params) {
                console.log( JSON.stringify(arguments));
                var sharedCanvas = wx.getSharedCanvas();
                var context = sharedCanvas.getContext("2d");
              
            }
        });
    },

    // 获得玩家的微信好友的数据
    getFriendData: function() {
        var self = this;
        if (CC_WECHATGAME) {
            wx.getUserInfo({
                openIdList: ['selfOpenId'],
                success: (userRes) => {
                    this.showloading.node.active = false;
                    console.log('success', userRes.data)
                    let userData = userRes.data[0];
                    //取出所有好友数据
                    wx.getFriendCloudStorage({
                        keyList: [MAIN_MENU_NUM],
                        success: res => {
                            let data = res.data;
                            console.log("微信好友的数据 = "+ JSON.stringify(data))
                            data.sort((a, b) => {
                                if (a.KVDataList.length == 0 && b.KVDataList.length == 0) {
                                    return 0;
                                }
                                if (a.KVDataList.length == 0) {
                                    return 1;
                                }
                                if (b.KVDataList.length == 0) {
                                    return -1;
                                }
                                return b.KVDataList[0].value - a.KVDataList[0].value;
                            });
                            self.gameranklist.content.removeAllChildren();
                            for (let i = 0; i < data.length; i++) {
                                var playerInfo = data[i];
                                playerInfo.pm = i;
                                var item = cc.instantiate(this.rankItem);
                                item.getComponent('rankitem').updateData(playerInfo);
                                item.setPosition(0, -90 * i - 30);
                                this.gameranklist.content.addChild(item,122);
                            }
                        },
                        fail: res => {
                            console.log("wx.getFriendCloudStorage fail", res);
                            self.showloading.string = "数据加载失败，请检测网络，谢谢。";
                        },
                    });
                },
                fail: (res) => {
                    self.showloading.string = "数据加载失败，请检测网络，谢谢。";
                }
            });
        }
    },

    // 得到玩家微信群组的数据
    getGroupFriendData: function(shareTicket) {
        if (CC_WECHATGAME) {
            wx.getUserInfo({
                openIdList: ['selfOpenId'],
                success: (userRes) => {
                    console.log('success', userRes.data)
                    let userData = userRes.data[0];
                    //取出所有好友数据
                    wx.getGroupCloudStorage({
                    shareTicket: shareTicket,
                    keyList: [MAIN_MENU_NUM],
                        success: res => {
                            console.log("wx.getGroupCloudStorage success", res);
                            this.loadingLabel.active = false;
                            let data = res.data;
                            data.sort((a, b) => {
                                if (a.KVDataList.length == 0 && b.KVDataList.length == 0) {
                                    return 0;
                                }
                                if (a.KVDataList.length == 0) {
                                    return 1;
                                }
                                if (b.KVDataList.length == 0) {
                                    return -1;
                                }
                                return b.KVDataList[0].value - a.KVDataList[0].value;
                            });
                           
                        },
                        fail: res => {
                            console.log("wx.getFriendCloudStorage fail", res);
                            this.loadingLabel.getComponent(cc.Label).string = "数据加载失败，请检测网络，谢谢。";
                        },
                    });
                },
                fail: (res) => {
                    // this.loadingLabel.getComponent(cc.Label).string = "数据加载失败，请检测网络，谢谢。";
                }
            });
        }
    },

});
