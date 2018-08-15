"use strict";
cc._RF.push(module, 'e0904HU0H5Gw6cmRkovCza+', 'celltile');
// Script/models/celltile.js

'use strict';

/*
   游戏中的道具class
   created by gyc on 2018-08-12.
*/
cc.Class({
    extends: cc.Component,

    properties: {
        // 格子显示的图片数组
        cells: {
            default: [],
            type: cc.Sprite
        },
        // 格子上显示的数字
        number: {
            default: null,
            type: cc.Label
        },
        // 格子上显示的数字
        hide: {
            default: null,
            type: cc.Label
        },
        touchEft: {
            default: null,
            type: cc.Sprite
        },

        touchEndEft: {
            default: null,
            type: cc.Node
        },

        hcEft: {
            default: null,
            type: cc.Node
        },
        newPlayerEf: {
            default: null,
            type: cc.Node
        },

        renumber: 0,
        clickcall: null
    },

    /*
        调用: 格子数字变化的时候调用
        功能: 刷新格子的显示
        参数: [
            num: 颜色值下标
            renum: 真正显示的数字
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    visByNum: function visByNum(num, renum) {
        for (var i = 0; i < this.cells.length; i++) {
            if (i == num - 1) {
                this.cells[i].node.active = true;
            } else {
                this.cells[i].node.active = false;
            }
        }
        this.number.string = renum;
        this.renumber = renum;
        this.hide.string = renum;
        // 设置字体的颜色
    },
    start: function start() {},


    /*
        调用: 格子数字变化的时候调用
        功能: 刷新格子显示的数字颜色
        参数: [
            color: 当前显示数字的颜色
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setColor: function setColor(color) {
        this.number.node.color = color;
        this.hide.node.color = color;
    },

    /*
         调用: 格子数字变化的时候调用
         功能: 刷新格子显示的数字颜色
         参数: [
             color: 当前显示数字的颜色
         ]
         返回值:[
             无
         ]
         思路: 逻辑需要
     */
    setClickCall: function setClickCall(clickcall) {
        this.clickcall = clickcall;
    },

    getReNumber: function getReNumber() {
        return this.renumber;
    },

    onLoad: function onLoad() {
        // 设置成屏蔽层
        var self = this;

        this.node.on('touchstart', function (event) {
            self.touchEft.node.active = true;
            return false;
        });

        this.node.on('touchend', function (event) {
            self.touchEft.node.active = false;
            self.playTouchEndEff();
            if (self.clickcall != null) {
                self.clickcall();
            }
        });

        this.node.on('touchcancel', function (event) {
            self.touchEft.node.active = false;
        });
    },


    // 播放触摸结束后的动画
    playTouchEndEff: function playTouchEndEff() {
        var anim = this.touchEndEft.getComponent(cc.Animation);
        anim.play("yuan_dh");
    },

    // 播放触摸结束后的动画
    playZhEff: function playZhEff() {
        console.log("播放合成动画了吗");
        var anim = this.hcEft.getComponent(cc.Animation);
        anim.play("yindao_hebing");
    },

    // 播放触摸结束后的动画
    playNewPlayerEff: function playNewPlayerEff() {
        console.log("播放合成动画了吗");
        this.newPlayerEf.active = true;
        var anim = this.newPlayerEf.getComponent(cc.Animation);
        anim.play("yindao_suofang");
    }

});

cc._RF.pop();