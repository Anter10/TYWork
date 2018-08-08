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

    setShareData:function(){
        this.data = data;
    },

    shareMiniApp:function(){
        if(tywx.IsWechatPlatform()){
            window.wx.showShareMenu({withShareTicket: true});
            var msg = tywx.ShareInterface.getRandomOnShareAppMessageInfo();
            console.log("msg = "+JSON.stringify(msg));
            if(msg){
                tywx.ShareInterface.share(
                    msg.title,
                    msg.imageUrl,
                    msg.sharePointId,
                    msg.shareSchemeId,
                    (res) => {
                        console.log("分享成功后的数据"+JSON.stringify(res));
                        if (res.shareTickets != undefined && res.shareTickets.length > 0) {
                            window.wx.postMessage({
                                method: 2,
                                MAIN_MENU_NUM: "x1",
                                shareTicket: res.shareTickets[0]
                            });
                        }
                    },null,
                    function(data){
                        console.log("分享成功后的数2据"+JSON.stringify(data));
                    }
                );
           }
       }
       
    }

    // update (dt) {},
});
