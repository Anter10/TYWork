(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/celltile.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e0904HU0H5Gw6cmRkovCza+', 'celltile', __filename);
// Script/models/celltile.js

"use strict";

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
        }

    },

    /*
        调用: 格子数字变化的时候调用
        功能: 刷新格子的显示
        参数: [
            data: 道具的当前数据 type:{}
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    visByNum: function visByNum(num) {
        for (var i = 0; i < this.cells.length; i++) {
            if (i == num - 1) {
                this.cells[i].node.active = true;
            } else {
                this.cells[i].node.active = false;
            }
        }
        this.number.string = num;
        this.hide.string = num;
        // 设置字体的颜色
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
    setColor: function setColor(color) {
        this.number.node.color = color;
        this.hide.node.color = color;
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
        //# sourceMappingURL=celltile.js.map
        