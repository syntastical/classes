# Game Development

# Introduction
In this class we will be learning about game development.  We will using web technologies to explore certain aspects of creating 2D games and start building out a game from a template. 

# Daily Setup
1. Press the windows key, type `pycharm`, and hit enter.

# Terminology

| Term        | Definition                                                                                                                                         |
| ----------- |----------------------------------------------------------------------------------------------------------------------------------------------------|
| Game Engine | Software that offers a suite of tools and features to game developers in order to build their games professionally and efficiently.                |
| Scene       | The entire editable area in which a game can be built. Environments, props, obstacles, NPCs, menu functions and more can be a part of each Scene.  |
| FPS         | Frames Per Second.  The amount of times the code is able to redraw the scene. |
| Sprite      | Images, often used as 2D GameObjects. In 3D, sprites generally function as textures. |
| Texture     | A visual wrapping placed around GameObjects, such as the skin on a character. |
| Camera  | The "lens" use to view the scene |  

# Typical Types of scenes

## Static Background
The background doesn't move and only the sprites in the scene will move.

## Static Main Sprite
The background moves, non-main sprites move, but the main sprite will stay stationary (typically the middle).

 
# Javascript

## Variables

Variables store data that represents the state of the application.  Variables can store numbers, strings, objects, arrays, and even functions.

## Data types

| Type | Definition                                                                                    | Examples                                                                       |
| --- |-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| String | A ordered collection of abritrary characters.                                                 | let myString = 'this is a string' <br/> let myString = "this is also a string" |
| Number | A numeric value that can be used for mathmatics.                                              | let myNumber = 1 + 1 <br/> let myNumber = 5                                    |
| Object | A collection of key/value pairings. The values can be strings, numbers, objects, arrays, etc. | let myObject = { key1: "value1", key2: 2, key3: { subkey1: "subvalue1" } }     |
| Array | A ordered collection of any single data type.                                                 | let myArray = [ 1, 2, 3 ] <br/> let myArray = [ 'a', 'b', 'c' ] |
| Boolean | A true or false value. | let myBoolean = true <br/> let myBoolean = false |
| Function | A reuable piece of code that can take parameters and return a value | let myFunction = function() { console.log('hello world'); }                    |

## Control Statements

### if block
An `if block` is used to conditional execute some code

Example
```javascript
if(1 < 2) {
    // This code will run because 1 is less than 2
} 
```

### while loop block
A `while loop block` is used to execute code repeatedly until a condition becomes false.

Example
```javascript
let x = 10;
while(x > 2) {
    x--;
    console.log(x);
}
```

Output
```javascript
10
9
8
7
6
5
4
3
```

### for loop block
The `for loop block` can be write many ways but the most common way is incrementing or decrementing a variable a certain amount of times.

Example
```javascript
for(let x = 0; x < 10; x++) {
    console.log(x);
}
```

Output
```javascript
0
1
2
3
4
5
6
7
8
9
```

## Assets
You can make your own assets, buy premium assets, or find free assets online.  We will be using https://opengameart.org during this class to find assets for our games.






 

