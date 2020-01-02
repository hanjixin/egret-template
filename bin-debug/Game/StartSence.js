var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this._scrollview = null;
        return _this;
        //指定开始场景对应的皮肤文件StartScene.exml
        // this.skinName ="resource/game/StartScene.exml";
    }
    //实现父类的onComplete方法
    StartScene.prototype.onComplete = function () {
        console.log(1312);
        this._scrollview = new ScrollViewContainer(SceneManager.Instance.rootLayer);
        // SceneManager.Instance.rootLayer.addChild(this._scrollview)
        var gameContainer = new fighter.GameContainer();
        // this.height = this.stage.$stageHeight
        // this.width = this.stage.$stageWidth
        this.addChild(gameContainer);
        //设置两个Label为可点击
        // this.btn_tc.touchEnabled =true;
        // this.btn_qh2.touchEnabled =true;
        // //添加点击事件
        // this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc,this);
        // this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan, this);
    };
    //弹出场景
    StartScene.prototype.onTaptc = function () {
    };
    StartScene.prototype.onTapqiehuan = function () {
    };
    return StartScene;
}(Scene));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartSence.js.map