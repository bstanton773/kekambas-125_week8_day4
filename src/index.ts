import { Canvas, Component, RightLeaningContainer, CircleContainer } from './Widget';


const canvas = new Canvas(document.body);
canvas.state = {firstName: 'Brian', city: 'Chicago'}
console.log(canvas);

const myComponent = new Component();
myComponent.content = '<button>Hello {{ firstName }} from {{ city }}</button>'

canvas.addComponent(myComponent);

// Create a new component with a RightLeaningContainer Shape
const rightComponent = new Component();
rightComponent.shape = new RightLeaningContainer();
rightComponent.locationLeft = 2;
rightComponent.locationTop = 6;
rightComponent.width = 3;
rightComponent.height = 3;
rightComponent.shape.backgroundColor = 'blue';
rightComponent.shape.borderWidth = '5px';
rightComponent.shape.zIndex = 1;
rightComponent.content = '<img src="https://picsum.photos/100" /><p>{{ firstName }}</p>'

canvas.addComponent(rightComponent);

canvas.state = {className: 'Kekambas'};
console.log(canvas.state);
// Create a new component with a CircleContainer Shape
const circleComponent = new Component();
circleComponent.shape = new CircleContainer();
circleComponent.locationLeft = 4;
circleComponent.locationTop = 5;
circleComponent.height = 4;
circleComponent.width = 4;
circleComponent.shape.backgroundColor = 'red';
circleComponent.content = '<h4>{{ className }}</h4>'

canvas.addComponent(circleComponent);


canvas.state = {city: 'San Francisco'}
