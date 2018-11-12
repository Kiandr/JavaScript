var Task = function (name){
    this.name = name;
    this.completed = false;
    // Added to prototype
    // this.complete = function (){
    //     console.log( 'Completing tas: '+' '+this.name);
    // this.completed = true;
    // };
    // Added to prototype
    // this.save = function(){
    //     console.log('saving task'+' '+ this.name);
    // };
};


// ClassName.prototype.methodName = function (argument){}
// One copy only on driven class
Task.prototype.save = function (){
    console.log('saving task'+' '+ this.name);
};

// ClassName.prototype.methodName = function (argument){}
// One copy only on driven class
Task.prototype.complete = function (){
    console.log( 'Completing tas: '+' '+this.name);
    this.completed = true;
};

// Moved to the NodeJs app
// var task1 = new Task('create a demo for constructors');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for single tones');
// var task4 = new Task('create a demo for prototypes');
// task1.save();
// task2.save();
// task3.save();
// task4.save();
module.exports = Task;