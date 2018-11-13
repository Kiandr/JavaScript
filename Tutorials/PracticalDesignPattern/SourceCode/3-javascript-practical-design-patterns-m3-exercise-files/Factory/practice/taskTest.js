
// var repository = require('./taskRepositoryTest');

var Task = function(data){
    this.name = data.name;
    this.completed = false;
};

Task.prototype.completed = function(){
    console.log('completing task'+ this.name);
    TouchList.completed = ture;
};
Task.prototype.save = function(){
    console.log('saving task' + this.name);
    repository.save(this);
};

module.exports = Task;