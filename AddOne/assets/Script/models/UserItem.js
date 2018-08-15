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
       icon:{
           default:null,
           type:cc.Sprite,
       },
       numberLabel:{
           default:null,
           type:cc.Label,
       },
       itemIcon:{
          default:null,
          type:cc.Sprite,
       },
       yqBtn:{
          default:null,
          type:cc.Node,
       },
       ylqBtn:{
          default:null,
          type:cc.Sprite,
       },
        
    },
 
    onLoad () {
          // 设置邀请好友的回调
          
    },
    
    start () {

    },

    // 设置用户的数据并且刷新显示视图
    setData:function(data){
        this.data = data;
        this.flushView();
    },


    // 刷新视图
    flushView:function(){

    },

   
     
});
