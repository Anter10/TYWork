require=function i(s,c,r){function l(e,t){if(!c[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var a=c[e]={exports:{}};s[e][0].call(a.exports,function(t){return l(s[e][1][t]||t)},a,a.exports,i,s,c,r)}return c[e].exports}for(var u="function"==typeof require&&require,t=0;t<r.length;t++)l(r[t]);return l}({rankitem:[function(t,e,n){"use strict";cc._RF.push(e,"93486w69BJG5rxHNI3FISIF","rankitem"),cc.Class({extends:cc.Component,properties:{pmLabel:cc.Label,imageIcon:cc.Sprite,nickLabel:cc.Label,scoreLabel:cc.Label},updateData:function(t){this.data=t,this.updateView(this.data)},updateView:function(t){console.log("更新数据 = "+JSON.stringify(t)),this.pmLabel.string=t.pm+1,this.nickLabel.string=t.nickname,this.scoreLabel.string=null==t.KVDataList[0]?0:t.KVDataList[0].value,this.createIcon(this.imageIcon,t.avatarUrl)},createIcon:function(n,o){var a=n;try{var i=wx.createImage();i.src=o,i.onload=function(t){try{var e=new cc.Texture2D;e.initWithElement(i),e.handleLoadedTexture(),a.spriteFrame=new cc.SpriteFrame(e),console.log(o+" ni/ "+n.node.width+" == "+e.width+" "+n.node.y)}catch(t){cc.log("图片加载失败")}}}catch(t){}},start:function(){}}),cc._RF.pop()},{}],ranklist:[function(t,e,n){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","ranklist");var o="x1",a=1,i=2,s=3,c=4;cc.Class({extends:cc.Component,properties:{gameranklist:cc.ScrollView,showloading:cc.Label,rankItem:cc.Prefab,gamerank:cc.Node,content:cc.Node},start:function(){var e=this;wx.onMessage(function(t){e.showloading.node.active=!0,console.log("当前玩家给子域的数据 = "+JSON.stringify(t)),t.method==a?e.getFriendData():t.method==i?e.getGroupFriendData():t.method==s?e.getUserInfoData():t.method==c&&e.submitScore(t.score)})},submitScore:function(e){var n=this;wx.getUserCloudStorage({keyList:[o],success:function(t){n.showloading.node.active=!1,0!=t.KVDataList.length&&t.KVDataList[0].value>e||window.wx.setUserCloudStorage({KVDataList:[{key:o,value:""+e}],success:function(t){console.log("setUserCloudStorage","success",t)},fail:function(t){console.log("setUserCloudStorage","fail")},complete:function(t){console.log("setUserCloudStorage","ok")}})},fail:function(t){console.log("getUserCloudStorage","fail")},complete:function(t){console.log("getUserCloudStorage","ok")}})},getUserInfoData:function(){wx.getUserInfo({openIdList:["selfOpenId"],lang:"zh_CN",success:function(t){console.log(JSON.stringify(t));wx.getSharedCanvas().getContext("2d")},fail:function(t){console.log(JSON.stringify(arguments));wx.getSharedCanvas().getContext("2d")}})},getFriendData:function(){var i=this,s=this;wx.getUserInfo({openIdList:["selfOpenId"],success:function(t){i.showloading.node.active=!1,console.log("success",t.data);t.data[0];wx.getFriendCloudStorage({keyList:[o],success:function(t){var e=t.data;console.log("微信好友的数据 = "+JSON.stringify(e)),e.sort(function(t,e){return 0==t.KVDataList.length&&0==e.KVDataList.length?0:0==t.KVDataList.length?1:0==e.KVDataList.length?-1:e.KVDataList[0].value-t.KVDataList[0].value}),s.gameranklist.content.removeAllChildren();for(var n=0;n<e.length;n++){var o=e[n];o.pm=n;var a=cc.instantiate(i.rankItem);a.getComponent("rankitem").updateData(o),a.setPosition(0,-90*n-30),i.gameranklist.content.addChild(a,122)}},fail:function(t){console.log("wx.getFriendCloudStorage fail",t),s.showloading.string="数据加载失败，请检测网络，谢谢。"}})},fail:function(t){s.showloading.string="数据加载失败，请检测网络，谢谢。"}})},getGroupFriendData:function(t){wx.getUserInfo({openIdList:["selfOpenId"],success:function(t){console.log("success",t.data);t.data[0]},fail:function(t){}})}}),cc._RF.pop()},{}]},{},["rankitem","ranklist"]);