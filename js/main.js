window.onload = init;

var stage;

function init() {
	console.log("main.js: init()");
	
	var canvas = document.getElementById('stage');
		
	stage = new Stage(canvas);
	
	var spriteSheet = new SpriteSheet({
	    "animations": {"run": [0, 25], "jump": [26, 63]}, 
	    "images": ["assets/runningGrant.png"], 
	    "frames": { "regX": 0, 
	    			"height": 292.5, 
	    			"count": 64, 
	    			"regY": 0, 
	    			"width": 165.75 }
	});

	var bitmapAnimation = new BitmapAnimation(spriteSheet);
	bitmapAnimation.gotoAndPlay("run");
	stage.addChild(bitmapAnimation);
	
	stage.update();
	
	Ticker.setFPS(40);
	Ticker.addListener(this);
}

function tick() {
	stage.update();
}