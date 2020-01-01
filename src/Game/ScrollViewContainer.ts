class ScrollViewContainer extends egret.DisplayObjectContainer {
    private mainContainer: any

    public constructor(mainContainer) {
        super();
        this.mainContainer = mainContainer
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage() {
        //创建内容，边长为50 * 50 的格子 9 * 9个。
        var content: egret.Shape = this.createGird(100, 100, 9, 9);
        //创建ScrollView
        var myscrollView: egret.ScrollView = new egret.ScrollView();
        myscrollView.setContent(content);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        myscrollView.width = stageW;
        myscrollView.height = stageH;
        myscrollView.x = 0;
        myscrollView.y = 0;
        // myscrollView.anchorOffsetX = myscrollView.width / 2;
        // myscrollView.anchorOffsetY = myscrollView.height / 2;
        this.addChild(myscrollView);
        //背景图，用来展现ScrollView 的边界
        var background: egret.Shape = new egret.Shape();
        background.graphics.lineStyle(1, 0x1102cc)
        background.graphics.drawRect(0, 0, 200, 300);
        background.graphics.endFill();
        background.x = 0;
        background.y = 0;
        background.anchorOffsetX = background.width / 2;
        background.anchorOffsetY = background.height / 2;
        this.addChild(background);
    }
    //创建格子函数，根据输入的宽和高来创建一个 row * line的格子图。并返回Shape对象。
    private createGird(w: number, h: number, row: number, line: number): egret.Shape {
        var shape: egret.Shape = new egret.Shape();
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
    }
}