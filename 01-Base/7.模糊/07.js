(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"07_atlas_", frames: [[0,507,401,119],[0,0,480,199],[0,370,417,135],[0,201,449,167],[0,628,391,109]]}
];


// symbols:



(lib._0 = function() {
	this.spriteSheet = ss["07_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["07_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["07_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["07_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["07_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(105,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 圖層_2
	this.instance_1 = new lib._0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(25));

	// 圖層_3
	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92,83);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true},5).wait(20));

	// 圖層_4
	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(76,67);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true},5).wait(15));

	// 圖層_5
	this.instance_4 = new lib._15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60,51);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},5).wait(10));

	// 圖層_4
	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(76,67);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({_off:true},5).wait(5));

	// 圖層_3
	this.instance_6 = new lib._3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92,83);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,241,401,119);
// library properties:
lib.properties = {
	id: '99C96F0E831F9542B1C5A08677D43D07',
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/07_atlas_.png?1575950072958", id:"07_atlas_"}
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
an.compositions['99C96F0E831F9542B1C5A08677D43D07'] = {
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