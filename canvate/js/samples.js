var canvasWidth = 600;

var Demo2 = function(){
    var canvate = new Canvate("demo2");
    var clip1_3 = canvate.addNewClip();
    var clip1_4 = canvate.addNewClip();
    var clip1_2 = canvate.addNewClip();
	clip1_2.addNewClip();

    var onBirdLoaded = function(){
            clip1_2.setCycle(0,0, clip1_2.width/5, clip1_2.height/3);
            clip1_2.isLoop = true;
            clip1_2.play();
            
            var move = function(){
                clip1_2.x += 5;
                if(clip1_2.x > canvasWidth){
                    clip1_2.x = -clip1_2.width*2;
                }
            }
            clip1_2.x = -clip1_2.width*2;
            clip1_2.y = 215;
            clip1_2.addEventListener("render", move, this);
    }
    
    clip1_2.addEventListener("imageLoaded", onBirdLoaded);
    
    clip1_2.loadImage("http://sakuracode.com/canvate/img/sample1-2.png");
    
    clip1_3.loadImage("http://sakuracode.com/canvate/img/sample1-3.svg");
    clip1_3.setPosition(350, 10);
    
    clip1_4.loadImage("http://sakuracode.com/canvate/img/fujisan-sakura.png");
    clip1_4.setSize(250, "auto");
    clip1_4.setPosition(10, 10);
}

var Demo3 = function(){
    // Create the Canvate passing by the  <canvas> ID
    var canvate  = new Canvate("demo3");
    
    // Add an empty Clip to the main Canvas
    var container = canvate.addNewClip();
    
    // Add new Clip inside the container
    var background = container.addNewClip();
    //Load the image into the clip
        background.loadImage("http://www.sakuracode.com/canvate/img/fujisan-sakura.png");
    // Set the bacround position
        background.x = 220;
    
    // Add another Clip inside the container
    var logo = container.addNewClip();
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
	
	var container = canvate.addNewClip();
	
	var onImageLoaded = function(){
		text = container.addNewClip();
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
	button = container.addNewClip();
	button.addEventListener("imageLoaded", onImageLoaded);
    // load image
    button.loadImage("http://www.sakuracode.com/canvate/img/iso-sakura.svg?1");
}

var demo2 = new Demo2();
var demo3 = new Demo3();
var demo5 = new Demo5();