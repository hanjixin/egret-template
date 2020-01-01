var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{l(n.next(e))}catch(t){a(t)}}function s(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,a&&(o=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[0,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,a=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!(o=o.length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(n){r=[6,n],a=0}finally{i=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,a,o,s,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function n(n){t.call(r,n,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?n(i):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=r.sent(),this.startAnimation(e),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return t=r.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return r.sent(),this.stage.removeChild(e),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var n=new eui.Theme("resource/default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this.createBitmapByName("bg_jpg");this.addChild(e);var t=this.stage.stageWidth,r=this.stage.stageHeight;e.width=t,e.height=r;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,t,172),n.graphics.endFill(),n.y=33,this.addChild(n);var i=this.createBitmapByName("egret_icon_png");this.addChild(i),i.x=26,i.y=33;var a=new egret.Shape;a.graphics.lineStyle(2,16777215),a.graphics.moveTo(0,0),a.graphics.lineTo(0,117),a.graphics.endFill(),a.x=172,a.y=61,this.addChild(a);var o=new egret.TextField;o.textColor=16777215,o.width=t-172,o.textAlign="center",o.text="Hello Egret",o.size=24,o.x=172,o.y=80,this.addChild(o);var s=new egret.TextField;this.addChild(s),s.alpha=0,s.width=t-172,s.textAlign=egret.HorizontalAlign.CENTER,s.size=24,s.textColor=16777215,s.x=172,s.y=135,this.textfield=s;var l=new eui.Button;l.label="Click!",l.horizontalCenter=0,l.verticalCenter=0,this.addChild(l),l.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t.prototype.startAnimation=function(e){var t=this,r=new egret.HtmlTextParser,n=e.map(function(e){return r.parse(e)}),i=this.textfield,a=-1,o=function(){a++,a>=n.length&&(a=0);var e=n[a];i.textFlow=e;var r=egret.Tween.get(i);r.to({alpha:1},200),r.wait(2e3),r.to({alpha:0},200),r.call(o,t)};o()},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return e=new XMLHttpRequest,[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,n){function i(e){t.call(n,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),r.call(n))}var o=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,r){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(n,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var l=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(n,generateJSON.paths[e])},this):RES.getResByUrl(l,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){t.call(n,generateJSON.paths[e])},o)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);