
var hero1;
var platform;
function startGame() {
    hero1 = new component(60, 60, "hero1.png", 100, 485, "image");
   	platform1 = new component(100, 100, "platform.png", 0, 500, "image");
   	platform2 = new component(100, 100, "platform.png", 100, 500, "image");
   	platform3 = new component(100, 100, "platform.png", 200, 500, "image");
   	platform4 = new component(100, 100, "platform.png", 300, 500, "image");
   	platform5 = new component(100, 100, "platform.png", 400, 500, "image");
   	platform6 = new component(100, 100, "platform.png", 500, 500, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 580;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
   	hero1.hitplat();
    }
    this.hitplat = function(){
    	var hero1teen = platform1.y-10;
    	if(this.y > platform1.y-10){
    		this.y = hero1teen;
    		this.gravitySpeed = 0
    	}
    }


  	
}

function updateGameArea() {
    myGameArea.clear();
    platform1.update();
    platform2.update();
	platform3.update();
	platform4.update();
	platform5.update();
	platform6.update();
    hero1.newPos();
   	hero1.update();
}

function moveup() {
    hero1.speedY = -1; 
}

function movedown() {
   hero1.speedY = 1; 
}

function moveleft() {
    hero1.speedX = -1; 
}

function moveright() {
    hero1.speedX = 1; 
}

function clearmove() {
   hero1.speedX = 0; 
   hero1.speedY = 0; 
}


startGame();
