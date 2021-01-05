(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"03_atlas_", frames: [[0,328,421,88],[0,0,322,326],[0,418,326,74]]}
];


// symbols:



(lib.a = function() {
	this.spriteSheet = ss["03_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.b = function() {
	this.spriteSheet = ss["03_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c = function() {
	this.spriteSheet = ss["03_atlas_"];
	this.gotoAndStop(2);
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


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A6OZVMAAAgypMA0cAAAMAAAAypg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjJBNQgVgUAAg5QAAg3AVgVQAVgUC0gBQC1ABAUAUQAVAVAAA3QAAA5gUAUQgUAUi2ABQi1gBgUgUg");
	this.shape.setTransform(22.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,44.5,19.5), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjJBNQgUgUAAg5QAAg4AUgUQAVgVC0AAQC1AAAVAVQAUAUAAA4QAAA5gUAUQgUAUi2ABQi0gBgVgUg");
	this.shape_1.setTransform(22.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,44.5,19.5), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.b();
	this.instance.parent = this;
	this.instance.setTransform(-161,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-161,-163,322,326), null);


(lib.mouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var s = Math.random() * 50 | 0;
		
		if(s !== 2){
		    this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(59));

	// 圖層_6
	this.instance = new lib.hit();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-0.7,1,0.54);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleY:1,y:-75.3},5).to({_off:true},29).wait(12));

	// 圖層_1
	this.instance_1 = new lib.a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-208,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// 圖層_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD6ZuIg+glIhVhGIg3hiIhmAZIAAAAIAAAAIAAAAIiWgvIAAAAIAAAAIAAAAIhBAgIAAAAIAAAAIAAAAIiThVIh7BsIAAAAIAAAAIAAAAIiJg1IAAAAIAAAAIAAAAIhYhIIhcA3IAAAAIAAAAIAAAAIhnAFIAAAAIAAAAIAAAAIgeARIAAAAIAAAAIAAAAIh6ilIgpgRIAAAAIABAAIAAAAIjwgrIAAAAIAAAAIAAAAIhEAmIgKiCIhkg8IgeloIgXhYIAAAAIABAAIAAAAIgrnbIAAAAIAAAAIAAAAIgZolIAAAAIAAAAIAAAAIKPtFIAAAAIS0mfIAAAAIMHAFIAAAAILiBBIACT9IAAAAIAFS8IAAAAIgFGNIAAAAIAAADIAAAAIAAAAIAAAAIgWAMIAAAAIAAAAIAAAAIhJAjIAAAAIAAAAIAAAAIhQAIIAAAAIAAAAIAAAAIg5A+IAAAAIAAAAIAAAAIgXAmIAAAAIAAAAIAAAAIhcB1IAAAAIAAAAIAAAAIiohGIAAAAIAAAAIAAAAIh/BuIAAAAIAAAAIAAAAIjLg+IAAAAIAAAAIAAAAIiRgtIAAAAIjFB1IAAAAIAAAAIAAAAIAAAAIAAAAIh7BGIAAAAIAAAAIAAAAIAAAAIAAAAIh9geg");
	mask.setTransform(-5,-69.8);

	// 圖層_2
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,270);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-65},19,cjs.Ease.get(-1)).wait(29).to({y:269},11,cjs.Ease.get(1)).wait(1));

	// 圖層_3
	this.instance_3 = new lib.c();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-155,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,22,421,105);


