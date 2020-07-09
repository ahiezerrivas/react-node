//classes 

//we could create a function and add methos on the function object using the prototype

//in javascript functions are objects -inherit the behavior of objecct
//whenever you create an object, the prototype object is also created behind the scene


function Holiday(destination, days) {
    this.destination = destination
    this.days = days
}

Holiday.prototype.info = function() {
    console.log(this.destination + " | " +this.days + " days");
}

var nepal = new Holiday('Nepal', 30);
console.log(nepal.info());