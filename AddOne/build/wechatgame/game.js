require('libs/weapp-adapter/index');
var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('libs/wx-downloader.js');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
require('src/settings.f119e');
var settings = window._CCSettings;
require('main.13ce0');
=======
require('src/settings.22deb');
var settings = window._CCSettings;
require('main.84c75');
>>>>>>> parent of 4a53442... 子域功能完善
=======
require('src/settings.22deb');
var settings = window._CCSettings;
require('main.84c75');
>>>>>>> parent of 4a53442... 子域功能完善
=======
require('src/settings.22deb');
var settings = window._CCSettings;
require('main.84c75');
>>>>>>> parent of 4a53442... 子域功能完善
require(settings.debug ? 'cocos2d-js.js' : 'cocos2d-js-min.4d772.js');
require('./libs/weapp-adapter/engine/index.js');

wxDownloader.REMOTE_SERVER_ROOT = "http://172.16.15.198:8080/addserver/";
wxDownloader.SUBCONTEXT_ROOT = "";
var pipeBeforeDownloader = cc.loader.md5Pipe || cc.loader.assetLoader;
cc.loader.insertPipeAfter(pipeBeforeDownloader, wxDownloader);

if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
    cc.director.once(cc.Director.EVENT_BEFORE_SCENE_LOADING, function () {
        cc.Pipeline.Downloader.PackDownloader._doPreload("WECHAT_SUBDOMAIN", settings.WECHAT_SUBDOMAIN_DATA);
    });
}
else {
    // Release Image objects after uploaded gl texture
    cc.macro.CLEANUP_IMAGE_CACHE = true;
}


window.boot();