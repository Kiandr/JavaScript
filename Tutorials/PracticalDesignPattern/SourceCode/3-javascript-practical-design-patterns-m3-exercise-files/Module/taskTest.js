var Repo = require('./taskRepositoryTest');

var Task = function (data){
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function(){
    console.log('completing task'+ this.name);
};

Task.prototype.save = function(){
    console.log('saving task' + this.name);
    Repo.save(this);
};


module.exports = Task;