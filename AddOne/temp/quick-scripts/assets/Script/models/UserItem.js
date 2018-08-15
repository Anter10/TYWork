(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/UserItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cc3acBdhIdH26KlcZPJvpBS', 'UserItem', __filename);
// Script/models/UserItem.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
   extends: cc.Component,

   properties: {
      icon: {
         default: null,
         type: cc.Sprite
      },
      numberLabel: {
         default: null,
         type: cc.Label
      },
      itemIcon: {
         default: null,
         type: cc.Sprite
      },
      yqBtn: {
         default: null,
         type: cc.Node
      },
      ylqBtn: {
         default: null,
         type: cc.Sprite
      }
   },

   onLoad: function onLoad() {},
   start: function start() {},


   // 设置用户的数据并且刷新显示视图
   setData: function setData(data) {
      this.data = data;
      this.flushView();
   },

   // 刷新视图
   flushView: function flushView() {}

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
        //# sourceMappingURL=UserItem.js.map
        