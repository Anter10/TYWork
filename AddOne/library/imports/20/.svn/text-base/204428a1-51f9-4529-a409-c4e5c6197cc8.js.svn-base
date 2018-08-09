"use strict";
cc._RF.push(module, '20442ihUflFKaQJxOXGGXzI', 'Audio');
// Script/models/Audio.js

"use strict";

/*
   声音播放控件控制按钮
   声音文件在不同的预设里面设置
   created by gyc on 2018-08-02.
*/

cc.Class({
    extends: cc.Component,
    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
        audioState: 1 // 1: 默认状态可以播放音乐
    },

    /*
       调用: 节点加载完成后的回调
       功能: 节点加载完成后的一些UI逻辑处理
       参数: [
           无
       ]
       返回值:[
           无
       ]
       思路: 系统自带
    */
    onLoad: function onLoad() {
        cc.audioEngine.setMaxWebAudioSize(1024 * 10);
    },

    /*
         调用: 点击按钮的时候调用
         功能: 控制声音的开关和显示
         参数: [
             无
         ]
         返回值:[
             无
         ]
         思路: 逻辑需要
     */
    controlAudio: function controlAudio() {
        if (this.audioState == 1) {
            this.pause();
            this.audioState = 0;
        } else if (this.audioState == 0) {
            this.play();
            this.audioState = 1;
        }
    },

    /*
        调用: 由控制方法调用
        功能: 播放声音
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    play: function play() {
        this.audioSource.play();
    },

    /*
        调用: 由控制方法调用
        功能: 暂停声音
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    pause: function pause() {
        this.audioSource.pause();
    },

    /*
        调用: 由控制方法调用
        功能: 停止当前播放声音
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    stop: function stop() {
        this.audioSource.stop();
    },

    /*
        调用: 由控制方法调用
        功能: 恢复声音
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    resume: function resume() {
        this.audioSource.resume();
    },

    /*
        调用: 点击按钮的时候调用
        功能: 更换Button的显示纹理
        参数: [
            无
        ]
        返回值:[
            无
        ]
        思路: 逻辑需要
    */
    changeButtonTexture: function changeButtonTexture() {
        if (this.audioState == 0) {} else if (this.audioState == 1) {} else {
            console.log("状态不对");
        }
    }

});

cc._RF.pop();