(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("Ak+E+QiDiDAAi7QAAi6CDiEQCEiDC6AAQC7AACDCDQCECEAAC6QAAC7iECDQiDCEi7AAQi6AAiEiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-45,-45,90,90), null);


// stage content:
(lib._09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 調整顏色
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(419,208,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// 光暈
	this.instance_1 = new lib.ball();
	this.instance_1.parent = this;
	this.instance_1.setTransform(323,208,0.423,0.423);
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// 模糊
	this.instance_2 = new lib.ball();
	this.instance_2.parent = this;
	this.instance_2.setTransform(227,208,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// 陰影
	this.instance_3 = new lib.ball();
	this.instance_3.parent = this;
	this.instance_3.setTransform(131,208,0.423,0.423);
	this.instance_3.shadow = new cjs.Shadow("#000000",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(383,385,339,55);
// library properties:
lib.properties = {
	id: 'C934C1E1BD4FDB469E6EAA21A8A51331',
	width: 550,
	height: 400,
	fps: 30,
	color: "#6699CC",
	opacity: 1.00,
	manifest: [],
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
an.compositions['C934C1E1BD4FDB469E6EAA21A8A51331'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;