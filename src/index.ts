import { Canvas, Component, RightLeaningContainer, CircleContainer } from './Widget';


const canvas = new Canvas(document.body);
console.log(canvas);

const myComponent = new Component();

canvas.addComponent(myComponent);

// Create a new component with a RightLeaningContainer Shape
const rightComponent = new Component();
rightComponent.shape = new RightLeaningContainer();
rightComponent.locationLeft = 6;
rightComponent.locationTop = 6;
rightComponent.width = 3;
rightComponent.height = 3;
rightComponent.shape.zIndex = 1;

canvas.addComponent(rightComponent);

// Create a new component with a CircleContainer Shape
const circleComponent = new Component();
circleComponent.shape = new CircleContainer();
circleComponent.locationLeft = 4;
circleComponent.locationTop = 5;
circleComponent.height = 4;
circleComponent.width = 4;

canvas.addComponent(circleComponent);
