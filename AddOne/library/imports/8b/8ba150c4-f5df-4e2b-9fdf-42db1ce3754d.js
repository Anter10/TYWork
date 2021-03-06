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
        tywx.publicwx = true;
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
    }
    var score = tywx.Util.getItemFromLocalStorage("maxscore", 0);
    if (score) {
        console.log("score = " + score);
        this.gameScore.string = score;
    } else {
        console.log("当前分数不存在");
    }
}), _defineProperty(_cc$Class, "showPlayMethod", function showPlayMethod() {
    // tywx.AdManager.showAd(cc.p(333,160))
    if (tywx.publicwx) {
        var image = wx.createImage();
        var self = this;
        image.src = "https://wx.qlogo.cn/mmopen/vi_32/U8XaLGeVibpjlibN0cJGiah2TTKarQdEI0QazibrrrsNibhMC2TrmscXQdfGEF4icW0B6A7TjjheTWpQiaD8wNhp3qZQQ/132";
        image.onload = function (event) {
            try {
                var texture = new cc.Texture2D();
                texture.initWithElement(image);
                texture.handleLoadedTexture();
                self.icon.spriteFrame = new cc.SpriteFrame(texture);
                // console.log(avatarUrl + " ni/ "+sprite.node.width + " == "+texture.width +" " + sprite.node.y)
            } catch (e) {
                cc.log("图片加载失败");
            }
        };
    }
}), _defineProperty(_cc$Class, "showPhbView", function showPhbView() {
    if (this.showPhb) {
        this.phbSprite.node.active = false;
        this.showPhb = false;
    } else {
        this.phbSprite.node.active = true;
        this.showPhb = true;
    }
    if (tywx.publicwx) {
        wx.postMessage({
            method: 1,
            MAIN_MENU_NUM: "x1"
        });
    }
}), _defineProperty(_cc$Class, "loadFinishCallBack", function loadFinishCallBack() {
    this.node.destroy();
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