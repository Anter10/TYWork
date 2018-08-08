"use strict";
cc._RF.push(module, '2fada/8fPBHRZzD6uWmYAck', 'ShareButton');
// Script/models/ShareButton.js

"use strict";

/*
   游戏分享prefab
   游戏的分享操作的主要逻辑在这个module里面编写
   created by gyc on 2018-08-08.
*/

cc.Class({
    extends: cc.Component,

    properties: {},

    /*
      调用: 场景加载完成后的回调
      功能: 场景加载完成后的一些UI逻辑处理
      参数: [
          无
      ]
      返回值:[
          无
      ]
      思路: 系统自带
    */
    onLoad: function onLoad() {
        this.data = {};
    },

    /*
        调用: 组件开始调用的时候调用
        功能: 组件开始调用的时候的逻辑处理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    start: function start() {},


    /*
        调用: 使用此model分享功能的时候 手动调用刷新分享的数据
        功能: 设置即将要分享的数据
        参数: [
            data: 分享的数据
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    setShareData: function setShareData(data) {
        this.data = data;
    },

    /*
        调用: 使用此model分享功能的时候 
        功能: 手动设置分享成功后的回调函数
        参数: [
            successCall: 分享成功后的回调方法 类型Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setSuccessCall: function setSuccessCall(successCall) {
        this.successCallBack = successCall;
    },

    /*
       调用: 使用此model分享功能的时候 
       功能: 手动设置分享失败后的回调函数
       参数: [
           errorCall: 分享失败后的回调方法 类型Function
       ]
       返回值:[
           无
       ]
       思路: 逻辑需要
    */
    setErrorCall: function setErrorCall(errorCall) {
        this.errorCallBack = errorCall;
    },

    /*
        调用: 使用此model分享功能的时候 
        功能: 手动设置分享失败后的回调函数
        参数: [
            errorCall: 分享失败后的回调方法 类型Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setShareGroupCall: function setShareGroupCall(sgroupCall) {
        this.shareGroupCallBack = sgroupCall;
    },

    /*
        调用: 使用此model分享功能的时候 
        功能: 给好友或者群分享小程序的相关信息
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    shareMiniApp: function shareMiniApp() {
        var self = this;
        if (tywx.IsWechatPlatform()) {
            window.wx.showShareMenu({ withShareTicket: true });
            var msg = tywx.ShareInterface.getRandomOnShareAppMessageInfo();
            console.log("msg = " + JSON.stringify(msg));
            if (msg) {
                tywx.ShareInterface.share(msg.title, msg.imageUrl, msg.sharePointId, msg.shareSchemeId, function (res) {
                    console.log("分享成功后的数据" + JSON.stringify(res));
                    if (res.shareTickets != undefined && res.shareTickets.length > 0) {
                        if (self.shareGroupCallBack) {
                            self.shareGroupCallBack(res);
                        }
                    }
                    if (self.successCallBack) {
                        self.successCallBack(res);
                    }
                }, null, function (data) {
                    console.log("分享成功后的数2据" + JSON.stringify(data));
                    if (this.errorCallBack) {
                        this.errorCallBack(data);
                    }
                });
            }
        }
    }

    // update (dt) {},
});

cc._RF.pop();