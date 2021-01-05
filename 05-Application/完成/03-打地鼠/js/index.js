window.onload = function(){
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    init()
    function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp=AdobeAn.getComposition("9ABD479C1F4FEA47A0F74416CD58BAC4");
        var lib=comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
        loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
        var lib=comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
        var images=comp.getImages();	
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
    }
    function handleComplete(evt,comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib=comp.getLibrary();
        var ss=comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib._03();
        stage = new lib.Stage(canvas);

        //分數
        var point = 0; 
        var timeInt = 15;

        //初始化
        function gameinit(){
            point = 0; 
            timeInt = 15;
            exportRoot.timeTxt.text = timeInt;
            exportRoot.hitTxt.text = point;
        }
        
        gameinit();
        
        exportRoot.startBtn.addEventListener('click', function(){
            exportRoot.gotoAndStop('gameplay');
            //遊戲開始計時
            var timer = setInterval(() => {
                timeInt--;
                exportRoot.timeTxt.text = timeInt;
                if(timeInt <= 0) {
                    clearInterval(timer);
                    exportRoot.gotoAndStop('gameover');
                    exportRoot.overHitTxt.text = point;
                }
            }, 1000);
        })

        //遊戲重新開始
        exportRoot.gameoverBtn.addEventListener('click', function(){
            exportRoot.gotoAndStop('gamestart');

            //遊戲參數重設
            gameinit();
        })


        // 地鼠點擊
		for(var i = 1; i <= 4; i++){
			exportRoot['m'+i].addEventListener('click', hitFn)
		}
		
		function hitFn(e){
            var frame = e.currentTarget.currentFrame;
            //判斷點擊區間
			if(frame > 14 && frame < 47){
                //分數疊加
                point++;
                //寫入分數
                exportRoot.hitTxt.text = point;
                //地鼠被打到馬上縮回去
                e.currentTarget.gotoAndPlay(47);
			}
        }


        stage.enableMouseOver();	
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }	    
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {		
            var lastW, lastH, lastS=1;		
            window.addEventListener('resize', resizeCanvas);		
            resizeCanvas();		
            function resizeCanvas() {			
                var w = lib.properties.width, h = lib.properties.height;			
                var iw = window.innerWidth, ih=window.innerHeight;			
                var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                if(isResp) {                
                    if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                        sRatio = lastS;                
                    }				
                    else if(!isScale) {					
                        if(iw<w || ih<h)						
                            sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==1) {					
                        sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==2) {					
                        sRatio = Math.max(xRatio, yRatio);				
                    }			
                }			
                canvas.width = w*pRatio*sRatio;			
                canvas.height = h*pRatio*sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                stage.scaleX = pRatio*sRatio;			
                stage.scaleY = pRatio*sRatio;			
                lastW = iw; lastH = ih; lastS = sRatio;            
                stage.tickOnUpdate = false;            
                stage.update();            
                stage.tickOnUpdate = true;		
            }
        }
        makeResponsive(false,'both',false,1);	
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
}