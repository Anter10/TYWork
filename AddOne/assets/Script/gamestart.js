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
    _updateSubDomainCanvas() {
        if (window.sharedCanvas != undefined && tywx.publicwx) {
            this.tex.initWithElement(window.sharedCanvas);
            this.tex.handleLoadedTexture();
            this.phbSprite.spriteFrame = new cc.SpriteFrame(this.tex);
        }
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
        this._updateSubDomainCanvas();   
       
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
    //    console.log("score = "+score)
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
        if(tywx.publicwx ){
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
});