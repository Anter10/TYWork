"use strict";
cc._RF.push(module, 'e0904HU0H5Gw6cmRkovCza+', 'celltile');
// Script/models/celltile.js

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
        },
        number: {
            default: null,
            type: cc.Label
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
        this.number.string = num;
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();