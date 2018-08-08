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
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.data = {};
    },

    start () {

    },

    setShareData:function(data){
        this.data = data;
    },

    shareMiniApp:function(){
        if(tywx.IsWechatPlatform()){
            wx.shareAppMessage({
                title: this.data.title != null ? this.data.title: "赶紧加入我们，一起愉快的玩耍吧...",
                imageUrl: this.data.imageUrl != null?this.data.imageUrl: "https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/d68bced2b5c4b7dcb6b73838383d02.jpg?20180808115403",
            });
       }
    }

    // update (dt) {},
});
