<script>
import { cjsAnim } from './dicegame.js'
export default {
  name: 'app',
  data(){
    return{
      isBool: true,
      exportRoot: null,
    }
  },
  methods:{
    diceClick(){
      this.isBool = !this.isBool;
      if(!this.isBool){
          // document.getElementById('btn').classList.add('reset');
          window.aninateDice = true;
          setTimeout(function(){
              window.dice1 = 'dice' + ((Math.random() * 6 | 0) + 1);
              window.dice2 = 'dice' + ((Math.random() * 6 | 0) + 1);
              window.dice3 = 'dice' + ((Math.random() * 6 | 0) + 1);
          }, 400)
      }else{
          // document.getElementById('btn').classList.remove('reset');
          window.aninateDice = undefined;

          this.exportRoot.gotoAndPlay(0); 
          this.exportRoot.dice1.gotoAndPlay(0); 
          this.exportRoot.dice2.gotoAndPlay(0); 
          this.exportRoot.dice3.gotoAndPlay(0);
      }
    }
  },
  mounted(){
    let self = this;
    let AdobeAn;
    cjsAnim(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    init();
    function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp=AdobeAn.getComposition("D96AE82DF3B8DC46A573C61FDC6BC8DB");
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
        let lib=comp.getLibrary();
        let ss=comp.getSpriteSheet();
        let queue = evt.target;
        let ssMetadata = lib.ssMetadata;
        for(let i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.dicegame();
        stage = new lib.Stage(canvas);

        self.exportRoot = exportRoot;

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
}
</script>

<template>
    <div id="app">

        <div id="animation_container" style="width:276px; height:284px">
            <canvas id="canvas" width="276" height="284" style="position: absolute; display: block;"></canvas>
            <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:276px; height:284px; position: absolute; left: 0px; top: 0px; display: block;">
            </div>
        </div>

        <a id="btn" :class="['stateBtn', {'reset': !isBool}]" @click="diceClick" href="javascript:;"></a>

    </div>
</template>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html, body{
    width: 100%;
    height: 100%;
    background-image: url('./assets/bg-rep.jpeg');
    display: flex;
    justify-content: center;
    align-items: center;
}

a.stateBtn{
    display: block;
    width: 100%;
    height: 100px;
    background-image: url("./assets/open.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 80%;
    margin-top: 50px;
}
a.stateBtn.reset{
    background-image: url("./assets/reset.png");
}
</style>
