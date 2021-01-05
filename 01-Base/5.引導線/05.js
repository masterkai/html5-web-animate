(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"05_atlas_", frames: [[0,602,500,500],[0,0,600,600]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["05_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.butterfly = function() {
	this.spriteSheet = ss["05_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
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


(lib.bf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.butterfly();
	this.instance.parent = this;
	this.instance.setTransform(-37,-37,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bf, new cjs.Rectangle(-37,-37,74,74), null);


// stage content:
(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.bf();
	this.instance.parent = this;
	this.instance.setTransform(64.4,170.7,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:1.2,guide:{path:[64.4,170.7,62,157.9,59.7,141.3,55.1,108.1,55.7,88.8,55.8,86.1,56,83.9]}},7).to({regX:0.1,regY:0.1,rotation:116.3,guide:{path:[56,83.8,56.8,73.2,59.7,68.8,62.5,64.3,67.4,66.1]}},2).to({regX:0.2,scaleX:1,scaleY:1,rotation:141.8,guide:{path:[67.4,66.1,67.6,66.2,67.8,66.3,77.2,70,93.6,96.1]}},3).to({regX:0.1,regY:0,scaleX:1,scaleY:1,rotation:160.8,guide:{path:[93.6,96.2,101.6,108.9,111.3,126.9,121,145.1,130.6,162.3]}},6).to({regY:-0.1,scaleX:1,scaleY:1,rotation:140.6,guide:{path:[130.6,162.3,156.4,208.7,181.6,248.7]}},8).to({regX:0.3,regY:-0.2,scaleX:1,scaleY:1,rotation:135.5,guide:{path:[181.6,248.7,182.5,250,183.3,251.3,219.7,309,246,338.9]}},9).to({regX:0.2,regY:-0.1,rotation:68.3,guide:{path:[246,338.9,250.1,343.7,254.1,347.8,272.4,366.8,283.9,369.1]}},4).to({regX:0.3,scaleX:1,scaleY:1,rotation:-3.5,guide:{path:[284,369.1,293.7,371.1,298.6,361.2,302.2,354,303.1,340.7]}},3).to({regY:0,scaleX:1,scaleY:1,rotation:-12.2,guide:{path:[303.2,340.6,305.3,310.9,294.6,250.8]}},7).to({regX:0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:13,guide:{path:[294.5,250.8,293.3,243.7,291.9,236.3,280.8,177.5,278.4,157.9,275.2,132.8,276.2,116.9]}},11).to({rotation:94,guide:{path:[276.3,116.9,277.1,104.5,280.3,97.6,284.9,88.2,294.6,88.8]}},3).to({regX:0.5,scaleX:1,scaleY:1,rotation:139.7,guide:{path:[294.5,88.7,310.6,89.7,340.7,118.6]}},4).to({regY:-0.2,scaleX:1,scaleY:1,rotation:140.1,guide:{path:[340.7,118.7,365.8,142.9,400.9,186.7]}},7).to({regX:0.6,regY:-0.3,rotation:72.6,guide:{path:[400.9,186.7,411.3,199.7,422.6,214.4,427.1,219.6,435.3,221.1,435.9,221.2,436.5,221.3]}},4).to({regX:0.7,regY:-0.1,scaleX:1,scaleY:1,rotation:-7.1,guide:{path:[436.5,221.3,445.7,222.5,450.1,214.6,454.5,206.8,453.5,191.9]}},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-30,guide:{path:[453.5,191.8,451.4,159.1,423.8,92]}},8).wait(1));

	// 圖層_1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,250,500,500);
// library properties:
lib.properties = {
	id: 'A6E146D5FCC425499EB0FB81218EA5FD',
	width: 500,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/05_atlas_.png?1575946344755", id:"05_atlas_"}
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
an.compositions['A6E146D5FCC425499EB0FB81218EA5FD'] = {
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