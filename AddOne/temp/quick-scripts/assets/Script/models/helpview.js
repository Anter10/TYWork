(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/helpview.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '61edepOxLJDaZxauIa8liqt', 'helpview', __filename);
// Script/models/helpview.js

"use strict";

/*
    每个格子的单元数据:
    created by gyc on 2018-08-014.
*/
var config = require("AddOneConfig");
cc.Class({
    extends: cc.Component,

    properties: {
        closeBtn: {
            default: null,
            type: cc.Sprite
        },
        startBtn: {
            default: null,
            type: cc.Sprite
        },
        cellBottom: {
            default: null,
            type: cc.Sprite
        },
        cellTile: {
            default: null,
            type: cc.Prefab
        },
        newGuideLabel: {
            default: null,
            type: cc.Label
        },
        allhelpCells: [],
        // 是否是在游戏里面弹出来的帮助 1是 0不是 
        isgame: 0,
        // 当前的引导步数
        curHelpNumber: 0,
        //当前点击的脚本插件
        curClickScript: null,
        // 格子的原始坐标
        curgzPos: [],
        // 当前步数的引导是否完成
        curGuidefinish: false
    },

    onLoad: function onLoad() {
        // 设置成屏蔽层
        this.node.on('touchstart', function (event) {
            return true;
        });

        this.allhelpdata = [3, 4, 5, 2, 1, 2];
        // 初始化道具
        for (var hindex = 0; hindex < this.allhelpdata.length; hindex++) {
            var item = cc.instantiate(this.cellTile);
            if (hindex < 3) {
                item.y = 80;
                item.x = hindex * 150 + 90;
            } else {
                item.y = 220;
                item.x = (hindex - 3) * 150 + 90;
            }
            this.curgzPos.push({ x: item.x, y: item.y });
            var tilescript = item.getComponent("celltile");
            var pngnum = this.allhelpdata[hindex];
            if (pngnum > 10) {
                pngnum = pngnum % 10;
            }
            tilescript.visByNum(pngnum, this.allhelpdata[hindex]);
            var colors = config.celltilenumColors[pngnum - 1];
            tilescript.setColor(new cc.color(colors[0], colors[1], colors[2], 255));
            if (hindex == 4) {
                var self = this;
                tilescript.playNewPlayerEff();
                this.curClickScript = tilescript;
                tilescript.setClickCall(function () {
                    self.newPlayerGuideCall();
                });
                this.cellBottom.node.addChild(item, 5000);
            } else {
                this.cellBottom.node.addChild(item, 120);
            }
            this.allhelpCells.push(item);
        }
    },

    // 更新格子
    updateAddGz: function updateAddGz(script, addnum) {
        var curnumber = script.getReNumber();
        curnumber = curnumber + 1 + addnum;
        console.log("当前的格子数值 = " + curnumber);
        script.visByNum(curnumber, curnumber);
        var colors = config.celltilenumColors[curnumber - 1];
        script.setColor(new cc.color(colors[0], colors[1], colors[2], 255));
    },

    // 设置点击产生的新手引导
    newPlayerGuideCall: function newPlayerGuideCall() {
        console.log("当前的引导步数 = " + this.curHelpNumber);
        var self = this;
        if (this.curHelpNumber == 0) {
            this.curHelpNumber = 1;
            this.updateAddGz(this.curClickScript, 0);
            var delay1 = cc.delayTime(0.5);
            var delay2 = cc.delayTime(0.3);
            var call1 = cc.callFunc(function () {
                var mv1 = cc.moveTo(0.2, cc.p(self.allhelpCells[4].x, self.allhelpCells[4].y));
                var mv2 = cc.moveTo(0.2, cc.p(self.allhelpCells[4].x, self.allhelpCells[4].y));
                self.allhelpCells[3].getComponent("celltile").node.runAction(mv1);
                self.allhelpCells[5].getComponent("celltile").node.runAction(mv2);
            }, this);

            var call2 = cc.callFunc(function () {
                self.updateAddGz(self.curClickScript, 0);
                self.allhelpCells[4].getComponent("celltile").playZhEff();
                self.allhelpCells[3].getComponent("celltile").node.x = self.curgzPos[3].x;
                self.allhelpCells[3].getComponent("celltile").node.y = self.curgzPos[3].y + 65;

                self.updateAddGz(self.allhelpCells[5].getComponent("celltile"), 1);
                this.newGuideLabel.string = "点击3";
                self.allhelpCells[5].getComponent("celltile").node.x = self.curgzPos[5].x;
                self.allhelpCells[5].getComponent("celltile").node.y = self.curgzPos[5].y + 65;
                var mv1 = cc.moveBy(0.2, cc.p(0, -65));
                var mv2 = cc.moveBy(0.2, cc.p(0, -65));
                self.allhelpCells[3].getComponent("celltile").node.runAction(mv1);
                self.allhelpCells[5].getComponent("celltile").node.runAction(mv2);
                this.curGuidefinish = true;
            }, this);
            var seq = cc.sequence(delay1, call1, delay2, call2);
            this.node.runAction(seq);
        } else if (this.curHelpNumber == 1 && this.curGuidefinish == true) {
            this.curGuidefinish = false;

            this.curHelpNumber = 2;
            this.updateAddGz(this.curClickScript, 0);
            var delay1 = cc.delayTime(0.5);
            var delay2 = cc.delayTime(0.3);
            var call1 = cc.callFunc(function () {
                var mv1 = cc.moveTo(0.15, cc.p(self.allhelpCells[4].x, self.allhelpCells[4].y));
                var mv2 = cc.moveTo(0.15, cc.p(self.allhelpCells[4].x, self.allhelpCells[4].y));
                self.allhelpCells[1].getComponent("celltile").node.runAction(mv1);
                self.allhelpCells[5].getComponent("celltile").node.runAction(mv2);
            }, this);

            var call2 = cc.callFunc(function () {
                self.updateAddGz(self.curClickScript, 0);
                self.updateAddGz(self.allhelpCells[2].getComponent("celltile"), -3);
                self.updateAddGz(self.allhelpCells[1].getComponent("celltile"), 2);
                self.curClickScript.playZhEff();
                var mv2 = cc.moveTo(0.15, cc.p(self.curgzPos[1].x, self.curgzPos[1].y));
                self.allhelpCells[4].getComponent("celltile").node.runAction(mv2);
                this.newGuideLabel.string = "点击5开始";
                self.allhelpCells[1].getComponent("celltile").node.x = self.curgzPos[4].x;
                self.allhelpCells[1].getComponent("celltile").node.y = self.curgzPos[4].y + 65;
                var mv3 = cc.moveTo(0.15, cc.p(self.curgzPos[4].x, self.curgzPos[4].y));
                self.allhelpCells[1].getComponent("celltile").node.runAction(mv3);

                self.allhelpCells[5].getComponent("celltile").node.x = self.curgzPos[5].x;
                self.allhelpCells[5].getComponent("celltile").node.y = self.curgzPos[5].y + 65;
                var mv3 = cc.moveTo(0.15, cc.p(self.curgzPos[5].x, self.curgzPos[5].y));
                self.allhelpCells[5].getComponent("celltile").node.runAction(mv3);
                this.curGuidefinish = true;
                this.startBtn.node.active = true;
                this.closeBtn.node.active = false;
            }, this);
            var seq = cc.sequence(delay1, call1, delay2, call2);
            this.node.runAction(seq);
        } else if (this.curHelpNumber == 2 && this.curGuidefinish == true) {
            cc.director.loadScene("gamemain");
        }
    },

    // 关闭
    close: function close() {
        if (this.closeCall) {
            this.closeCall();
        }
        if (this.isgame == 1) {
            this.node.active = false;
        }
    },

    // 关闭
    setCloseCall: function setCloseCall(cc) {
        this.closeCall = cc;
    },

    // 关闭
    setIsGame: function setIsGame(isgame) {
        this.isgame = isgame;
    },

    // 开始游戏
    startGame: function startGame() {
        if (this.isgame == 1) {
            this.node.active = false;
        } else {
            cc.director.loadScene("gamemain");
        }
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
        //# sourceMappingURL=helpview.js.map
        