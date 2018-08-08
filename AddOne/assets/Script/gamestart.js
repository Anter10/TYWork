/*
   游戏开始界面
   created by gyc on 2018-08-02.
   final changed time by gyc on  2018-08-03
*/
var config = require("AddOneConfig")
 
var gamestart = cc.Class({
    extends: cc.Component,
    properties:{
        startButton:{
            default:null,
            type: cc.Button,
        },
        audioCtr:{
            default:null,
            type: cc.Button,
        },
        gameScore:{
            default: null,
            type: cc.Label,
        },
        phb:{
            default: null,
            type: cc.Button,
        },
        method:{
            default: null,
            type: cc.Button,
        },
        phbSprite:{
            default: null,
            type:cc.Sprite,
        },
        icon:cc.Sprite,
       
    },
    _updateSubDomainCanvas () {
        // let self = this;
        // if (!self.tex) {
        //     return;
        // }
        // openDataContext.postMessage({
        //     method:1,

        // });
         
    },
    start () {
        if(tywx.publicwx){
            this.tex = new cc.Texture2D();
            window.sharedCanvas.width = 650;
            window.sharedCanvas.height = 560;
        }
        this.showPhb = false;
    },

    // 刷新子域的纹理
    _updateSubDomainCanvas: function() {
        if (!this.tex) {
            return;
        }
    
        var openDataContext = wx.getOpenDataContext();
        var sharedCanvas = openDataContext.canvas;
        this.tex.initWithElement(sharedCanvas);
        this.tex.handleLoadedTexture();
        this.phbSprite.spriteFrame = new cc.SpriteFrame(this.tex);
    },

    /*
        调用: 系统new 的时候调用。
        功能: 该类的构造函数 可用于自身变量的初始化
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    ctor: function(){
        
    },

    update: function(delayTime){
        if(tywx.publicwx){
           this._updateSubDomainCanvas();   
        }
       
    },

    /*
        调用: 界面加载完成后的回调。
        功能: 该类的构造函数 可用于自身变量的初始化
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    onLoad:function(){
       if(tywx.publicwx){
            window.wx.postMessage({
                method: 3,
            });
       }
       var score = tywx.Util.getItemFromLocalStorage("maxscore",0); 
       if(score){
            console.log("score = "+score)
            this.gameScore.string = score;
        }else{
            console.log("当前分数不存在")
        }
       
    },

    /*
        调用: 点击游戏帮助的时候调用
        功能: 展示游戏玩法
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏需要
    */

    showPlayMethod:function(){
        if(tywx.publicwx){
            var image = wx.createImage();
            var self = this
            image.src = "https://wx.qlogo.cn/mmopen/vi_32/U8XaLGeVibpjlibN0cJGiah2TTKarQdEI0QazibrrrsNibhMC2TrmscXQdfGEF4icW0B6A7TjjheTWpQiaD8wNhp3qZQQ/132";
            image.onload = (event) => {
            try {
                let texture = new cc.Texture2D();
                texture.initWithElement(image);
                texture.handleLoadedTexture();
                self.icon.spriteFrame = new cc.SpriteFrame(texture);
                // console.log(avatarUrl + " ni/ "+sprite.node.width + " == "+texture.width +" " + sprite.node.y)
            } catch (e) {
                cc.log("图片加载失败");
            }
            };
         }
    },

    /*
        调用: 点击排行榜的时候调用
        功能: 展示玩家微信好友在游戏中的排名
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏需要
    */
    showPhbView: function(){
        if(this.showPhb){
            this.phbSprite.node.active = false;
            this.showPhb = false;
        }else{
            this.phbSprite.node.active = true;
            this.showPhb = true;
        }
        if(tywx.publicwx){
            wx.postMessage({
                method: 1,
                MAIN_MENU_NUM: "x1",
            });
            
        }
    },

    /*
        调用: 进入游戏的时候调用
        功能: 清除当前界面占用的内存
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏需要
    */
    loadFinishCallBack:function(){
         this.node.destroy();
    },
   
     /*
        调用: 进入小游戏的时候开始调用
        功能: 显示玩家的最高得分
        参数: [
            score: 玩家当前的最高得分
        ]
        返回值:[
            无
        ]
        思路: 游戏需要
    */
    setScore:function(score){
        if(score != null){
           this.gameScore.string = Math.abs(score);
        }
    },
    /*
        调用: 点击开始游戏的时候调用
        功能: 进入游戏界面
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏需要
    */
    startGame:function(){
       cc.director.loadScene("gamemain", this.loadFinishCallBack);
       
    },

    /*

    */
    shareApp: function(){
       if(tywx.IsWechatPlatform()){
            wx.shareAppMessage({
                title:"赶紧加入我们，一起愉快的玩耍吧...",
                imageUrl:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/d68bced2b5c4b7dcb6b73838383d02.jpg?20180808115403",
            });
       }
    }

});