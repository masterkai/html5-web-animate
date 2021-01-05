(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"04_atlas_1", frames: [[0,0,703,480]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.car = function() {
	this.initialize(ss["04_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.光 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.529,1],-71,0,71,0).s().p("ArFaaMAAAg0zIWLAAMAAAA0zg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.光, new cjs.Rectangle(-71,-169,142,338), null);


(lib.car_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_60 = new cjs.Graphics().p("AlQHDQlcgiirgcIAAAAQjoglhjgzIAAAAQivhZhBgrIAAAAQiGhZgahTIAAAAQBZhLBmhBIAAAAQCdhjB1gaIAAAAQDxhKA+gVIAAAAQDshOBWgvIAAAAQA8AlEiBKIAAAAQJDCUSCC/IAAAAQgBAagOAmIAAAAQgcBOhDBHIAAAAQjWDgoDA5IAAAAQjNAciRAEIAAAAIhBABIAAAAQkDAAmagmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_graphics_60,x:-146.2248,y:-31.1928}).wait(60));

	// 圖層_7
	this.instance = new lib.光();
	this.instance.setTransform(97,-8.85);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({regX:-0.1,regY:-0.1,rotation:44.9988,x:-345.55,y:-105},29,cjs.Ease.get(-1)).to({_off:true},1).wait(30));

	// 圖層_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_30 = new cjs.Graphics().p("AxOTWQhNgBhegFIAAAAQkkgSk6g8IAAAAQFdAlCDAGIAAAAQDXAKA0g5IAAAAIA1g0IAAAAQAYgZAKgVIAAAAQAKgXAAgtIAAAAQAAgzgOhPIAAAAQgYiLg0ibIAAAAIgvh+IAAAAIAAAAIAAAAIAAAAIAAAAIgEgNIAAAAQgKgQgggRIAAAAQhog1kYgjIAAAAQhmgMkvgtIAAAAQhmgPh0AEIAAAAQAKgCBUgYIAAAAQBggcABABIAAAAQABADQRgKIAAAAQCrhJCLh9IAAAAIBfhbIAAAAQAwguAggTIAAAAICgFTQh6CAhmC/IAAAAQiNEHAADoIAAAAQAABqAeBkIAAAAQgmAIinAbIAAAAIibAZIAAAAIAAAAIAAAAIAAAAIAAAAQAAABghAAIAAAAIgbAAgAF5PCIAAAAIAAAAQgBgBgOhFIAAAAQgEgEgahbIAAAAQApjugMiFIAAAAQgDgugNguIAAAAIgShIIAAAAIgBgDIAAAAQh7kNjEAAIAAAAIAAAAIAAAAIgBAAIAAAAQiXAAjFCjIAAAAIgFAEIAAAAIiglTQAdABAlgFIAAAAQBIgJAlggIAAAAQDEkXAshRIAAAAQBGgNAigVIAAAAQApgZBAhMIAAAAQCmjGCoiDIAAAAQCGhoCmhSIAAAAQioCYi7D1IAAAAQheB6g8BbIAAAAIAAAAIAAAAIAAAAIAAAAIgLASIAAAAIgBAAIAAAAIAAAAIAAAAIgBACIAAAAIAAABIAAAAIgBABIAAAAIgBACIAAAAIAAAAIAAAAIgKAQIAAAAIAAAAIAAAAIAoAyIALADIAAAAIAAAAIAAAAIBAARIAAAAIAAAAIAAAAIAAAAIAAAAIBfAUQARA7AfBfIAAAAQAWBKAAA2IAAAAIAAADIAAAAQAFAgAABCIAAAAQAACQgXE1IAAAAIgBAHIAAAAIAAABIAAAAIAAAHIAAAAIAAAEIAAAAIgDAoIAAAAIgBAIIAAAAIAAADIAAAAIAAABIAAAAIgCAUIAAAAIAAAAIAAAAQgZFRgFAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAKIAAAAIAEAjIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIACABIAAAAIAEADIAAAAIABAAIAAAAIArAaIAAAAIKnicIAAAAQLAihBlgcIAAAAQBqgdBRirIAAAAQAohVAShQIAAAAIgBAJIAAAAIgBAIIAAAAIAAAAIAAAAQg4F/gBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgmALIAAAAIgEABIAAAAIgCABIAAAAIgFABIAAAAIgBABIAAAAIgDABIAAAAIgfAJIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIssDBIAAAAIgTAFIAAAAIgGABIAAAAIgOADIAAAAIgKADIAAAAIgBAAIAAAAIgHACIAAAAIgEABIAAAAIgFABIAAAAIgSAEIAAAAIgEABIAAAAIgGABIAAAAIgCABIAAAAIscC9IAAAAIAAAAgAn7i2IAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_1_graphics_30,x:28.75,y:24.2563}).wait(90));

	// 圖層_6
	this.instance_1 = new lib.光();
	this.instance_1.setTransform(-108.25,-88.7,1,2.5688,60.0014);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({scaleY:1,rotation:-14.9992,x:432,y:58.4},29,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// 圖層_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AVWGgQAUhyAAhPIAAAAQAAijhUgNIAAAAQAlgUApgbIAAAAIAggWQhWh1iCh7IAAAAQkFj1jagZIAAAAQjUgXk6AGIAAAAQlhAMizAAIAAAAQjOg0nWhdIAAAAQqdiEj/gDIAAAAQBjgfC/gXIAAAAQF+gvHPApIAAAAQItAyGCA/IAAAAQGFBAFVBiIAAAAQBZAbBaAwIAAAAQB8BDBNBTIAAAAIBmBfIAAAAQBNBIA2AtIAAAAQCuCQB7ATIAAAAQAKAiAXAkIAAAAQAMASAKALIAAAAIAAAAIAAAAQAAAChLAhIAAAAQgSAUgDBFIAAAAIgBArIAAAAQAAAVACACIAAAAIBfAeIAAAAQAEAuAQA2IAAAAQAeBsA8AvIAAAAIAAABIAAAAQAAAOhkAyIAAAAIhpAyIAAAAQgJgXgVgbIAAAAQgog2g0gOIAAAAQikgsjRF0IAAAAQBbkhAhjAgAbJKvIAAAAIAAAAIAAAAIAAAAIAAAAg");
	mask_2.setTransform(134.6804,-62.7608);

	// 圖層_5
	this.instance_2 = new lib.光();
	this.instance_2.setTransform(-130.55,-154);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:23.9571,x:412.4,y:30.85},29,cjs.Ease.get(-1)).to({_off:true},1).wait(90));

	// 圖層_1
	this.instance_3 = new lib.car();
	this.instance_3.setTransform(-351.5,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.5,-240,703,480);


// stage content:
(lib._04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.car_1();
	this.instance.setTransform(351.5,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(351.5,157,351.5,323);
// library properties:
lib.properties = {
	id: '3E95C885FBBEBE4BA3CE2377E2F7866E',
	width: 703,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/04_atlas_1.png?1609823225844", id:"04_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3E95C885FBBEBE4BA3CE2377E2F7866E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;