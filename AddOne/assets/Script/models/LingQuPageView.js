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
        pagePrefab:{
            default: null,
            type: cc.Prefab,
        },
        userItem:{
            default: null,
            type: cc.Prefab,
        },
        pageView:{
            default: null,
            type: cc.PageView,
        },
        nextBut:{
            default: null,
            type: cc.Sprite,
        },
        upBut:{
            default: null,
            type: cc.Sprite,
        },
    },
 
    onLoad:function(){
       for(var pageIndex = 0; pageIndex < 5; pageIndex ++){
           var page = cc.instantiate(this.pagePrefab);
           console.log("添加了新的view ");
         
           for(var hindex = 0; hindex < 6; hindex ++ ){
                var item = cc.instantiate(this.userItem);
                if(hindex < 3){
                   item.y = -120;
                   item.x = hindex * 215  - 215;
                }else{
                   item.y = 190;
                   item.x = (hindex - 3) * 215 - 215;
                }
                page.addChild(item);
           }
           this.pageView.addPage(page);
       }

       this.upBut.node.active = false;
    },

   
    //点击下一页
    nextPage:function(){
        var totalpage = this.pageView.getPages().length;
        var curindex = this.pageView.getCurrentPageIndex()
        if(curindex < totalpage){
           this.upBut.node.active = true;
           if(curindex == totalpage - 2){
              this.nextBut.node.active = false;
           }else{
              this.nextBut.node.active = true;
           }
           this.pageView.scrollToPage(curindex + 1, 0.2);
        }else{
           this.nextBut.node.active = false;
        }
    },

    //点击上一页
    upPage:function(){
        var totalpage = this.pageView.getPages().length;
        var curindex = this.pageView.getCurrentPageIndex()
        console.log("当前页面 = "+curindex);
        if(curindex > 0){
           this.nextBut.node.active = true;
           if(curindex == 1){
              this.upBut.node.active = false;
           }else{
              this.upBut.node.active = true;
           }
           this.pageView.scrollToPage(curindex - 1, 0.2);
        }else{
           this.upBut.node.active = false;
           this.nextBut.node.active = true;
        }
    },
    update:function(){
        if(this.pageView.getCurrentPageIndex() == 0){
           this.upBut.node.active = false;
        }else if(this.pageView.getCurrentPageIndex() == this.pageView.getPages().length - 1){
           this.nextBut.node.active = false;
        }else{
           this.upBut.node.active = true;
           this.nextBut.node.active = true;
        }
    }

});
