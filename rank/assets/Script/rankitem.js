 /*
    排行榜上每个微信好友的基本信息显示
    created by gyc on 2018-08-06.
    final changed by gyc on 2018-08-06;
*/
han17168
cc.Class({
    extends: cc.Component,

    properties: {
        // 玩家在好友中的排名显示
        pmLabel:cc.Label,
        // 玩家的微信头像
        imageIcon:cc.Sprite,
        // 玩家的昵称
        nickLabel:cc.Label,
        // 玩家的积分显示
        scoreLabel:cc.Label,
        // 玩家的微信数据
        
    },
    
    /*
        调用: 更新数据data并且更新data产生的view刷新
        功能: 显示微信好友玩家的信息
        参数: [
           data: 微信好友的基础属性
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    updateData: function(data){
        this.data = data;
        this.updateView(this.data);
    },
   
    /*
        调用: 更新data的时候调用
        功能: 显示微信好友玩家的信息
        参数: [
           data: 微信好友的基础属性
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    updateView: function(data){
        console.log("更新数据 = "+JSON.stringify(data))
        this.pmLabel.string = data.pm + 1;
        this.nickLabel.string = data.nickname;
        this.scoreLabel.string = data.KVDataList[0] == null ? 0 : data.KVDataList[0].value;
        this.createIcon(this.imageIcon,data.avatarUrl);
    },

    /*
        调用: 显示玩家微信好友排行榜的时候显示
        功能: 创建玩家的微信头像
        参数: [
           avatarUrl: 玩家微信头像的url
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    createIcon: function(sprite, avatarUrl) {
         var self = this;
         var tsp = sprite;
         try {
             var image = wx.createImage();
             image.src = avatarUrl;
             image.onload = (event) => {
                try {
                    let texture = new cc.Texture2D();
                    texture.initWithElement(image);
                    texture.handleLoadedTexture();
                    tsp.spriteFrame = new cc.SpriteFrame(texture);
                     console.log(avatarUrl + " ni/ "+sprite.node.width + " == "+texture.width +" " + sprite.node.y)
                } catch (e) {
                    cc.log("图片加载失败");
                }
             };
             
             
         }catch (e) {
            
         }
 
        // console.log("加载图片2 = "+avatarUrl)
        // cc.loader.load(avatarUrl, function (err, tex) {
        //     tsp.spriteFrame = new cc.SpriteFrame(tex);
        //     console.log("加载图片 = "+err)
		// });
        
		
    },

  
    
    start () {
      
    },

    
});
