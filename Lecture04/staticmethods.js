class Dog{
    constructor(name){
        this._name = name;
    }

    introduce() {
        console.log("This is" + this._name + " !");
    }

    // A Static Method
    static bark(){
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();


//calling the static method
Dog.bark();