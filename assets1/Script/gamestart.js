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
        
    },

    ctor: function(){
        
    },

    
    onLoad:function(){
       
    },

      
    loadFinishCallBack:function(){
        this.node.destroy();
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