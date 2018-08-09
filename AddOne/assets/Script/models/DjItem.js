/*
   游戏中的道具class
   created by gyc on 2018-08-09.
*/ 
cc.Class({
    extends: cc.Component,

    properties: {
        djName:{
            default:null,
            type:cc.Label,
        },
        djNumber:{
            default:null,
            type:cc.Label,
        },
        djIcon:{
            default:null,
            type:cc.Sprite,
        },
        
    },
   
    /*
        调用: 道具数据变化时
        功能: 设置道具的数据
        参数: [
            data: 道具的当前数据 type:{}
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setData:function(data){
        this.data = data;
        this.flushView();
    },

    /*
        调用: 数据更新的时候调用
        功能: 刷新当前道具的显示视图
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushView:function(){
       this.flushIcon();
       this.flushName();
       this.flushNumber();
    },

    /*
        调用: 手动调用
        功能: 得到道具当前的数据
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    getData:function(){
        return this.data;
    },
    
    /*
        调用: 点击道具
        功能: 点击道具展示道具的使用方法
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    showUse: function(){
        if(this.useCallBack){
            this.useCallBack()
        }
    },
   /*
        调用: 节点创建完成后手动调用
        功能: 设置点击道具的的回调
        参数: [
            clickcall: 点击道具的回调函数 type:Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setUseCall:function(useclickcall){
        this.useCallBack = useclickcall;
    },
    

    /*
        调用: 点击道具
        功能: 点击道具回调的方法
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    clickCall:function(){
        if(this.clickcallBack){
           this.clickcallBack()
        }
    },
   
    /*
        调用: 节点创建完成后手动调用
        功能: 设置点击道具的的回调
        参数: [
            clickcall: 点击道具的回调函数 type:Function
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    setClickCall:function(clickcall){
      this.clickcallBack = clickcalll;
    },
    
    /*
        调用: 系统自动调用
        功能: 处理界面加载完成后的逻辑
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
        调用: 刷新节点的时候调用
        功能: 显示道具当前的数量
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushNumber:function(){
        this.djNumber.string = self.data.name;
    },

   /*
        调用: 刷新节点的时候调用
        功能: 显示道具当前的名称
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushName:function(){
        this.djName.string = self.data.name;
    },

    /*
        调用: 刷新节点的时候调用
        功能: 显示道具当前的图标
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    flushIcon:function(){
        this.djName.string = self.data.name;
    },
  
 
    
});