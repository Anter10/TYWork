(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/Effect.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ac62QVqmtLEaM3z/RAOb1S', 'Effect', __filename);
// Script/models/Effect.js

"use strict";

/*
    游戏的逻辑UI
    游戏的操作的主要逻辑在这个module里面编写
    created by gyc on 2018-08-01.
*/

// 倒入游戏涉及到的module
var config = require("AddOneConfig");

var Effect = cc.Class({
    name: "node",
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    /*
        调用: 节点加载完成后的回调
        功能: 节点加载完成后的一些UI逻辑处理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    onLoad: function onLoad() {
        tywx.Timer.setTimer(this, this.remove, 5);
        this.label.string = "0";
    },

    /*
        调用: 不需要控件的时候调用
        功能: 从内存中删除node
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    remove: function remove() {
        this.node.destroy();
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
    ctor: function ctor(num) {},

    /*
        调用: 每一帧都调用的逻辑。
        功能: 渲染当前的场景树
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    update: function update(dt) {}

});

module.exports = Effect;

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
        //# sourceMappingURL=Effect.js.map
        