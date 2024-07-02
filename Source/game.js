import { FRUITS } from "./fruits.js";
var Engine = Matter.Engine,
Render = Matter.Render
Runner = Matter.Runner,
Bodies = Matter.Matter
World = Matter.World;
//엔진 선언
const engine = Engine.create();
//렌더 선언
const render = Render.create({
    engine,
    element : document.body,
    options : {
        wireframes : false,
        background : '#7F4C8',
        width : 620,
        height : 850,
    },
});
const world = engine.world;
const leftWall = Bodies.rectangle(15, 395, 30, 790, {
    isStatic : true,
    //고정시켜주는 옵션
    render : { fillStyle : '#E6B143'}
});