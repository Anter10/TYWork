tywx={},tywx.StateInfo={networkConnected:!0,networkType:"none",isOnForeground:!0},tywx.SystemInfo={clientId:"H5_5.1_weixin.weixin.0-hall6.weixin.rich",intClientId:23142,cloudId:24,version:2.25,webSocketUrl:"ws://192.168.10.88/",loginUrl:"https://openrich.nalrer.cn/",shareManagerUrl:"https://market.touch4.me/",deviceId:"wechatGame",wxAppId:"wxb3967d06430bf885",appId:9999,gameId:6,hall_version:"hall37",cdnPath:"https://richqn.nalrer.cn/dizhu/",remotePackPath:"remote_res/res.zip",biLogServer:"https://cbi.touch4.me/api/bilog5/text",biJsonLogServer:"https://cbi.touch4.me/api/bilog5/report",errorLogServer:"https://clienterr.touch4.me/api/bilog5/clientlog"},tywx.UserInfo={userId:0,userName:"TuWechatGame",userPic:"",authorCode:"",systemType:0,wechatType:"6.6.1",model:"\u672a\u77e5\u8bbe\u5907",system:"iOS 10.0.1",loc:"",scene_id:"",scene_param:"",invite_id:0,wxgame_session_key:""},tywx.LOGD=function(t,r){t=t||"tywx"},tywx.LOGE=function(t,r){t=t||"tywx"},tywx.IsWechatPlatform=function(){try{return wx,wx.showShareMenu(),!0}catch(t){return!1}},function(){var t=0,r="",n=8;function e(t,r){t[r>>5]|=128<<r%32,t[14+(r+64>>>9<<4)]=r;for(var n=1732584193,e=-271733879,o=-1732584194,h=271733878,l=0;l<t.length;l+=16){var s=n,w=e,d=o,m=h;e=u(e=u(e=u(e=u(e=a(e=a(e=a(e=a(e=i(e=i(e=i(e=i(e=c(e=c(e=c(e=c(e,o=c(o,h=c(h,n=c(n,e,o,h,t[l+0],7,-680876936),e,o,t[l+1],12,-389564586),n,e,t[l+2],17,606105819),h,n,t[l+3],22,-1044525330),o=c(o,h=c(h,n=c(n,e,o,h,t[l+4],7,-176418897),e,o,t[l+5],12,1200080426),n,e,t[l+6],17,-1473231341),h,n,t[l+7],22,-45705983),o=c(o,h=c(h,n=c(n,e,o,h,t[l+8],7,1770035416),e,o,t[l+9],12,-1958414417),n,e,t[l+10],17,-42063),h,n,t[l+11],22,-1990404162),o=c(o,h=c(h,n=c(n,e,o,h,t[l+12],7,1804603682),e,o,t[l+13],12,-40341101),n,e,t[l+14],17,-1502002290),h,n,t[l+15],22,1236535329),o=i(o,h=i(h,n=i(n,e,o,h,t[l+1],5,-165796510),e,o,t[l+6],9,-1069501632),n,e,t[l+11],14,643717713),h,n,t[l+0],20,-373897302),o=i(o,h=i(h,n=i(n,e,o,h,t[l+5],5,-701558691),e,o,t[l+10],9,38016083),n,e,t[l+15],14,-660478335),h,n,t[l+4],20,-405537848),o=i(o,h=i(h,n=i(n,e,o,h,t[l+9],5,568446438),e,o,t[l+14],9,-1019803690),n,e,t[l+3],14,-187363961),h,n,t[l+8],20,1163531501),o=i(o,h=i(h,n=i(n,e,o,h,t[l+13],5,-1444681467),e,o,t[l+2],9,-51403784),n,e,t[l+7],14,1735328473),h,n,t[l+12],20,-1926607734),o=a(o,h=a(h,n=a(n,e,o,h,t[l+5],4,-378558),e,o,t[l+8],11,-2022574463),n,e,t[l+11],16,1839030562),h,n,t[l+14],23,-35309556),o=a(o,h=a(h,n=a(n,e,o,h,t[l+1],4,-1530992060),e,o,t[l+4],11,1272893353),n,e,t[l+7],16,-155497632),h,n,t[l+10],23,-1094730640),o=a(o,h=a(h,n=a(n,e,o,h,t[l+13],4,681279174),e,o,t[l+0],11,-358537222),n,e,t[l+3],16,-722521979),h,n,t[l+6],23,76029189),o=a(o,h=a(h,n=a(n,e,o,h,t[l+9],4,-640364487),e,o,t[l+12],11,-421815835),n,e,t[l+15],16,530742520),h,n,t[l+2],23,-995338651),o=u(o,h=u(h,n=u(n,e,o,h,t[l+0],6,-198630844),e,o,t[l+7],10,1126891415),n,e,t[l+14],15,-1416354905),h,n,t[l+5],21,-57434055),o=u(o,h=u(h,n=u(n,e,o,h,t[l+12],6,1700485571),e,o,t[l+3],10,-1894986606),n,e,t[l+10],15,-1051523),h,n,t[l+1],21,-2054922799),o=u(o,h=u(h,n=u(n,e,o,h,t[l+8],6,1873313359),e,o,t[l+15],10,-30611744),n,e,t[l+6],15,-1560198380),h,n,t[l+13],21,1309151649),o=u(o,h=u(h,n=u(n,e,o,h,t[l+4],6,-145523070),e,o,t[l+11],10,-1120210379),n,e,t[l+2],15,718787259),h,n,t[l+9],21,-343485551),n=f(n,s),e=f(e,w),o=f(o,d),h=f(h,m)}return Array(n,e,o,h)}function o(t,r,n,e,o,c){return f(function(t,r){return t<<r|t>>>32-r}(f(f(r,t),f(e,c)),o),n)}function c(t,r,n,e,c,i,a){return o(r&n|~r&e,t,r,c,i,a)}function i(t,r,n,e,c,i,a){return o(r&e|n&~e,t,r,c,i,a)}function a(t,r,n,e,c,i,a){return o(r^n^e,t,r,c,i,a)}function u(t,r,n,e,c,i,a){return o(n^(r|~e),t,r,c,i,a)}function h(t,r){var o=l(t);o.length>16&&(o=e(o,t.length*n));for(var c=Array(16),i=Array(16),a=0;a<16;a++)c[a]=909522486^o[a],i[a]=1549556828^o[a];var u=e(c.concat(l(r)),512+r.length*n);return e(i.concat(u),640)}function f(t,r){var n=(65535&t)+(65535&r);return(t>>16)+(r>>16)+(n>>16)<<16|65535&n}function l(t){for(var r=Array(),e=(1<<n)-1,o=0;o<t.length*n;o+=n)r[o>>5]|=(t.charCodeAt(o/n)&e)<<o%32;return r}function s(t){for(var r="",e=(1<<n)-1,o=0;o<32*t.length;o+=n)r+=String.fromCharCode(t[o>>5]>>>o%32&e);return r}function w(r){for(var n=t?"0123456789ABCDEF":"0123456789abcdef",e="",o=0;o<4*r.length;o++)e+=n.charAt(r[o>>2]>>o%4*8+4&15)+n.charAt(r[o>>2]>>o%4*8&15);return e}function d(t){for(var n="",e=0;e<4*t.length;e+=3)for(var o=(t[e>>2]>>e%4*8&255)<<16|(t[e+1>>2]>>(e+1)%4*8&255)<<8|t[e+2>>2]>>(e+2)%4*8&255,c=0;c<4;c++)8*e+6*c>32*t.length?n+=r:n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>6*(3-c)&63);return n}tywx.hex_md5=function(t){return w(e(l(t),t.length*n))},tywx.b64_md5=function(t){return d(e(l(t),t.length*n))},tywx.str_md5=function(t){return s(e(l(t),t.length*n))},tywx.hex_hmac_md5=function(t,r){return w(h(t,r))},tywx.b64_hmac_md5=function(t,r){return d(h(t,r))},tywx.str_hmac_md5=function(t,r){return s(h(t,r))}}();