(lib.gamePlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAhIABgGIgFgEQgFgFABgGQAAgFAGgRIgFgBQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgDAFAAIAGAAIAEgNQACgEADAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIgFAOIAIABIABgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBACIACAEIACgEQAFgIAKgJQACgCACAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIgCAEIgQARIgCADQAAADAHAAQAEAAAIgCIgCgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQADAAACADIAEAGQADAEAAADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBIgBAAQgMACgFAAIgDAAQgGAAgDgCQgCgCAAgEIABgEIgDABIgLAhIAFADQABAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAADgFABIgFgBIgCgBIAAABQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAgAgaAMQAAACADAEIABABIAKgcIgIAAIgGAVgAANAjQgJABgEgGQgDgCAAgIIAAgCQAAgGAEgDQAEgDAHABIADAAQAJAAAGACQAGADAAAHIAAACQgBAHgFAEQgFADgIAAgAAGAPQgCACgBADQABAEABACQADACAHAAQAIAAACgCQADgCAAgEQAAgDgDgCQgDgBgHAAQgHAAgCABg");
	this.shape.setTransform(56.1,-5.3,4.506,4.506);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAgIgCgIIgOABIgCAGQgBACgDAAQgEAAAAgDIABgDIAAgBIgBAAIgFgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIABgHIgCAAQgFAAAAgFQAAgDAFAAQAJgCAUAAQAGAAAAADQAAADgEABIgCAAIAAABIABAFIACAAIAEgBQAFABAAADQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBABIgGAAIABAIIAAACQgBAEgCAAQgFAAAAgEgAgFALIAAAHIAMgCIAAgGgAgfAYIgBgFIgCgqQAAgFADAAIACAAIABgBQAHgCAFAAQAFAAADAEQADAEAAAIIAAAEQAAAJgDADQgEADgGAAIgHAAIABATQAAADgDABQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBgAgZgDIABAAIAGAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQACgCAAgGQAAgIgCgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgDAAgFACIgCABIAAADIAHABQABAAABAAQAAABABAAQAAABABAAQAAABAAABQAAADgFAAIgGAAgAAXAKIADgOIAAABQgKACgGAAIgCAAQgDAAgDgCQgCgDAAgEIAAgCIACgRQAAgEAEABIACAAIAGgCIAKgBIABAAQAEAAAEAEQACAFAAAGIAAACIgBAPIgDAOQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgBgDgAAHgLIAAACIADABQAFAAAIgDIACAAIACABIABgJQAAgFgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgOADIgBADIAAAAIAMABQAAABABAAQABAAAAABQABAAAAABQAAAAAAABQAAADgFAAIgLgBg");
	this.shape_1.setTransform(18.8,-5.5,4.506,4.506);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAjQAAgDAFgBIAAAAIgBgDIgCgBQgDgCAAgDIAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIABAAQADgCAFAAIABAAQALAAADACQAEACAAADIAAABQAAAFgCABIgDABIgBACIABAAQAGAAAAADQAAAEgDAAIgZABQgFAAAAgDgAgOAdIABACIAHgBIAAgBIgJAAgAgTAVIABABIARAAIABgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgIgBIgJABIAAAAgAAMAhIACgEIABgDIAAgBQgFgFAAgPIABgLIgDgCIAAACIgEADIgCgBQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgNgBIAAABIABABIAEAAIAIAAQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgJAAQgEAAgEgBQgDgCAAgDIAAgBIAAgCIgDAAIgCgCIgCAoQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDIACgsIgBgCQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAKgDIAAgBIgDgKQABgFAEgBQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABADIAQgBQAHAAABAEQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgTABIABACIAAABIAKgBIACAAQAEAAAFADQADACAAADIAAABIACgCIABAAIADgOQABgEADAAQADAAABAEIgBADIgCAKIALgBQAEAAAAADQAAADgDABIgOACIgBANIABALIAJgSQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgKAVQACABADAAIADAAQADAAAAAEQAAADgCABIgFAAIgHgCIgCAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAgLgOIgBADIAMACIAAABIABgEIgBgCIgEgBIgHAAgAgWALQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAYABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgOAAgKgBgAAfgXIgGgDQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEABIADADQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_2.setTransform(-18.7,-5.4,4.506,4.506);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAkQgIAAgHgEQgHgFAAgIIAAgCIABgKQABgEADAAQADAAABAEIgBALQAAAFADADQAFACAIAAQAIAAAHgCIAFgBQADAAAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQgKAEgIAAgAATAaIABgDIABgEIAAgBIgHgBQgDgBAAgDQAAgEAEAAIAFABIgCgEIgCgDQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAAAAQAGgEgBgBIgNABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAgBQgDgBAAgEIAAgBIgFAAIgGAOIAGAAIABAAQADAAACACQADADAAADIAAABQAAACgDAEIgEAIQgBABAAAAQgBAAAAABQAAAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIABgDQADgEABgEIABgDIAAgBIgBgBIgJADIgEAJQAAAAAAABQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAEgLIAIgTIgDAAIgFABQgFAAAAgEQAAgBABAAQAAgBAAAAQABgBAAAAQABgBABAAIANgBIgEgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQACgDADAAQACAAAGAJIACADIADABIABgCQADgJACgCQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIgBAEIALACQAEABABADQgBAEgEAAIgPgDIAAAAIgDAJIAAABIAJgBQAEAAAEABQADADAAACIAAACQAAADgIAEIACABIADAHIADABQADAAABADQgBAEgDAAIgDAAQAAADgCAEQgDAEgCAAQgDgBAAgDgAgfgFQgEgBAAgDQAAgEAFAAIACABIACABQAFABgBADQAAADgEABgAgbgTQgFgBAAgDQAAgEAFAAIACABIACABQAEABAAADQAAADgEABg");
	this.shape_3.setTransform(-57,-5.4,4.506,4.506);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AjJAdQgKgKgFgWQgGgUABgaQABA3ATATQAVAVC0AAQC2AAAUgVQAKgKAFgUQAFgUABgYQAAAagFAUQgGAWgKAKQgUAVi2gBQi0ABgVgVg");
	this.shape_4.setTransform(0,19.7,4.506,4.506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0EB85").s().p("AjCAWQgQgQgCgrIAAAHIAAgKQABAeAKASQADAGAEAFQASASCwAAQCwAAATgSQAOgOAEgiIAAgLIAAAKIAAgHQgCAsgQAPQgTATiwAAQiwAAgSgTg");
	this.shape_5.setTransform(0,10.5,4.506,4.506);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1F6C6").s().p("AgHAJQgEAAAAgDQgBgDADgDQADgEAFgCQAEgDAEAAQAEABABADQABAGgMAGQgDADgDAAIgCgBg");
	this.shape_6.setTransform(82.7,16.2,4.506,4.506);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1F6C6").s().p("AgKABQACgFAJgBQALAAgBAFQgBAGgKAAIgDAAQgIAAABgFg");
	this.shape_7.setTransform(-65.2,-37.8,4.506,4.506);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1F6C6").s().p("AgNALQgFgBAAgFQAAgEAFgEQAGgEAHgDQAIgCAFACQAGABAAAFQAAAEgGAEQgFAFgIACIgHABIgGgBg");
	this.shape_8.setTransform(-78.9,-33,4.506,4.506);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0EB85").s().p("AjAgIQATgSCuAAQCwAAATASQAIAIAFASQgbgfi0AEQiyAEggAgQAFgZALgKg");
	this.shape_9.setTransform(-0.6,-31.3,4.506,4.506);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#94DD2F").s().p("AjHAQQgEgFgDgHQA5AHCbgKQCqgMAggWQgEAjgOAOQgTASivAAQixAAgSgSg");
	this.shape_10.setTransform(2.2,12.1,4.506,4.506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#82C822").s().p("AjCAeQgKgKgFgVQgEgWABgYQACArAQAQQASASCwAAQCwAAATgSQAQgQACgrQABAYgEAWQgGAVgJAKQgTASiwABQiwgBgSgSg");
	this.shape_11.setTransform(0,13.9,4.506,4.506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A5E24D").s().p("AjCBFQgSgSAAgzQAAgyATgSQASgTCvAAQCwAAATATQASASAAAyQAAAzgSASQgTATiwAAQiwAAgSgTg");
	this.shape_12.setTransform(0,-3.9,4.506,4.506);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjJBNQgUgUAAg5QAAg3AUgVQAVgUC0AAQC1AAAVAUQAUAVAAA3QABA5gVAUQgUAUi2AAQi1AAgUgUg");
	this.shape_13.setTransform(0,-1.8,4.506,4.506);

	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(0.2,1.9,4.506,4.506,0,0,0,22.3,9.8);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-45.6,200.5,91.2);


(lib.gameover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAhIgBgNIgDgBQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgNALQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIABgEIAMgJIgJgDQgKgFAAgLIAAAAQAAgHAGgHQABgDADAAIACAAIAHgCIAMgBIAAgCIgZgBQgFgBAAgDQABgEAFAAIAYABQABgFACAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABADIAbABQAEABAAACQAAAFgFAAIgagBIAAACQAPABAIADQAIAFAAAHIAAACQAAAIgFAFQgGAJgTAAIgBAAIAAAMQgBADgDABQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAAEANQAHAAAGgCQAFgBADgDQACgFAAgEQAAgFgEgDQgHgCgMAAgAgagBQAAAIAGACQAEACANACIAAgZQgLAAgEACIgEABIgBAAQgDAEAAAEgAAcAiIgJgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAEAAQACAAAJAFQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape.setTransform(43.8,-3.3,3.635,3.635);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAhIgBgBIgCgMIAAgCIgFgBQgHgDAAgFIAAgBQAAgEAGgHIgCgBQgDgDAAgDQAAgFACgDIAIgKQAEgEACAAQACAAAFAEQAIAIAAAIQAAAFgDACIAEAGQABADAAAEQAAAFgFACQgDADgGAAIAAADIAAACIACgBIAIADQADABABADQAAAEgFAAQgCAAgGgDIABADQgBAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBgAgbAIQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIAGAAQAGAAADgBIACgDQAAgCgFgHIgIABIgBgBgAgTgXIgGAJIgBAEIABABIAFAAIAHgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgDgCgEQgDgFgCAAgAgiAgIABgJIAEgCQABAAAAAAQABAAAAABQAAAAABABQAAABAAABIAAABIgBAGQgBAEgDAAQgDAAAAgEgAAQAjQgKAAgEgEQgCgDAAgHIAAgCQAAgHADgDQAEgCAHgBIACAAQAIAAAFADQAFADABAGIAAACQAAAHgEAFQgEADgHAAgAAIAPQgBACAAAEQAAAEABABQACACAIAAQAGAAABgCQACgCAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgDgBgGAAQgFAAgDABgAAAADQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAABAAIAKAAIAAgDIgBgMIgLgBQgEgBAAgDQAAgDAFgCIAKABIAAgDQAAgGAEAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABAFIAAAEIANABQAEACAAADQAAAEgFgBIgMgBIAAAOIAHgBIADAAQAFAAAAADQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgaACQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_1.setTransform(13.5,-3.7,3.635,3.635);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAmQgFAAAAgEQAAgCAFgBIAAAAIgBgDIgCgBQgDgCAAgDIAAgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAIADgDIABgBQADgBAFAAIABAAQAMAAACACQAEACAAADIAAACQAAADgCACIgDABIgBACIABAAQAGAAAAADQAAAEgDAAIgSABgAgOAdIABABIAHAAIAAgBIgJAAgAgTAVIABABIARAAIABgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgIgBIgJABIAAAAgAAMAhIADgIIAAAAQgFgGAAgOIABgLQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAACQgCACgCAAIgCgBQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgNgBIAAAAIABACIAEAAIAHAAIABAAQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAABQAAACgCABIgJAAQgEAAgEgBQgCgCgBgDIAAgCIAAgBIgDAAIgCgBIgCAmQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgEAAgBgEIACgsIgBgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAKgDIAAgBIgDgLQACgEADgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIABACIAQAAQAHAAABADQAAABgBABQAAABAAAAQgBABAAAAQgBAAgBAAIgOABIgFAAIABACIAAAAIAKAAIACAAQAEAAAFACQADACAAAEIAAAAIACgBIABAAIADgPQABgDADAAQADAAABAEIgBADIgCAKIALgBQAEAAAAADQAAADgDABIgOACIgBANIABAKIAJgRQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIgKAUQACACADAAIADAAQADAAAAAEQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAIgFAAQgEAAgDgCIgCAEIgDADQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgAgLgOIAAAAIgBADIAMACIAAABIABgFIgBgBIgEgBgAgagMIAAABIADgBIAEAAIAAgCgAgWALQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAQAOAAAKABQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgYgBgAAfgXIgGgDIgBgDQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAIAEABIADADQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABADgEABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_2.setTransform(-16.8,-3.5,3.635,3.635);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAkQgIAAgHgEQgHgFAAgIIAAgCIABgKQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIgBALQAAAFADADQADACAKAAQAKAAAFgCIAFgBQADAAAAADQABAEgEAAQgLAEgHAAgAATAaIACgGIAAgCIgHgBQgDgBAAgDQAAgDAEgBIAFABIgCgEIgCgDQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAAAAQAGgEgBgBIgNABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgBQgDgBAAgDIAAgCIgFAAIgBADIgFAMIAGgBIABAAQADAAACACQADADAAADIAAABQAAACgDAEIgEAJIgEABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIABgCIAEgJIABgDIAAgBIgBAAIgEAAIgFACIgEAJQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAEgKQAEgNAEgHIgIABQgFAAAAgEQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABgBIANgBIgEgFQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQACgDADAAQABAAAHAJIACADIADABIABgCQADgIACgDQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIgBADIALACQAEACABACQgBAEgEAAQgEAAgLgDIAAAAIgDAJIAAABIAJgBQAEAAAEABQADADAAADIAAABQAAADgIAEIACABIADAHIADABQADABABADQgBADgDAAIgDAAQAAADgCAEQgDAEgCAAQgCAAgBgEgAgfgFQgEgBAAgDQAAgEAFAAIACABIACABQAFABgBADQgBAEgDAAgAgbgTQgFgBAAgDQAAgEAFAAIACABIACABQAEABAAADQAAAEgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_3.setTransform(-47.7,-3.6,3.635,3.635);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AjJAdQgKgKgFgVQgGgWABgYQAAAXAFAUQAFAUAKAKQAVAVC0gBQC2ABAUgVQAKgKAFgUQAFgUAAgXQABAYgGAWQgFAVgKAKQgUAUi2ABQi0gBgVgUg");
	this.shape_4.setTransform(0,15.9,3.635,3.635);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AjCAWQgQgPgCgrIAAgEQABAfAJARQAFAIADAEQATASCvAAQCwAAATgSQAOgOADgkIABgKIAAAEQgBAqgRAQQgTATiwAAQivAAgTgTg");
	this.shape_5.setTransform(0,8.3,3.635,3.635);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8F8F8F").s().p("AgLAGQgBgDAEgDQADgEAFgCQAEgCAEgBQAEABAAADQABADgEADQgDAEgFACQgEADgEgBQgDAAgBgDg");
	this.shape_6.setTransform(66.7,13,3.635,3.635);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F8F8F").s().p("AgHAFQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQABgFAKgBQAFAAACABQABABABAAQAAABAAAAQABABAAAAQAAABAAAAQgBAFgKABIgCAAIgFgBg");
	this.shape_7.setTransform(-52.5,-30.1,3.635,3.635);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8F8F8F").s().p("AgNALQgFgBAAgFQAAgEAFgEQAGgEAHgDQAIgCAGABQAFACAAAEQAAAFgFAEQgGAFgIACIgHABIgGgBg");
	this.shape_8.setTransform(-63.6,-26.7,3.635,3.635);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#808080").s().p("AjBgIQATgSCvAAQCwAAATASQAIAIAFASQgbgfi0AEQiyAEggAgQAFgaAKgJg");
	this.shape_9.setTransform(-0.3,-25.2,3.635,3.635);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E5E5E").s().p("AjGAQQgEgEgEgIQA6AICagLQCrgLAfgXQgEAjgOAOQgTASivAAQiwAAgSgSg");
	this.shape_10.setTransform(1.7,9.7,3.635,3.635);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474747").s().p("AjCAeQgKgKgFgVQgEgWABgZQACAsAQAQQATASCvAAQCwAAATgSQARgRABgrQABAZgEAWQgFAWgKAJQgTATiwAAQivAAgTgTg");
	this.shape_11.setTransform(0,11.1,3.635,3.635);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6E6E").s().p("AjCBFQgTgSAAgzQAAgyATgSQATgTCvAAQCwAAASATQAUASAAAyQAAAzgUASQgSATiwAAQiwAAgSgTg");
	this.shape_12.setTransform(0.1,-3.1,3.635,3.635);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjJBNQgUgVAAg4QAAg3AUgVQAVgUC0AAQC1AAAVAUQAUAVAAA3QAAA4gUAVQgUAUi2AAQi0AAgVgUg");
	this.shape_13.setTransform(0,-1.4,3.635,3.635);

	this.instance = new lib.Path_10_1();
	this.instance.parent = this;
	this.instance.setTransform(0.3,1.5,3.635,3.635,0,0,0,22.3,9.8);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.8,-36.7,161.6,73.5);


// stage content:
(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gamestart:0,gameplay:1,gameover:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		/*
		for(var i = 1; i <= 4; i++){
			this['m'+i].addEventListener('click', hitFn)
		}
		
		
		function hitFn(e){
			var frame = e.currentTarget.currentFrame;
			if(frame > 14 && frame < 47){
				console.log("win")
			}
		}
		*/
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// over
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPBJQgFgGAAgKQgBgKAHgGQAFgGAJgBQAKAAAFAHQAGAGABAKQgBAKgGAGQgFAHgKAAQgKgBgFgGgAgPgpQgFgGAAgJQgBgKAHgGQAFgHAJAAQAKAAAFAHQAGAFABALQgBAKgGAGQgFAGgKAAQgKAAgFgHg");
	this.shape.setTransform(394.5,141.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiHBwQAMgFALgHIAXgOQAZgRAPgXQAPgXAFgcIg3AAIAAgaICsAAIADABQgKgNgKgSQgKgTgLgYIgBgCIgDAAIhTAAIAAgZIBeAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADAEQAOAjATAbQARAaAVASIgXAPIgRgTIABAHIAAAMIgBARIgBAYQgBAagDASQgCARgFAIQgIAMgLAHQgNAFgRAAQgMAAgNgCIgcgHIABgcIAcAIQANADAKAAQASAAAHgMQAIgMABgaIACgZIAAgRIAAgLIgBgEIgDgBIhFAAQgDAPgGAPQgEAOgHAMQgNAWgXAVQgYAUgiASgAiHgRQATgSAPgUQAOgVAKgXIAYAKQgOAegPAWQgPAWgRAOg");
	this.shape_1.setTransform(376.1,138.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAyCEIgUgDIAAgZIASADIANACQAIAAACgDQADgDAAgFIAAgpIiCAAIAAgXICCAAIAAgVIh6AAIAAgUICxAAIAAAUIgeAAIAAAVIAjAAIAAAXIgjAAIAAAwIgBAGQgBAEgDAGQgDAFgGAEQgHAEgNAAIgPgCgAhgCFIAAhzIgRAQIgUgQQAVgRARgUQAQgVALgZIAXAKIgOAZIgNAVIAACOgAgdBMIATgOIAPAUQAHAKAHAMIgTAMQgFgJgYgfgAghgXIgCgCIgBgCIAAhdIABgDIACgBICWAAIADABIABADIAABdQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAgAgMgtIABABIBrAAIABgBIAAgSIhtAAgAgMhnIAAAUIBtAAIAAgUIgBgBIhrAAIgBABgAiFhCQASgNAOgSQAOgRAJgTIAWALQgNAZgPASQgOASgQAMg");
	this.shape_2.setTransform(346.9,138);

	this.overHitTxt = new cjs.Text("", "29px 'Arial'");
	this.overHitTxt.name = "overHitTxt";
	this.overHitTxt.lineHeight = 34;
	this.overHitTxt.lineWidth = 75;
	this.overHitTxt.parent = this;
	this.overHitTxt.setTransform(408.2,125);

	this.gameoverBtn = new lib.gameover();
	this.gameoverBtn.name = "gameoverBtn";
	this.gameoverBtn.parent = this;
	this.gameoverBtn.setTransform(331.8,299.7);
	new cjs.ButtonHelper(this.gameoverBtn, 0, 1, 1);

	this.instance = new lib.a();
	this.instance.parent = this;
	this.instance.setTransform(158,195.9,0.41,0.41);

	this.instance_1 = new lib.b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176,86.1,0.41,0.41);

	this.instance_2 = new lib.c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.7,189,0.41,0.41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.gameoverBtn},{t:this.overHitTxt},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// game
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBJQgFgGAAgKQgBgKAHgGQAFgHAJAAQAKABAFAFQAGAHABAKQgBAKgGAHQgFAFgKABQgJAAgGgHgAgPgoQgFgHAAgJQgBgKAHgHQAFgGAJAAQAKAAAFAGQAGAHABAKQgBAJgGAHQgFAGgKABQgJgBgGgGg");
	this.shape_3.setTransform(539.9,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiHBwQAMgFALgHIAXgOQAZgRAPgXQAPgXAFgcIg3AAIAAgaICsAAIACABQgJgNgKgSQgKgTgLgYIgBgCIgDAAIhTAAIAAgZIBeAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIACAEQAPAjATAbQASAaAUASIgXAPIgRgTIABAHIAAAMIgBARIAAAYQgCAagDASQgDARgEAIQgIAMgMAHQgMAFgRAAQgMAAgNgCIgcgHIABgcIAcAIQANADAKAAQASAAAIgMQAHgMACgaIABgZIAAgRIAAgLIgBgEIgDgBIhFAAQgDAPgFAPQgFAOgHAMQgNAWgXAVQgYAUgiASgAiHgRQATgSAPgUQAOgVAKgXIAYAKQgOAegPAWQgQAWgQAOg");
	this.shape_4.setTransform(521.5,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAyCEIgUgDIAAgaIASAFIANABQAIAAACgCQADgDAAgGIAAgpIiCAAIAAgWICCAAIAAgWIh6AAIAAgUICxAAIAAAUIgeAAIAAAWIAjAAIAAAWIgjAAIAAAvIgBAHQgBAEgDAGQgDAFgGAEQgHAEgNAAIgPgCgAhgCFIAAhyIgRAQIgUgQQAVgRARgVQAQgWALgZIAXALIgOAZIgNAVIAACOgAgdBMIATgNIAPATQAHAKAHAMIgTAMQgFgJgYgfgAghgYIgCAAIgBgDIAAheQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIACgBICWAAIADABIABACIAABeQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAgAgMgtIABABIBrAAIABgBIAAgSIhtAAgAgMhnIAAAUIBtAAIAAgUIgBgBIhrAAIgBABgAiFhCQASgOAOgQQAOgRAJgUIAWALQgNAZgPASQgOATgQAKg");
	this.shape_5.setTransform(492.3,34);

	this.hitTxt = new cjs.Text("", "29px 'Arial'");
	this.hitTxt.name = "hitTxt";
	this.hitTxt.lineHeight = 34;
	this.hitTxt.lineWidth = 75;
	this.hitTxt.parent = this;
	this.hitTxt.setTransform(553.7,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPBJQgFgGAAgKQgBgKAHgGQAFgHAJAAQAKABAGAFQAFAHABAKQgBAKgFAHQgGAFgKABQgKAAgFgHgAgPgoQgFgHAAgJQgBgKAHgHQAFgGAJAAQAKAAAGAGQAFAHABAKQgBAJgFAHQgGAGgKABQgKgBgFgGg");
	this.shape_6.setTransform(86.2,37.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBJQgSgKgIgSQgJgSAAgYQAAgYAIgTQAJgUAPgKQARgMAWgBQAWABAOALQANALAHARQAGASABAUIgBAHIAAAGIhlAAQABASAGALQAHAKALAFQAJAGAOAAQANAAAJgCIASgGIAGAYQgKAEgMADQgNACgRABQgXgBgQgKgAgRgzQgIAGgEALQgEAJgBAKIBFAAQABgKgDgKQgDgKgHgGQgIgHgNAAQgLAAgIAHg");
	this.shape_7.setTransform(74.5,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABNBSIAAhbQAAgUgHgMQgHgMgPAAQgHAAgIAEQgHAFgFAIQgEAJAAALIAABiIggAAIAAhgQAAgLgDgJQgCgJgHgFQgGgFgKAAQgIAAgHAEQgHAFgFAJQgFAIAAANIAABgIghAAIAAhyIAAgYIgBgVIAdAAIABAYIABAAQAFgHAFgGQAHgHAJgDQAJgEAMgBQAQABAKAHQALAIAEAOIABAAQAIgOAMgHQAMgIARgBQAMAAALAHQAMAGAHAPQAIAOAAAZIAABgg");
	this.shape_8.setTransform(53.5,36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBwIAAifIAhAAIAACfgAgNhNQgGgGAAgIQABgJAFgFQAFgGAIAAQAJAAAFAGQAGAFgBAJQABAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_9.setTransform(36.6,33.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBiQgHgDgGgGQgFgHgEgKQgDgKAAgQIAAhSIgWAAIAAgZIAWAAIAAgdIAhgKIAAAnIAmAAIAAAZIgmAAIAABQQAAAPAFAHQAEAHALAAIAIAAIAHgCIABAaQgEACgHABIgPABQgKAAgIgDg");
	this.shape_10.setTransform(27.3,35.2);

	this.timeTxt = new cjs.Text("", "29px 'Arial'");
	this.timeTxt.name = "timeTxt";
	this.timeTxt.lineHeight = 34;
	this.timeTxt.lineWidth = 66;
	this.timeTxt.parent = this;
	this.timeTxt.setTransform(95.7,22);

	this.m4 = new lib.mouse();
	this.m4.name = "m4";
	this.m4.parent = this;
	this.m4.setTransform(287.9,124.2,0.221,0.221,0,0,0,3.1,98);

	this.m3 = new lib.mouse();
	this.m3.name = "m3";
	this.m3.parent = this;
	this.m3.setTransform(484.2,186.2,0.293,0.293,0,0,0,3.1,98);

	this.m2 = new lib.mouse();
	this.m2.name = "m2";
	this.m2.parent = this;
	this.m2.setTransform(364.2,311.6,0.391,0.391,0,0,0,3.1,97.9);

	this.m1 = new lib.mouse();
	this.m1.name = "m1";
	this.m1.parent = this;
	this.m1.setTransform(172,231.8,0.329,0.329,0,0,0,2.8,97.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.m1},{t:this.m2},{t:this.m3},{t:this.m4},{t:this.timeTxt},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.hitTxt},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// start
	this.startBtn = new lib.gamePlay();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(312,209.6);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startBtn).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(536.8,364,200.5,91.2);
// library properties:
lib.properties = {
	id: '9ABD479C1F4FEA47A0F74416CD58BAC4',
	width: 650,
	height: 400,
	fps: 30,
	color: "#FFCC99",
	opacity: 1.00,
	manifest: [
		{src:"images/03_atlas_.png?1576231704378", id:"03_atlas_"}
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
an.compositions['9ABD479C1F4FEA47A0F74416CD58BAC4'] = {
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