"use strict";
cc._RF.push(module, '8ba15DE9d9OK5/fQtsc43VN', 'gamestart');
// Script/gamestart.js

"use strict";

var _cc$Class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
   游戏开始界面
   created by gyc on 2018-08-02.
   final changed time by gyc on  2018-08-03
*/
var config = require("AddOneConfig");
tywx.publicwx = false;
var gamestart = cc.Class((_cc$Class = {
    extends: cc.Component,
    properties: {
        startButton: {
            default: null,
            type: cc.Button
        },
        audioCtr: {
            default: null,
            type: cc.Button
        },
        gameScore: {
            default: null,
            type: cc.Label
        },
        historyLabel: {
            default: null,
            type: cc.Label
        },
        phb: {
            default: null,
            type: cc.Button
        },
        method: {
            default: null,
            type: cc.Button
        },
        phbSprite: {
            default: null,
            type: cc.Sprite
        },
        shareBtn: {
            default: null,
            type: cc.Node
        },
        groupBtn: {
            default: null,
            type: cc.Node
        },
        phbView: {
            default: null,
            type: cc.Node
        },
        icon: cc.Sprite

    },
    _updateSubDomainCanvas: function _updateSubDomainCanvas() {
        // let self = this;
        // if (!self.tex) {
        //     return;
        // }
        // openDataContext.postMessage({
        //     method:1,

        // });

    },
    start: function start() {
        //是否发布微信版本
        if (tywx.publicwx) {
            this.tex = new cc.Texture2D();
            window.sharedCanvas.width = 650;
            window.sharedCanvas.height = 560;
        }
        this.showPhb = false;
    }
}, _defineProperty(_cc$Class, "_updateSubDomainCanvas", function _updateSubDomainCanvas() {
    if (!this.tex) {
        return;
    }

    var openDataContext = wx.getOpenDataContext();
    var sharedCanvas = openDataContext.canvas;
    this.tex.initWithElement(sharedCanvas);
    this.tex.handleLoadedTexture();
    this.phbSprite.spriteFrame = new cc.SpriteFrame(this.tex);
}), _defineProperty(_cc$Class, "ctor", function ctor() {}), _defineProperty(_cc$Class, "update", function update(delayTime) {
    if (tywx.publicwx) {
        this._updateSubDomainCanvas();
    }
}), _defineProperty(_cc$Class, "onLoad", function onLoad() {
    if (tywx.publicwx) {
        window.wx.postMessage({
            method: 3
        });
        var msg = tywx.ShareInterface.getRandomOnShareAppMessageInfo();
        if (msg) {
            tywx.ShareInterface.setOnShareAppMessageInfo(msg.title, msg.imageUrl, msg.sharePointId, msg.shareSchemeId);
            console.log("当前获得的分享信息 = " + JSON.stringify(msg));
        }
        // 设置分享组件的回调和数据
        var shareComponent = this.shareBtn.getComponent("ShareButton");

        if (shareComponent) {
            shareComponent.setErrorCall(function (data) {
                console.log("分享失败后处理的回调函数 ", data);
            });

            shareComponent.setSuccessCall(function (data) {
                console.log("分享成功后处理的回调函数 ", data);
            });
        }

        // 设置群组排行榜组件的回调和数据
        var groupBtnComponent = this.groupBtn.getComponent("ShareButton");
        var self = this;
        if (groupBtnComponent) {
            groupBtnComponent.setShareGroupCall(function (data) {
                if (self.showPhb) {
                    self.phbView.node.active = false;
                    self.phbView = false;
                } else {
                    self.phbView.node.active = true;
                    self.phbView = true;
                }
                window.wx.postMessage({
                    method: 2,
                    MAIN_MENU_NUM: "x1",
                    shareTicket: data.shareTickets[0]
                });
            });

            groupBtnComponent.setErrorCall(function (data) {
                console.log("分享失败后处理的回调函数 ", data);
            });
        }
    }
    var score = tywx.Util.getItemFromLocalStorage("maxscore", 0);
    if (score != null) {
        this.gameScore.string = score;
        var length = (score + "").length;
        // 根据当前的分数来调整显示
        if (score < 10) {
            this.historyLabel.node.x = this.historyLabel.node.x + 50;
            this.gameScore.node.x = this.gameScore.node.x + 50;
        } else if (length > 5) {
            var tx = 25 + (length - 6) * 25;
            this.historyLabel.node.x = this.historyLabel.node.x - tx;
            this.gameScore.node.x = this.gameScore.node.x - tx;
        }
    } else {
        console.log("当前分数不存在");
    }

    // cc.loader.downloader.loadSubpackage("subone",function(error){
    //     if(error){
    //         console.log("下载分包失败");
    //         return;
    //     }
    //     console.log("下载分包成功");
    // });

}), _defineProperty(_cc$Class, "showPlayMethod", function showPlayMethod() {
    // tywx.AdManager.showAd(cc.p(333,160))
    if (tywx.publicwx) {
        // var image = wx.createImage();
        // var self = this
        // image.src = "https://wx.qlogo.cn/mmopen/vi_32/U8XaLGeVibpjlibN0cJGiah2TTKarQdEI0QazibrrrsNibhMC2TrmscXQdfGEF4icW0B6A7TjjheTWpQiaD8wNhp3qZQQ/132";
        // image.onload = (event) => {
        // try {
        //     let texture = new cc.Texture2D();
        //     texture.initWithElement(image);
        //     texture.handleLoadedTexture();
        //     self.icon.spriteFrame = new cc.SpriteFrame(texture);
        //     // console.log(avatarUrl + " ni/ "+sprite.node.width + " == "+texture.width +" " + sprite.node.y)
        // } catch (e) {
        //     cc.log("图片加载失败");
        // }
        // };
    }
}), _defineProperty(_cc$Class, "showFriendPhbView", function showFriendPhbView() {
    if (this.showPhb) {
        this.phbView.node.active = false;
        this.showPhb = false;
    } else {
        this.phbView.node.active = true;
        this.showPhb = true;
    }
    if (tywx.publicwx) {
        wx.postMessage({
            method: 1,
            MAIN_MENU_NUM: "x1"
        });
    }
}), _defineProperty(_cc$Class, "loadFinishCallBack", function loadFinishCallBack() {
    if (this.node) {
        this.node.destroy();
    }
}), _defineProperty(_cc$Class, "setScore", function setScore(score) {
    if (score != null) {
        this.gameScore.string = Math.abs(score);
    }
}), _defineProperty(_cc$Class, "startGame", function startGame() {
    cc.director.loadScene("gamemain", this.loadFinishCallBack);
}), _defineProperty(_cc$Class, "shareApp", function shareApp() {
    if (tywx.IsWechatPlatform()) {
        wx.shareAppMessage({
            title: "赶紧加入我们，一起愉快的玩耍吧...",
            imageUrl: "https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/d68bced2b5c4b7dcb6b73838383d02.jpg?20180808115403"
        });
    }
}), _cc$Class));

cc._RF.pop();