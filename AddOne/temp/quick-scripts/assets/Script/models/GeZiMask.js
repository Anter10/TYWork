(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/GeZiMask.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '822d8Kg5aNMzZtrXCJqyo4w', 'GeZiMask', __filename);
// Script/models/GeZiMask.js

"use strict";

/*
   用于路径搜索的地图mask
   created by gyc on 2018-08-01.
*/
module.exports = function (id, parent) {
    // maskID
    this.id = id;
    // mask的父容器
    this.parent = parent;
    // 某个指定的格子
    var g = this.parent.getAllgz()[id];
    // 显示的number
    this.num = g.num;
    // 格子的行
    this.x = this.id % 5;
    // 格子的列
    this.y = parseInt(this.id / 5);
    // 从那个格子找到自己
    this.from = -1;
    // 第几步找到自己
    this.step = 999;

    /*
        调用: 每次连接结束的时候调用
        功能: 重制mask的初始数据
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    this.reset = function () {
        var g = this.parent.getAllgz()[this.id];
        this.num = g.num;

        this.x = this.id % 5;
        this.y = parseInt(this.id / 5);

        this.from = -1;
        // 
        this.step = 999;
    };
};

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
        //# sourceMappingURL=GeZiMask.js.map
        