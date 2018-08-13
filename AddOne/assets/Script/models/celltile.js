/*
   游戏中的道具class
   created by gyc on 2018-08-12.
*/ 
cc.Class({
    extends: cc.Component,

    properties: {
        // 格子显示的图片数组
        cells:{
            default: [],
            type: cc.Sprite
        },
        // 格子上显示的数字
        number:{
            default: null,
            type: cc.Label
        },
         // 格子上显示的数字
        hide:{
            default: null,
            type: cc.Label
        }

    },

    /*
        调用: 格子数字变化的时候调用
        功能: 刷新格子的显示
        参数: [
            data: 道具的当前数据 type:{}
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    visByNum:function(num){
        for(var i = 0; i < this.cells.length; i++){
            if(i == num - 1){
                this.cells[i].node.active = true;
            }else{
                this.cells[i].node.active = false;
            }
        }  
        this.number.string = num;
        this.hide.string = num;
        // 设置字体的颜色
    },

    /*
        调用: 格子数字变化的时候调用
        功能: 刷新格子显示的数字颜色
        参数: [
            color: 当前显示数字的颜色
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
   setColor:function(color){
      this.number.node.color = color;
      this.hide.node.color = color;
   },
    
});
