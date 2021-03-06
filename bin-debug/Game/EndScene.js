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
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        var _this = _super.call(this) || this;
        //指定开始场景对应的皮肤文件StartScene.exml
        _this.skinName = "resource/game/StartScene.exml";
        return _this;
    }
    //实现父类的onComplete方法
    EndScene.prototype.onComplete = function () {
        //设置两个Label为可点击
        this.btn_tc.touchEnabled = true;
        this.btn_qh2.touchEnabled = true;
        //添加点击事件
        this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
        this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    //弹出场景
    EndScene.prototype.onTaptc = function () {
    };
    EndScene.prototype.onTapqiehuan = function () {
    };
    return EndScene;
}(Scene));
__reflect(EndScene.prototype, "EndScene");
//# sourceMappingURL=EndScene.js.map