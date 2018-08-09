/*
    游戏的逻辑UI
    游戏的操作的主要逻辑在这个module里面编写
    created by gyc on 2018-08-01.
*/

// 倒入游戏涉及到的module
var config = require("AddOneConfig")
var gezi   = require("GeZi")
var mask   = require("GeZiMask")


var gamemain = cc.Class({
    extends: cc.Component,
    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        num: {
            default: [],
            type: cc.Label
        },
        stopView: {
            default: null,
            type: cc.Node
        },
        stopButton: {
            default: null,
            type: cc.Node
        },
        GameOver: {
            default: null,
            type: cc.Label
        },
        effect:{
            default:null,
            type: cc.Prefab,
        },
        djitem:{
            default:null,
            type: cc.Prefab,
        },
        gameOut:{
            default:null,
            type:cc.Sprite,
        },
       
        // 游戏的背景
        bg:cc.Node, 
        // 点击+1的动画sprite        
        star:cc.Sprite, 
        // 组合+1的动画sprite    
        star1:cc.Sprite,    
        // 重新开始的按钮
        restart:cc.Button,  
        // 当前玩家得分
        score: 0,
        // 玩家当前体力 默认为最大值
        point:config.maxphy_value,   
        // 当前点击的块ID
        g_mask_samecnt:0,
        //点击的格子ID
        g_clickid:-1,
        //游戏状态-无，等待点击，移动，下落等
        gamestate:'null', 
        //游戏状态的计时
        gamestatetime:0,
        //当前最大值
        maxnum:5, 
        //此次点击产生的连击数
        lianjiNumber:1, 
        // 存放每个格子的数组
        g_gezi:[],
        // 存放每个mask的数组
        g_mask:[],
        // 玩家当前道具
        allitems:[],
        // 此时距离上次点击屏幕有多长时间
        curtimeawaypre:10,
        
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
    onLoad: function () {
        // 初始分数显示为0
        this.label.string = this.score;
        
        // 循环生成初始游戏
        for(var i=0;i<config.geziNumber;i++)
        {
            var node     = new cc.Node("node");
            var label    = node.addComponent(cc.Label);
            label.string = "";
            label.fontSize   = 64;
            label.lineHeight = 64;
            var color     = new cc.color(255,255,255,255);
            node.position = cc.p(0,0);
            node.color    = color;
            node.parent   = this.node;
            this.num.push(label);
            var tmp_g = new gezi(i,this);
            this.getAllgz().push(tmp_g);
            var tmp_m = new mask(i, this);
            this.getAllmask().push(tmp_m);
        }
        
        var self = this;
        // 游戏的点击逻辑
        this.node.on('touchend', function ( event ) {
            var mpos = event.touch.getLocation();
            self.touchEndCallback(mpos.x,mpos.y);
        });
        // 前一个产生的随机数
        this.prerandomnumber = 0;
        // 初始游戏
        this.initgame();
       
        var effect = cc.instantiate(this.effect);
        this.node.parent.addChild(effect);
        effect.x = 140;
        effect.y = 90;
       
    },
    

    /*
        调用: 一段时间没有点击屏幕后调用
        功能: 提示玩家点击某个方块可以消除
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    showTouchEveryTime:function(){
        
    },

    /*
        调用: 点击的时候调用
        功能: 点击方块产生特效
        参数: [
            touchpos: 当前触摸点的位置 type:{}
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    showTouchEffect:function(touchpos){
       
    },

    /*
        调用: 点击停止按钮的时候调用
        功能: 显示停止按钮控制的菜单
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
   showStopView:function(){
       this.stopView.node.active = !this.stopView.node.active ? true : false;
   },

    /*
        调用: 道具变化和游戏初始化的时候调用
        功能: 刷新道具显示
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    dealAllItems:function(){
        let allitems = JSON.parse(ywx.Util.getItemFromLocalStorage("allitems", "[]"));
        tywx.LOGD("道具数据 = ",allitems);
    },

    /*
        调用: 使用满血道具 或者分享游戏的时候调用
        功能: 复活游戏
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    recorverGame: function(){
        this.point = config.maxphy_value;
        this.gamestate = config.gameState.waitclick;
    },


    /*
        调用: 系统new 的时候调用。
        功能: 该类的构造函数 可用于自身变量的初始化
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 系统自带
    */
    ctor:function(){
       
    },
    
    /*
        调用: 在GeZi, GeZiData和该类中都有调用
        功能: 得到当前的格子容器
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 方便统一管理
    */
    getAllgz :function(){
        return this.g_gezi;
    },
    
    /*
        调用: 在GeZi, GeZiData和该类中都有调用
        功能: 得到当前的mask容器
        参数: [
            无
        ]
        返回值: [
            无
        ]
        思路: 方便统一管理
    */
    getAllmask: function(){
        return this.g_mask;
    },
    
     

    /*
        调用: 当点击屏幕的时候调用
        功能: 处理点击屏幕产生的逻辑(主要是判断出当前点击的位置在某个格子上)
        参数: [
            x: 点击的X坐标
            y: 点击点的Y坐标
        ]
        返回值:[
            无
        ]
        思路: 游戏和玩家的交互接口
    */
    touchEndCallback:function(x,y){
        // 判断当前的游戏状态是否为等待点击状态
        if(this.gamestate == config.gameState.waitclick){
            for(var i = 0; i < config.geziNumber; i++){
                // 根据点击的点 来判断当前点击在那个格子上面
                if( x > this.getAllgz()[i].posx && x  < (this.getAllgz()[i].posx + config.gezi_size) &&
                    y > this.getAllgz()[i].posy && y  < (this.getAllgz()[i].posy + config.gezi_size)){
                    var  num = this.getAllgz()[i].num + 1;
                    this.getAllgz()[i].setnum(num);
                    this.getAllgz()[i].settoblock();
                    this.getAllgz()[i].block.effectid   = 0;
                    this.getAllgz()[i].block.effecttime = 0.5;
                    if(num > this.maxnum){
                       this.maxnum = num;
                    }
                    // 记录下当前点击的格子 和切换当前的游戏状态为检查点击状态
                    this.g_clickid  = i;
                    this.gamestate  = config.gameState.checkclick;
                    // 在方块上产生点击特效
                    this.showTouchEffect(mpos);
                    // 终止此次点击的循环处理
                    break;
                }
            }
        }
    },
 
    /*
        调用: 每一帧都调用
        功能: 游戏的主体逻辑都在这个方法里面
        参数: [
            dt: 系统渲染的时间
        ]
        返回值:[
            无
        ]
        思路: 每一帧都调用适合处理这个游戏的玩法和操作  
    */
    update: function (dt) {
        this.label.string = this.score;
        this.drawPhyPoint();
        if(this.getAllgz().length == config.geziNumber) {
            for (var i = 0; i < config.geziNumber; i++) {
                this.getAllgz()[i].block.tickmove(dt);
                this.getAllgz()[i].block.tickeffect(dt,this.star,this.star1);
                this.getAllgz()[i].draw(this.bg.getComponent(cc.Graphics),this.num[i]);
            }
        }
        switch (this.gamestate){
            case config.gameState.checkclick:{ 
                this.resetAllMask();
                var sc = this.getAllgz()[this.g_clickid].num;
                this.lianjiNumber = 1;
                this.checkmaskbyid(this.g_clickid, 0);
                if (this.g_mask_samecnt >= config.minCanRemoveNumber) {
                    this.gamestate = config.gameState.domove;
                    this.gamestatetime = config.move_time;
                    this.score += config.baseScore * (this.g_mask_samecnt - 1) * sc;
                    for(var i = 0; i < config.geziNumber; i ++){
                        // 判断是否已经标记 
                        if(this.getAllmask()[i].step != 999 && this.getAllmask()[i].step != 0){
                            this.getAllgz()[i].block.speed_keep = config.gezi_pitch * this.getAllmask()[i].step / config.move_time;
                            this.getAllgz()[i].block.actiontime_keep = config.move_time / this.getAllmask()[i].step;
                            this.getAllgz()[i].block.id_keep = i;
                            this.getAllgz()[i].block.id_dest = this.getAllmask()[i].from;
                            this.getAllgz()[i].block.adjustmove();
                        }
                    }
                }else{
                    this.gamestate = config.gameState.waitclick;
                    this.point --;
                    // 判断游戏是否结束
                    if(this.point <= 0) {
                       this.gameOverCallBack()
                    }
                }
                break;
            }
            //格子组合移动，进入掉落状态
            case config.gameState.domove:{
                this.gamestatetime -= dt;
                if(this.gamestatetime <= 0){
                   this.dealDoMove()
                }
                break;
            }
            //格子掉落完，进入再次检查合并状态，或者等待点击状态
            case config.gameState.dodrop:
            {
                this.gamestatetime -= dt;
                if(this.gamestatetime <= 0){
                   this.dealLianJiLogic();
                }
                break;
            }
        }
    },
    
    /*
        调用: 处于移动状态的时候调用
        功能: 移动的逻辑处理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏和玩家的交互的表现
    */
    dealDoMove(){
         this.star.node.active = false;
         this.gamestate        = config.gameState.dodrop;
         this.gamestatetime    = config.move_time;
         var num = this.getAllgz()[this.g_clickid].num + 1;
         this.getAllgz()[this.g_clickid].setnum(num);
         this.getAllgz()[this.g_clickid].settoblock();
         this.getAllgz()[this.g_clickid].block.effectid = 1;
         this.getAllgz()[this.g_clickid].block.effecttime = 0.5;
         if(num > this.maxnum){
             this.maxnum = num;
             this.maxScoreShow();
         }
         this.refreshbymask();
    },


    /*
        调用: 产生最大数字的时候调用
        功能: 产生最大数字的逻辑处理
        参数: [
            无
        ]
        返回值: [
            无
        ]
        思路: 逻辑需要
    */
    maxScoreShow: function(){
        tywx.LOGD("产生最大数字",this.maxnum);
    },
   
    /*
        调用: 游戏处于掉落状态的时候调用
        功能: 掉落状态的逻辑处理
        参数: [
            无
        ]
        返回值: [
            无
        ]
        思路: 游戏和玩家的交互的表现
    */
    dealLianJiLogic: function(){
        var bfound = false;
        for(var j = 0; j < config.geziNumber; j++){
            this.resetAllMask();
            var sc =this.getAllgz()[j].num;
            this.checkmaskbyid(j, 0);
            if (this.g_mask_samecnt >= 3) {
                this.gamestate = config.gameState.domove;
                this.gamestatetime = config.move_time;
                this.lianjiNumber ++;
                this.score += config.baseScore * sc * (this.g_mask_samecnt - 1);
                for(var i = 0; i < 25; i++){
                    if(this.getAllmask()[i].step != 999 && this.getAllmask()[i].step != 0){
                       this.getAllgz()[i].block.speed_keep = config.gezi_pitch * this.getAllmask()[i].step/config.move_time;
                       this.getAllgz()[i].block.actiontime_keep = config.move_time / this.getAllmask()[i].step;
                       this.getAllgz()[i].block.id_keep = i;
                       this.getAllgz()[i].block.id_dest = this.getAllmask()[i].from;
                       this.getAllgz()[i].block.adjustmove();
                    }
                } 
                bfound=true;
                this.g_clickid = j;
                if(this.point<5)
                   this.point++;
                   break;
                }
            }

            if(bfound == false){
               this.gamestate = config.gameState.waitclick;
               // 判断连接数的大小 如果连接数大于不同的值则产生不同的效果
               this.dealLianJiNumber();
            }
    },
    
    /*
        调用: 当玩家点击一次交付结束后调用
        功能: 展示相关的特效UI
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 多元化游戏元素
    */
    dealLianJiNumber: function(){
           if(this.lianjiNumber > config.lianjiEffects.sgood && this.lianjiNumber < config.lianjiEffects.cgood ) {
                 
           }else if(this.lianjiNumber > config.lianjiEffects.cgood && this.lianjiNumber < config.lianjiEffects.hhgood ) {
                 
           }else if(this.lianjiNumber > config.lianjiEffects.hhgood && this.lianjiNumber < config.lianjiEffects.maxgood ) {
                 
           } 
           this.storeAllItem();
    },

    /*
            调用: 当宝箱数据有更新的时候存储
            功能: 存储宝箱数据到本地
            参数: [
                无
            ]
            返回值:[
                无
            ]
            思路: 游戏需求
     */
     storeAllItem: function(){
        if(this.allitems){
            tywx.Util.setItemToLocalStorage("allitems",this.allitems);
        }
     },


    /*
        调用: 1: 游戏初始的时候调用，2: 每次点击的时候没有连接的时候调用，3: 重新开始游戏的时候调用。
        功能: 展示相关的特效UI
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏元素需求
    */
    drawPhyPoint:function(){
        var ctx = this.bg.getComponent(cc.Graphics);
        ctx.clear();
        for(var i = 0;i< this.point; i++){
            let color = config.showphy_pros.colors[i];
            ctx.fillColor = cc.color(color[0],color[1],color[2]);
            var x = (config.swidth - ((config.showphy_pros.phy_num - (config.maxphy_value - this.point)) * config.gezi_pitch)) / 2 + (config.showphy_pros.width + 10) * i;
            var y = 980;
            var w = config.showphy_pros.width;
            var h = config.showphy_pros.height;
            ctx.roundRect(x,y,w,h,config.showphy_pros.radius);
            ctx.fill();
        }
    },
    
    /*
        调用: 1: 游戏重新开始的时候需要隐藏，2: 游戏结束的时候需要显示
        功能: gameOver和restart按钮的显示隐藏控制
        参数: [
            vis: false: 隐藏元素，true: 显示元素
        ]
        返回值:[
            无
        ]
        思路: 游戏逻辑需要
    */
    visibleControllButton:function(vis){
        this.restart.node.active = vis;
        this.GameOver.node.active = vis;
        this.gameOut.node.active = vis;
    },

    /*
        调用: 1: 游戏结束的时候需要显示
        功能: 游戏结束的逻辑
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏逻辑需要
    */
    gameOverCallBack:function(){
        this.gamestate = config.gameState.gameover;
        this.visibleControllButton(true);
    },


    /*
        调用: 1: 游戏开始的时候调用 2: 游戏重新开始的时候调用
        功能: 游戏初始化
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏逻辑需要
    */
    initgame:function() {
        this.score  = 0;
        this.point  = config.maxphy_value;
        this.maxnum = config.maxphy_value;
 
        for (var i = 0; i < config.geziNumber; i++) {
            var num = this.getrandomnum();
            this.getAllgz()[i].setnum(num);
            this.getAllgz()[i].settoblock();
        }

        var needcheck = true;

        while(needcheck == true) {
            needcheck = false;
            for (var i = 0; i < config.geziNumber; i++) {
                this.resetAllMask();
                this.checkmaskbyid(i, 0);
                if (this.g_mask_samecnt >= 3) {
                    this.changenumbymask();
                    needcheck = true;
                }
            }
        }

        this.gamestate = config.gameState.waitclick;
        this.visibleControllButton(false)
    },
   
    /*
        调用: 1: 游戏处于检查点击的时候调用 2: 游戏开始的时候调用 3: 处理格子连接的时候调用
        功能: 重置棋盘mask，为重新探路做准备
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏逻辑需要
    */
    resetAllMask:function(){
        for(var i=0;i<config.geziNumber;i++){
            this.getAllmask()[i].reset();
        }
        this.g_mask_samecnt = 1;
    },
    
    
     /*
        调用: 1: 处理游戏点击的时候调用 2:游戏格子连接的时候调用
        功能: 递归寻找给定ID的格子 并在mask数组里面进行标记
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 游戏逻辑需要 通过mask标记来找出每次连接的格子
    */
    checkmaskbyid:function(id,step){
        this.getAllmask()[id].step=step;
        // 从左找
        this.checkDirPaths(id, step,0, -1);
        this.checkDirPaths(id, step,0, -5);
        this.checkDirPaths(id, step,4, 1);
        this.checkDirPaths(id, step,4, 5);
    },
    
     /*
        调用: 1: checkmaskbyid寻找可连的点
        功能: 检查是否可以继续连接
        参数: [
            id: 每个格子的ID
            step: 此次寻找的步数
            bj: 寻找边界
            add: 叠加数 上下加减5 左右加减1
        ]
        返回值:[
           无
        ]
        思路: 根据递归寻找下一个点的连接情况
    */
    checkDirPaths: function(id, step, bj, add){
        if(Math.abs(add) == 4 && this.getAllmask()[id] != null && this.getAllmask()[id].y == bj){
           return false
        }else if(Math.abs(add) == 1 && this.getAllmask()[id] != null && this.getAllmask()[id].x == bj){
           return false
        }
        if(this.getAllmask()[id] == null || this.getAllmask()[id + add] == null){
            return false;
        }
        if(this.getAllmask()[id + add].num != this.getAllmask()[id].num || this.getAllmask()[id + add].step <= step){
           return false;
        }

        if(this.getAllmask()[id + add].step==999){
            this.g_mask_samecnt++;
        }

        this.getAllmask()[id + add].step = step;
        this.getAllmask()[id + add].from = id;
        this.checkmaskbyid(id + add, step + 1, bj, add)
    },


     /*
        调用: 游戏初始的时候调用
        功能: 改变格子的数字 通过mask
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    changenumbymask:function(){
        for(var i = 0;i < config.geziNumber; i++){
            if(this.getAllmask()[i].step != 999 && this.getAllmask()[i].step != 0){
                var num = this.getrandomnum();
                this.getAllgz()[i].setnum(num);
                this.getAllgz()[i].settoblock();
            }
        }
    },
   
   /*
        调用: 1, 游戏初始的时候调用 2, 改变格子的数字的时候调用
        功能: 创建随机的新块 返回新快的显示
        参数: [
           无
        ]
        返回值:[
           num: 返回格子的显示数组
        ]
        思路: 游戏逻辑需要
    */
    getrandomnum:function(){
        var tnum = this.maxnum - 2;
        if(tnum<5)
            tnum = 5;

        var num = parseInt(Math.random() * 10000) % tnum + 1;
        // if(this.prerandomnumber == num){
        //     return this.getrandomnum();
        // }else{
        //     this.prerandomnumber = num;
        // }
        return num;
    },
    
    /*
        调用: 游戏处于移动状态的时候调用
        功能: 创建新的棋盘，为掉落做准备
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    refreshbymask:function(){ 
        for(var i = 0;i < config.geziNumber;i++) {
            if (this.getAllmask()[i].step != 999 && this.getAllmask()[i].step != 0) {
                this.getAllmask()[i].from =- 1;
                var topid = -1;
                var tmpid = i + 5;
                while(tmpid < config.geziNumber){
                    if(this.getAllmask()[tmpid].step == 999 || this.getAllmask()[tmpid].step==0){
                        topid = tmpid;
                        break;
                    }
                    tmpid += 5;
                }
                if(topid != -1){
                    var dis = this.getAllmask()[topid].y - this.getAllmask()[i].y;
                    this.getAllgz()[i].block.posx        = this.getAllgz()[topid].posx;
                    this.getAllgz()[i].block.posy        = this.getAllgz()[topid].posy;
                    this.getAllgz()[i].block.id_keep     = topid;
                    this.getAllgz()[i].block.id_dest     = i;
                    this.getAllgz()[i].block.speed_keep  = (dis * config.gezi_pitch) / config.move_time;
                    this.getAllgz()[i].block.adjustdrop();
                    this.getAllgz()[topid].step = 888;
                    var num = this.getrandomnum();
                    // this.getAllgz()[i].setnum(this.getAllgz()[topid].num);
                    this.getAllgz()[i].setnum(num);
                    this.getAllgz()[i].settoblockvalue();
                    this.getAllgz()[i].block.effectid       =  this.getAllgz()[topid].block.effectid;
                    this.getAllgz()[i].block.effecttime     =  this.getAllgz()[topid].block.effecttime;
                    this.getAllgz()[topid].block.effectid   =- 1;
                    this.getAllgz()[topid].block.effecttime =  0;
                }else{
                    var dis = 5 - this.getAllmask()[i].y;
                    this.getAllgz()[i].block.posx    = this.getAllgz()[i].posx;
                    this.getAllgz()[i].block.posy    = this.getAllgz()[i].posy + dis * config.gezi_pitch;
                    this.getAllgz()[i].block.id_keep = -1;
                    this.getAllgz()[i].block.id_dest = i;
                    this.getAllgz()[i].block.speed_keep = (dis * config.gezi_pitch) / config.move_time;
                    this.getAllgz()[i].block.adjustdrop();
                    var num = this.getrandomnum();
                    this.getAllgz()[i].setnum(num);
                    this.getAllgz()[i].settoblockvalue();
                }
            }
        }
    },
    /*
        调用: 点击返回首页的时候会调用
        功能: 返回首页
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    backFirstPage:function(){
        if(tywx.Util.getItemFromLocalStorage("maxscore", 0) < this.score){
           tywx.Util.setItemToLocalStorage("maxscore",this.score); 
        }
        if(tywx.publicwx){
            wx.postMessage({
                method: 4,
                score:this.score,
            });
        }
        cc.director.loadScene("gamestart", this.destroyFinish);
    },

    /*
        调用: 点击返回首页的时候会调用
        功能: 清除当前的节点
        参数: [
           无
        ]
        返回值:[
           无
        ]
        思路: 游戏逻辑需要
    */
    destroyFinish:function(){
        if(this.node){
           this.node.destroy();
        }
    },
});



