(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/DjItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '025741aQaVM6ri3/vUJrdf4', 'DjItem', __filename);
// Script/models/DjItem.js

"use strict";

/*
   游戏中的道具class
   created by gyc on 2018-08-09.
*/
cc.Class({
    extends: cc.Component,

    properties: {
        djName: {
            default: null,
            type: cc.Label
        },
        djNumber: {
            default: null,
            type: cc.Label
        },
        djIcon: {
            default: null,
            type: cc.Sprite
        }

    },

    /*
        调用: 道具数据变化时
        功能: 设置道具的数据
        参数: [
            data: 道具的当前数据 type:{}
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setData: function setData(data) {
        this.data = data;
        this.flushView();
    },

    /*
        调用: 数据更新的时候调用
        功能: 刷新当前道具的显示视图
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushView: function flushView() {
        this.flushIcon();
        this.flushName();
        this.flushNumber();
    },

    /*
        调用: 手动调用
        功能: 得到道具当前的数据
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    getData: function getData() {
        return this.data;
    },

    /*
        调用: 点击道具
        功能: 点击道具展示道具的使用方法
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    showUse: function showUse() {
        if (this.useCallBack) {
            this.useCallBack();
        }
    },
    /*
         调用: 节点创建完成后手动调用
         功能: 设置点击道具的的回调
         参数: [
             clickcall: 点击道具的回调函数 type:Function
         ]
         返回值:[
             无
         ]
         思路: 逻辑需要
     */
    setUseCall: function setUseCall(useclickcall) {
        this.useCallBack = useclickcall;
    },

    /*
        调用: 点击道具
        功能: 点击道具回调的方法
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    clickCall: function clickCall() {
        if (this.clickcallBack) {
            this.clickcallBack();
        }
    },

    /*
        调用: 节点创建完成后手动调用
        功能: 设置点击道具的的回调
        参数: [
            clickcall: 点击道具的回调函数 type:Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setClickCall: function setClickCall(clickcall) {
        this.clickcallBack = clickcalll;
    },

    /*
        调用: 系统自动调用
        功能: 处理界面加载完成后的逻辑
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
        调用: 刷新节点的时候调用
        功能: 显示道具当前的数量
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushNumber: function flushNumber() {
        this.djNumber.string = self.data.name;
    },

    /*
         调用: 刷新节点的时候调用
         功能: 显示道具当前的名称
         参数: [
             无
         ]
         返回值:[
             无
         ]
         思路: 逻辑需要
     */
    flushName: function flushName() {
        this.djName.string = self.data.name;
    },

    /*
        调用: 刷新节点的时候调用
        功能: 显示道具当前的图标
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushIcon: function flushIcon() {
        this.djName.string = self.data.name;
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=DjItem.js.map
        