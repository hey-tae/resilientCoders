let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function (){
        console.log('draw')
    }
}
//this object has 3 members, radius, location, and draw. If a member is a function it is called a METHOD. Radius & Location are PROPERTIES 

circle.draw()

//  FACTORY

//  function createCircle (radius){
//      //if key and value are the same ex: radius:radius you can present it as just radius 
//      return{
//          radius,
//          draw: function(){
//              console.log('draw')
//          }

//      }
 
//  }

//  const cicle = createCircle(1)
    
//CONSTRUCTOR

// function Circle (radius) {
//     this.radius = radius
//     this.draw = function(){
//         console.log('draw')
//     }
// }//when writing construction function first letter needs to have a cappital letter
// const another = new Circle(1) // new creates a new empty object
// //this and new keywords . no return within the function 

// CONSTRUCTOR PROPERTY
// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY WHICH DEFINES THE FUNCTION USED TO CREATE THAT OBJECT 

