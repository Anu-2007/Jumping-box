var canvas;
var music;
var box1,box2,box3,box4;
var jBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(700,500,140,30);
    box1.shapeColor = "red";
    box2 = createSprite(500,500,140,30);
    box2.shapeColor = "blue";
    box3 = createSprite(300,500,140,30);
    box3.shapeColor = "purple";
    box4 = createSprite(100,500,140,30);
    box4.shapeColor = "green";

    
    jBox = createSprite(random(20,750));
    jBox.shapeColor = "white";
    jBox.setVelocity (-2,2);
   
    
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();

    if(box1.isTouching(jBox)){
        jBox.shapeColor = "red";
        jBox.velocityX  = 0;
    }
    if(box2.isTouching(jBox)){
        jBox.shapeColor = "blue";
        jBox.velocityX  = 0;
    }
    if(box3.isTouching(jBox)){
        jBox.shapeColor = "purple";
        jBox.velocityX  = 0;
    }
    if(box4.isTouching(jBox)){
        jBox.shapeColor = "green";
        jBox.velocityX  = 0;
    }
    

    
    drawSprites();
}
