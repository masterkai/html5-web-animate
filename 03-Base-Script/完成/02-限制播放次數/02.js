(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"02_atlas_", frames: [[0,0,580,400],[0,402,481,350],[179,754,252,138],[0,754,177,258]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["02_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ink = function() {
	this.spriteSheet = ss["02_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["02_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.product = function() {
	this.spriteSheet = ss["02_atlas_"];
	this.gotoAndStop(3);
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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-126,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-126,-69,252,138), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.product();
	this.instance.parent = this;
	this.instance.setTransform(-88.8,-129.4,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-88.8,-129.4,120.9,176.3), null);


// stage content:
(lib._02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.idx = 0;
	}
	this.frame_47 = function() {
		this.idx++;
		
		if(this.idx > 2){
			this.stop();
		}else{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// logo
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(126.5,80.9,0.726,0.726);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(31));

	// product
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(455.6,258.8,1.505,1.505);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:427.6,alpha:1},5,cjs.Ease.get(-1)).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ahoc1MAAAg5pIDRAAMAAAA5pg");
	var mask_graphics_1 = new cjs.Graphics().p("AqYc1MAAAg5pIUxAAMAAAA5pg");
	var mask_graphics_2 = new cjs.Graphics().p("AyHc1MAAAg5pMAkPAAAMAAAA5pg");
	var mask_graphics_3 = new cjs.Graphics().p("A40c1MAAAg5pMAxpAAAMAAAA5pg");
	var mask_graphics_4 = new cjs.Graphics().p("A+fc1MAAAg5pMA8/AAAMAAAA5pg");
	var mask_graphics_5 = new cjs.Graphics().p("EgjIAc1MAAAg5pMBGRAAAMAAAA5pg");
	var mask_graphics_6 = new cjs.Graphics().p("EgmuAc1MAAAg5pMBNdAAAMAAAA5pg");
	var mask_graphics_7 = new cjs.Graphics().p("EgpTAc1MAAAg5pMBSnAAAMAAAA5pg");
	var mask_graphics_8 = new cjs.Graphics().p("Egq2Ac1MAAAg5pMBVtAAAMAAAA5pg");
	var mask_graphics_9 = new cjs.Graphics().p("EgrXAc1MAAAg5pMBWvAAAMAAAA5pg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:89.5,y:203.5}).wait(1).to({graphics:mask_graphics_1,x:145.8,y:203.5}).wait(1).to({graphics:mask_graphics_2,x:195.4,y:203.5}).wait(1).to({graphics:mask_graphics_3,x:238.4,y:203.5}).wait(1).to({graphics:mask_graphics_4,x:274.8,y:203.5}).wait(1).to({graphics:mask_graphics_5,x:304.6,y:203.5}).wait(1).to({graphics:mask_graphics_6,x:327.8,y:203.5}).wait(1).to({graphics:mask_graphics_7,x:344.3,y:203.5}).wait(1).to({graphics:mask_graphics_8,x:354.3,y:203.5}).wait(1).to({graphics:mask_graphics_9,x:357.6,y:203.5}).wait(39));

	// watch
	this.instance_2 = new lib.ink();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112,50,0.973,0.973);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290,200,580.1,400.1);
// library properties:
lib.properties = {
	id: '6E7FF771CBBD1F4F9576C3E0CE781ED7',
	width: 580,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/02_atlas_.png?1576117462947", id:"02_atlas_"}
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
an.compositions['6E7FF771CBBD1F4F9576C3E0CE781ED7'] = {
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