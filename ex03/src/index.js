// only change code below this line

class Person {
    
    constructor(){
        this.message = message;
    }
    static display(){

        var message = "Static method is invoked from Person class.";

        return message;
    }
     show(){

    
        console.log(Person.display());
    }
    
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;