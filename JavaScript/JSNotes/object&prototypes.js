'use strict';

/*OBJECT LITERAL NOTATION******************/
var cat = {
    name:'Fluffy',
    color:'white'
};
cat.age = 3;
cat.speak = function() {
    display('MEEOOW')
};
/*CONSTRUCTOR FUNCTION*********************/
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var cat = new Cat();
display(cat);
/*OBJECT.CREATE FUNCTION+PROTOTYPE*********/
var cat = Object.create(Object.prototype, {
    name: {
        value: 'Flurry',
        enumerable:true,
        writable:true,
        configurable:true
    },
    color: {
        value:'White',
        enumerable:true,
        writable:true,
        configurable:true
    },
});
/*ES6 CLASSES******************************/
class Cat{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        display('Meeooow');
    }
}
var cat = new Cat('Fluffy','White');
display(cat);
cat.speak();
/*BRACKET NOTATION*************************/
var cat  = {
    name: 'Fluffy',
    color: 'White'
};
display(cat['color']);
cat['Eye Color'] = 'Green';
display(cat['Eye Color']);
/*WRITABLE PROPERTY DESCRIPTOR************/
var cat = {
    name: 'Fluffy',
    color: 'White'
};
display(Object.getOwnPropertyDescriptor(cat, 'name'));
Object.defineProperty(cat,'name',{writable: false});
cat.name = 'Scratchy';          //will throw an error only in strict mode
display(Object.getOwnPropertyDescriptor(cat,'name'));
var cat = {
    name: {fiest: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
};
Object.defineProperty(cat,'name',{writable: false});
cat.name.fiest = 'Scratchy';    /*
                                    this method only prevents the name pointer from being changed and not the values that
                                    it might point to*/
Object.freeze(cat.name);        //this method will prevent the objects stored in properties from being changed
display(Object.getOwnPropertyDescriptor(cat, 'name'));
/*ENUMERABLE PROPERTY DESCRIPTOR**********/
var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
};
Object.defineProperty(cat,'name',{enumerable: false});      /*
                                                                            Makes it so that you cannot enumerate,
                                                                            serialize, or see a property key*/
for(var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName]);
}
display(Object.keys(cat));
/*CONFIGURABLE PROPERTY DESCRIPTOR********/
var cat = {
    name: {fiest: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
};
Object.defineProperty(cat, 'name', {enumerable: false});    /*
                                                                            Locks down a property to prevent an objects
                                                                            properties from being changed and prevents
                                                                            that object from being deleted*/
Object.defineProperty(cat,'name',{configurable: false});
Object.defineProperty(cat,'name',{configurable: true});     /*
                                                                            ERROR Once an objects configurable property
                                                                            is set to false, this cannot be changed*/
/*GETTERS AND SETTERS*********************/
var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
};
Object.defineProperty(cat, 'fullName',{
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.first = nameParts[1];
    }
});
cat.fullName = 'Muffin Top';    //setting the value for first and last name properties
display(cat.fullName);          //getting the value of first and last name properties
display(cat.name.first);
display(cat.name.last);
/*PROTOTYPE INHERITANCE********************/
var arr = ['red','blue','green']; //OR var arr = new Array('red','blue','green');
Object.defineProperty(Array.prototype,'last',{ get:function() {  //Adds the last property to every array
        return this[this.length-1]
    }
});
var arr2 = ['one','two','three'];
display(arr.last);
display(arr2.last);
/*PROTOTYPE EXAMPLE************************/
function Animal(voice) {
    this.voice = voice || 'grunt';
}
Animal.prototype.speak = function() {
    display(this.voice);
}
function Cat(name, color) {
    Animal.call(this);
    this.name = name;
    this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);
var fluffy = new Cat('Fluffy','White');
fluffy.speak();
/*CLASS EXAMPLE****************************/
class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }
    speak() {
        display(this.voice);
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color;
    }
}
var fluffy = new Cat('Fluffy', 'White');
display(fluffy.constructor);
/*CONSTRUCTOR FUNCTION*********************/
/*CONSTRUCTOR FUNCTION*********************/
/*CONSTRUCTOR FUNCTION*********************/
/*CONSTRUCTOR FUNCTION*********************/
