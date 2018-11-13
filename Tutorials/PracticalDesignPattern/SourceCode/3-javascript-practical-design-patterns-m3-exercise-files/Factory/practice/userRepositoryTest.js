var repository = function(){

    var db = {};
    var get = function (id){
        console.log("Getting user Id "+ id);
        return { name: 'John Bills'};
    };
    var save = function (user){
        console.log('Saving '+ user.name +' to db');
    };
    return {get: get, save: save};
};
module.exports = repository;