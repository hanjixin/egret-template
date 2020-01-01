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
var ScrollViewContainer = (function (_super) {
    __extends(ScrollViewContainer, _super);
    function ScrollViewContainer(mainContainer) {
        var _this = _super.call(this) || this;
        _this.mainContainer = mainContainer;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ScrollViewContainer.prototype.onAddToStage = function () {
        //创建内容，边长为50 * 50 的格子 9 * 9个。
        var content = this.createGird(100, 100, 9, 9);
        //创建ScrollView
        var myscrollView = new egret.ScrollView();
        myscrollView.setContent(content);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        myscrollView.width = stageW;
        myscrollView.height = stageH;
        myscrollView.x = 0;
        myscrollView.y = 0;
        // myscrollView.anchorOffsetX = myscrollView.width / 2;
        // myscrollView.anchorOffsetY = myscrollView.height / 2;
        this.addChild(myscrollView);
        //背景图，用来展现ScrollView 的边界
        var background = new egret.Shape();
        background.graphics.lineStyle(1, 0x1102cc);
        background.graphics.drawRect(0, 0, 200, 300);
        background.graphics.endFill();
        background.x = 0;
        background.y = 0;
        background.anchorOffsetX = background.width / 2;
        background.anchorOffsetY = background.height / 2;
        this.addChild(background);
    };
    //创建格子函数，根据输入的宽和高来创建一个 row * line的格子图。并返回Shape对象。
    ScrollViewContainer.prototype.createGird = function (w, h, row, line) {
        var shape = new egret.Shape();
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < line; j++) {
                if ((j + row * i) % 2 === 0) {
                    shape.graphics.beginFill(0xF9C20B);
                    shape.graphics.drawRect(j * w, i * h, w, h);
                    shape.graphics.endFill();
                }
                else {
                    shape.graphics.beginFill(0x2A9FFF);
                    shape.graphics.drawRect(j * w, i * h, w, h);
                    shape.graphics.endFill();
                }
            }
        }
        return shape;
    };
    return ScrollViewContainer;
}(egret.DisplayObjectContainer));
__reflect(ScrollViewContainer.prototype, "ScrollViewContainer");
//# sourceMappingURL=ScrollViewContainer.js.map