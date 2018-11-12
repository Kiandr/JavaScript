var Task = require ('./taskTest');
var Repo = require ('./taskRepositoryTest');


var task1 = new Task({name: 'create a new call'});
var task2 = new Task(Repo.get(1));
var task2 = new Task({name: 'create a demo for module'});
var task3 = new Task({name: 'create a demo for module'});
var task4 = new Task({name: 'create a demo for single tone'});
var task5 = new Task({name: 'create a demo for prototypes'});


task1.complete();
task2.save();
task3.save();
task4.save();
task5.save();