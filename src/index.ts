import { Canvas, Component } from './Widget';


const canvas = new Canvas(document.body);
console.log(canvas);

const myComponent = new Component();

canvas.addComponent(myComponent);
