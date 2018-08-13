"use strict";
cc._RF.push(module, '03e43B72wFB+b7QdTdRGE6w', 'celltile');
// Script/celltile.js

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
        cells: {
            default: [],
            type: cc.Sprite
        }
    },

    visByNum: function visByNum(num) {
        for (var i = 0; i < this.cells.length; i++) {
            if (i == num - 1) {
                this.cells[i].node.active = true;
            } else {
                this.cells[i].node.active = false;
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();