var repository = function(){
    var get = function get(id){
        console.log('Getting project '+' '+ id);
        return {name: 'New Project'};
    };
    var save = function(project){
        console.log('Saving '+ project.name + 'to the db');
    };
    return {get: get, save:save};
};
module.exports = repository;