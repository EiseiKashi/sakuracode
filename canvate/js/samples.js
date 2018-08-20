var setBirdAnimation = function(){
    bird.setCycle(0,0, bird.width/5, bird.height/3);
    bird.isLoop = true;
    bird.play();
}

var setBirdTranslation = function(){
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

var onBirdLoaded = function(event){
    setBirdAnimation();
    setBirdTranslation();
}

var canvasWidth = 600;

//----------------------------------
//  DEMO 1
//----------------------------------
var canvate1 = new Canvate("demo1");

var clip1_3 = canvate1.addNew();
var clip1_4 = canvate1.addNew();

var bird = canvate1.addNewByURL("img/bird.png");
    bird.addEventListener("imageLoaded", onBirdLoaded);

var fujisan = canvate1.addNewByURL("img/fujisan-sakura.png");
    fujisan.setSize(250, "auto");
    fujisan.setPosition(10, 10);

var sakuraIso1 = canvate1.addNewByURL("img/sakura-iso.svg");
    sakuraIso1.setPosition(350, 10);

//----------------------------------
//  DEMO 2
//----------------------------------
var canvate2 = new Canvate("demo2");

var container    = canvate2.addNew();
var background   = container.addNewByURL("img/fujisan-sakura.png");
    background.x = 220;

var sakuraIso2 = container.addNewByURL("img/sakura-iso.svg");
    sakuraIso2.setSize(164, "auto");
    sakuraIso2.setPosition(17, 0);

    container.setPivot(0.5, 0.5);
    container.setSize("auto", 100);
    container.setPosition(canvate2.width/2, canvate2.height/2);

    var onContainerRender = function(){
        container.rotation += 0.25;
    }
    
    container.addEventListener("render", onContainerRender);

//----------------------------------
//  DEMO 3
//----------------------------------
var onIsoLoaded  = function(){
    text = dragger.addNew();
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
    
    dragger.startDrag();
    dragger.setPivot(0.5, 0.5);
    dragger.addEventListener("drag", onDrag);
    dragger.addEventListener("drop", onDrop);
    dragger.setPosition(canvate3.width/2, canvate3.height/2);
}

var canvate3 = new Canvate("demo3");
var dragger  = canvate3.addNew();
var button   = dragger.addNewByURL("img/sakura-iso.svg");
    button.addEventListener("imageLoaded", onIsoLoaded);
var text     = canvate3.addNew();