const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19;
var platform, ground1, ground2;
var ball1, sling;

function preload() {
    polygon_img = loadImage("polygon.png");
}
function setup() {
    var canvas = createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(750, height, 1500, 20);
    ground1 = new Ground(650, 600, 350, 20);
    ground2 = new Ground(1150, 350, 200, 20);


    block1 = new Block(550, 558, 60, 60);
    block2 = new Block(590, 558, 60, 60);
    block3 = new Block(630, 558, 60, 60);
    block4 = new Block(670, 558, 60, 60);
    block5 = new Block(710, 558, 60, 60);
    block6 = new Block(750, 558, 60, 60);

    block7 = new Block(590, 498, 60, 60);
    block8 = new Block(630, 498, 60, 60);
    block9 = new Block(670, 498, 60, 60);
    block10 = new Block(710, 498, 60, 60);

    block11 = new Block(630, 438, 60, 60);
    block12 = new Block(670, 438, 60, 60);

    block13 = new Block(650, 378, 60, 60);
    block14 = new Block(1110, 308, 60, 60);
    block15 = new Block(1150, 308, 60, 60);
    block16 = new Block(1190, 308, 60, 60);


    block17 = new Block(1130, 248, 60, 60);
    block18 = new Block(1170, 248, 60, 60);

    fill(0, 0, 255);
    block19 = new Block(1150, 188, 60, 60);

    polygon = Bodies.circle (50, 200, 20);
    World.add(world,polygon);
    
    slingShot = new SlingShot(this.polygon, { x: 250, y: 350 });
    
}

function draw() {
    background(55, 43, 43);
    Engine.update(engine);
    strokeWeight(4);

    platform.display();
    ground1.display();
    ground2.display();

    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    fill("red");
    block7.display();
    block8.display();
    block9.display();

    block10.display();

    fill("green");

    block11.display();
    block12.display();

    fill("blue");
    block13.display();
    
    fill("red");
    block14.display();
    block15.display();
    block16.display();

    fill("green");
    block17.display();
    block18.display();

    fill("blue");
    block19.display();
    
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x:mouseX, y:mouseY });
}

function mouseReleased() {
    slingShot.fly();
}
