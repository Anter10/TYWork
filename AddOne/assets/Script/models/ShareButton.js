 /*
    游戏分享prefab
    游戏的分享操作的主要逻辑在这个module里面编写
    created by gyc on 2018-08-08.
*/

cc.Class({
    extends: cc.Component,

    properties: {
      
    },

      /*
        调用: 场景加载完成后的回调
        功能: 场景加载完成后的一些UI逻辑处理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    onLoad () {
        this.data = {};
    },
    /*
        调用: 组件开始调用的时候调用
        功能: 组件开始调用的时候的逻辑处理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    start () {

    },
    
    /*
        调用: 使用此model分享功能的时候 手动调用刷新分享的数据
        功能: 设置即将要分享的数据
        参数: [
            data: 分享的数据
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    setShareData:function(data){
        this.data = data;
    },

    /*
        调用: 使用此model分享功能的时候 
        功能: 手动设置分享成功后的回调函数
        参数: [
            successCall: 分享成功后的回调方法 类型Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setSuccessCall: function(successCall){
        this.successCallBack = successCall;
    },

     /*
        调用: 使用此model分享功能的时候 
        功能: 手动设置分享失败后的回调函数
        参数: [
            errorCall: 分享失败后的回调方法 类型Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setErrorCall: function(errorCall){
        this.successCallBack = errorCall;
    },
    


    /*
        调用: 使用此model分享功能的时候 
        功能: 给好友或者群分享小程序的相关信息
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    shareMiniApp:function(){
        var self = this;
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
                            // window.wx.postMessage({
                            //     method: 2,
                            //     MAIN_MENU_NUM: "x1",
                            //     shareTicket: res.shareTickets[0]
                            // });
                            if(self.successCall){
                                self.successCall(res);
                            }
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
