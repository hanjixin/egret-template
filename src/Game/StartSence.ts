class StartScene extends Scene {
        public btn_tc: eui.Label;//弹出层按钮
        public btn_qh2: eui.Label;//切换场景
        public _scrollview: egret.DisplayObject = null

        public constructor() {
            super();
            //指定开始场景对应的皮肤文件StartScene.exml
            // this.skinName ="resource/game/StartScene.exml";
        }
        //实现父类的onComplete方法
        protected onComplete() {
            console.log(1312)
            this._scrollview = new ScrollViewContainer(SceneManager.Instance.rootLayer)
            // SceneManager.Instance.rootLayer.addChild(this._scrollview)
            var gameContainer:fighter.GameContainer = new fighter.GameContainer();
            // this.height = this.stage.$stageHeight
            // this.width = this.stage.$stageWidth
            this.addChild(gameContainer);
            //设置两个Label为可点击
            // this.btn_tc.touchEnabled =true;
            // this.btn_qh2.touchEnabled =true;
            // //添加点击事件
            // this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc,this);
            // this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan, this);
        }
        //弹出场景
        private onTaptc(){
        }
        private onTapqiehuan(){
        }
}