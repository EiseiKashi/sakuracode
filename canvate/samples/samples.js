var canvasWidth = 600;

var canvate = new Canvate("demo1");

var onBirdLoaded = function(){
		bird.setCycle(0,0, bird.width/5, bird.height/3);
		bird.isLoop = true;
		bird.play();
		bird.startDrag();
}

var bird = canvate.addNew();
	bird.addEventListener("imageLoaded", onBirdLoaded);
    bird.loadImage("http://sakuracode.com/canvate/img/sample1-2.png");

var Demo2 = function(){
    var canvate = new Canvate("demo2");
    var logo = canvate.addNew();
    var fuji = canvate.addNew();
    var bird = canvate.addNew();
	bird.addNew();

    var onBirdLoaded = function(){
            bird.setCycle(0,0, bird.width/5, bird.height/3);
            bird.isLoop = true;
            bird.play();
            
            var move = function(){
                bird.x += 5;
                if(bird.x > canvasWidth){
                    bird.x = -bird.width*2;
                }
            }
            bird.x = -bird.width*2;
            bird.y = 215;
            bird.addEventListener("render", move, this);
    }
    
    bird.addEventListener("imageLoaded", onBirdLoaded);
    
    bird.loadImage("http://sakuracode.com/canvate/img/sample1-2.png");
    
    logo.loadImage("http://sakuracode.com/canvate/img/sample1-3.svg");
    logo.setPosition(350, 10);
    
    fuji.loadImage("http://sakuracode.com/canvate/img/fujisan-sakura.png");
    fuji.setSize(250, "auto");
    fuji.setPosition(10, 10);
}

var Demo3 = function(){
    // Create the Canvate passing by the  <canvas> ID
    var canvate  = new Canvate("demo3");
    
    // Add an empty Clip to the main Canvas
    var container = canvate.addNew();
    
    // Add new Clip inside the container
    var background = container.addNew();
    //Load the image into the clip
        background.loadImage("http://www.sakuracode.com/canvate/img/fujisan-sakura.png");
    // Set the bacround position
        background.x = 220;
    
    // Add another Clip inside the container
    var logo = container.addNew();
    // Set the logo size
        logo.setSize(164, "auto");
    // Set the position
        logo.setPosition(17, 0);
    //Load the image into the clip
        logo.loadImage("http://www.sakuracode.com/canvate/img/sample1-3.svg");
    
    // Set the pivot of the container in the center.
    container.setPivot(0.5, 0.5);
    // Set the container size
    container.setSize("auto", 100);
    // Set the position
    container.setPosition(canvate.width/2, canvate.height/2);
    
    // Make the contaiiner rotate with all the clips inside
    var onContainerRender = function(){
        container.rotation += 0.25;
    }
    
    container.addEventListener("render", onContainerRender);
}

var text;
var button;
var Demo5 = function(){
    var id; 
    // Create the Canvate.
    var canvate  = new Canvate("demo5");
	
	var container = canvate.addNew();
	
	var onImageLoaded = function(){
		text = container.addNew();
		text.setText("DRAG ME!", 20, "Arial", "blue", "center");
		text.width = button.width;
		text.y = button.y + button.height + 5;
		var onDrag = function(){
			text.fontColor = "red";
			text.setText("DRAGGING");
		}
	
		var onDrop = function(){
			text.fontColor = "blue";
			text.setText("DRAG ME!");
		}
		
		container.startDrag();
		container.setPivot(0.5, 0.5);
		container.addEventListener("drag", onDrag);
		container.addEventListener("drop", onDrop);
		container.setPosition(canvate.width/2, canvate.height/2);
	}
	
    // Add new Clip
	button = container.addNew();
	button.addEventListener("imageLoaded", onImageLoaded);
    // load image
    button.loadImage("http://www.sakuracode.com/canvate/img/iso-sakura.svg?1");
}

var demo2 = new Demo2();
var demo3 = new Demo3();
var demo5 = new Demo5();