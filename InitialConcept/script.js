
//var keyword
var course = "Z to H"
console.log(course)

course = "Lightining"
console.log(course)
//console.log(window)
//console.log(window.course)

function testVariable(){
    var anotherCourse = "Apex Salesforce"
    console.log(anotherCourse)
}

testVariable()



//let keyword
let course = "Z to H"
course = "Lightning"
console.log(course)
//let course = "SyntaxError: identifier 'course' has already been declared"

// it doesn't appear in the global scope, we can't use console.log(window.course) in let

function testVariable(){
    let anotherCourse = "Apex Salesforce"
    console.log(anotherCourse)
}
testVariable()



//const keyword

const course  = "Z tho H"
console.log(course)
//course = "lwc" we can't update


function testVariable(){
    const anotherCourse = "Apex Salesforce"
    console.log(anotherCourse)
}
testVariable()