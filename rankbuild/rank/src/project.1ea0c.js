__require=function e(t,n,a){function o(r,c){if(!n[r]){if(!t[r]){var s=r.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}}var g=n[r]={exports:{}};t[r][0].call(g.exports,function(e){return o(t[r][1][e]||e)},g,g.exports,e,t,n,a)}return n[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<a.length;r++)o(a[r]);return o}({rankitem:[function(e,t,n){"use strict";cc._RF.push(t,"93486w69BJG5rxHNI3FISIF","rankitem"),cc.Class({extends:cc.Component,properties:{pmLabel:cc.Label,imageIcon:cc.Sprite,nickLabel:cc.Label,scoreLabel:cc.Label},updateData:function(e){this.data=e,this.updateView(this.data)},updateView:function(e){console.log("\u66f4\u65b0\u6570\u636e = "+JSON.stringify(e)),this.pmLabel.string=e.pm+1,this.nickLabel.string=this.stringSlice(e.nickname,8),this.scoreLabel.string=null==e.KVDataList[0]?0:e.KVDataList[0].value+"\u5206",this.createIcon(this.imageIcon,e.avatarUrl)},stringSlice:function(e,t){if(!e)return e;for(var n,a=0,o=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);(o+=r>=0&&r<=128?1:2)<=t-2&&a++}return o<=t?n=e.slice(0):(n=e.slice(0,a),n+=".."),n},createIcon:function(e,t){var n=e;try{var a=wx.createImage();a.src=t,a.onload=function(o){try{var i=new cc.Texture2D;i.initWithElement(a),i.handleLoadedTexture(),n.spriteFrame=new cc.SpriteFrame(i),console.log(t+" ni/ "+i.width+" == "+i.width+" "+e.node.y)}catch(e){cc.log("\u56fe\u7247\u52a0\u8f7d\u5931\u8d25")}}}catch(e){}},start:function(){}}),cc._RF.pop()},{}],ranklist:[function(e,t,n){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","ranklist");var a=1,o=2,i=3,r=4,c=5;cc.Class({extends:cc.Component,properties:{gameranklist:cc.ScrollView,showloading:cc.Label,rankItem:cc.Prefab,gamerank:cc.Node,titleLabel:cc.Label,content:cc.Node,friendmsd:cc.Node,nameLabel:cc.Label,scoreLabel:cc.Label,iconSprite:cc.Sprite},start:function(){var e=this;wx.onMessage(function(t){e.showloading.node.active=!0,console.log("\u5f53\u524d\u73a9\u5bb6\u7ed9\u5b50\u57df\u7684\u6570\u636e = "+JSON.stringify(t)),t.method==a?(e.titleLabel.string="  \u597d\u53cb\u6392\u884c\u699c",e.getFriendData()):t.method==o?(e.titleLabel.string="\u7fa4\u7ec4\u6392\u884c\u699c",e.getGroupFriendData(t.shareTicket)):t.method==i?e.getUserInfoData():t.method==r?e.submitScore(t.score):t.method==c&&e.storeFriends(t.score)})},submitScore:function(e){var t=this;wx.getUserCloudStorage({keyList:["x1"],success:function(n){console.log("setUserCloudStorage","success",n),t.showloading.node.active=!1,0!=n.KVDataList.length&&n.KVDataList[0].value>e||window.wx.setUserCloudStorage({KVDataList:[{key:"x1",value:""+e}],success:function(e){console.log("setUserCloudStorage","success",e)},fail:function(e){console.log("setUserCloudStorage","fail")},complete:function(e){console.log("setUserCloudStorage","ok")}})},fail:function(e){console.log("getUserCloudStorage","fail")},complete:function(e){console.log("getUserCloudStorage","ok")}})},getUserInfoData:function(){wx.getUserInfo({openIdList:["selfOpenId"],lang:"zh_CN",success:function(e){console.log(JSON.stringify(e));wx.getSharedCanvas().getContext("2d")},fail:function(e){console.log(JSON.stringify(arguments));wx.getSharedCanvas().getContext("2d")}})},getFriendData:function(e,t){var n=this,a=t,o=this,i=e;wx.getUserInfo({openIdList:["selfOpenId"],success:function(e){n.showloading.node.active=!1;e.data[0];wx.getFriendCloudStorage({keyList:["x1"],success:function(e){var t=e.data;if(t.sort(function(e,t){return 0==e.KVDataList.length&&0==t.KVDataList.length?0:0==e.KVDataList.length?1:0==t.KVDataList.length?-1:t.KVDataList[0].value-e.KVDataList[0].value}),null==i){o.gamerank.active=!0,o.friendmsd.active=!1,o.gameranklist.content.removeAllChildren();for(var r=0;r<t.length;r++){var c=t[r];c.pm=r;var s=cc.instantiate(n.rankItem);s.getComponent("rankitem").updateData(c),s.setPosition(0,-80*r-30),n.gameranklist.content.addChild(s,122)}}else{o.gamerank.active=!1,o.friendmsd.active=!1;for(var l=null,g=t.length-1;g>=0;g--){var u=t[g],d=null==u.KVDataList[0]?0:u.KVDataList[0].value;if(d>a){(l=u).score=d;break}}l&&(o.friendmsd.active=!0,o.nameLabel.string=l.nickname,o.scoreLabel.string=l.score,o.createIcon(o.iconSprite,l.avatarUrl),console.log("\u5237\u65b0\u6210\u529f"))}},fail:function(e){console.log("wx.getFriendCloudStorage fail",e),o.showloading.string="\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002"}})},fail:function(e){o.showloading.string="\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002"}})},setDataToLocalStorage:function(e,t){try{console.log("wx setStorage = "+wx.setStorage),wx&&wx.setStorage&&(window.wx.setStorage({key:e,data:t+""}),console.log("\u5b58\u50a8\u6570\u636e\u6210\u529f"+t))}catch(e){console.log("\u5b58\u50a8\u6570\u636e\u5931\u8d25","setItemToLocalStorage fail")}},storeFriends:function(e){this.getFriendData(!0,e)},getGroupFriendData:function(e){var t=this,n=this,a=e;n.friendmsd.active=!1,wx.getUserInfo({openIdList:["selfOpenId"],success:function(e){console.log("success",e.data);e.data[0];wx.getGroupCloudStorage({shareTicket:a,keyList:["x1"],success:function(e){console.log("\u7fa4\u7ec4\u6570\u636e = ",e);var a=e.data;a.sort(function(e,t){return 0==e.KVDataList.length&&0==t.KVDataList.length?0:0==e.KVDataList.length?1:0==t.KVDataList.length?-1:t.KVDataList[0].value-e.KVDataList[0].value}),t.showloading.node.active=!1,n.gameranklist.content.removeAllChildren();for(var o=0;o<a.length;o++){var i=a[o];i.pm=o;var r=cc.instantiate(t.rankItem);r.getComponent("rankitem").updateData(i),r.setPosition(0,-80*o-30),t.gameranklist.content.addChild(r,122)}},fail:function(e){console.log("\u5f97\u5230\u7fa4\u7ec4\u6570\u636e\u5931\u8d25",e)}})},fail:function(e){}})},createIcon:function(e,t){var n=e;try{var a=wx.createImage();a.src=t,a.onload=function(o){try{var i=new cc.Texture2D;i.initWithElement(a),i.handleLoadedTexture(),n.spriteFrame=new cc.SpriteFrame(i),console.log(t+" ni/ "+e.node.width+" == "+i.width+" "+e.node.y)}catch(e){cc.log("\u56fe\u7247\u52a0\u8f7d\u5931\u8d25")}}}catch(e){}}}),cc._RF.pop()},{}]},{},["rankitem","ranklist"]);