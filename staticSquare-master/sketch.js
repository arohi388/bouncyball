const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball
var ball2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution:1.0
    }       
    var ball2_options={
        restitution:1.5
}   
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,20,66,ball_options);
    World.add(world,ball)
    console.log(ball);
    ball2=Bodies.circle(200,10,40,ball_options)
    console.log(ball2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,66,66) 
    ellipse(ball2.position.x,ball2.position.y,40,40)
}