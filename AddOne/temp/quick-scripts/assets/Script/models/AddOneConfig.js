(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/models/AddOneConfig.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c2dbJUdiZLmIzaqT+PBih/', 'AddOneConfig', __filename);
// Script/models/AddOneConfig.js

"use strict";

/*
   游戏配置文件:
   主要配置游戏逻辑和界面上的一些常量。
   created by gyc on 2018-08-01.
*/
var config = {
	// 每个格子的大小（宽 高）
	gezi_size: 132,
	// 每个格子+间隙的大小 
	gezi_pitch: 140,
	// 格子移动一个的时间
	move_time: 0.3,
	// 宽
	swidth: 720,
	//高
	sheight: 1280,
	// 玩家最大体力
	maxphy_value: 5,
	// 公共格子数量 5 * 5
	geziNumber: 25,
	// 最少连接多少个可以消除
	minCanRemoveNumber: 3,
	//玩家得分基数
	baseScore: 10,
	// 最大复活次数
	maxrnum: 2,
	//格子距离底部多远
	marginbottom: 270,
	// 即将超越对手多少分显示相应图标
	thanfriendScore: 30,
	// 连接数在不同的值需要展示特定的效果
	lianjiEffects: {
		sgood: 3,
		cgood: 6,
		bgood: 10,
		maxgood: 15
	},
	// 体力显示的属性
	showphy_pros: {
		width: 130,
		height: 40,
		radius: 6,
		phy_num: 5,
		// 赤橙黄绿青蓝紫
		colors: [[255, 0, 0], [255, 165, 0], [255, 255, 0], [0, 255, 0], [0, 127, 255], [0, 0, 255], [139, 0, 255]]
	},
	// 格子颜色值(RGB)
	color_list: [[233, 85, 56], // 砖红色
	[255, 128, 64], // 浅砖红色
	[44, 175, 219], // 蓝色
	[165, 198, 31], // 草绿色
	[23, 177, 167], // 青色
	[0, 128, 0], // 深绿色
	[0, 0, 128], // 深蓝色
	[128, 0, 0], // 深红色
	[128, 64, 32], // 咖啡色
	[128, 0, 128], // 紫色
	[32, 32, 32] // 深黑色
	],
	// 当前的游戏状态
	gameState: {
		checkclick: 1, // 玩家点击格子的状态
		domove: 2, // 格子移动状态
		dodrop: 3, // 各自处于掉落状态
		waitclick: 4, // 等待点击状态
		gameover: 5, // 游戏结束状态
		usingitem: 6
	},

	// 游戏中用到的道具
	allitem: [{
		id: 1,
		name: "-1",
		png: "",
		num: 0,
		value: -1
	}, {
		id: 2,
		name: "+2",
		png: "",
		num: 0,
		value: 2
	}, {
		id: 3,
		name: "-2",
		png: "",
		num: 0,
		value: -2
	}, {
		id: 4,
		name: "满血",
		png: "",
		num: 0,
		value: 0
	}],
	celltilenumColors: [[205, 69, 40], // 砖红色
	[194, 52, 82], // 浅砖红色
	[8, 134, 177], // 蓝色
	[134, 43, 204], // 草绿色
	[76, 135, 1], // 青色
	[0, 129, 121], // 深绿色
	[16, 124, 190], // 深蓝色
	[182, 25, 178], // 深红色
	[171, 36, 183], // 咖啡色
	[182, 103, 0]]
};

module.exports = config;

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
        //# sourceMappingURL=AddOneConfig.js.map
        