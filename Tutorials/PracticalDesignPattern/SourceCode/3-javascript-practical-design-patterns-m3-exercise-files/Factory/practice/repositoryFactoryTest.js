var repositoryFactory = function(){
    var repository = this;
    var repositoryList = [
        {name:'task', source:'./taskRepositoryTest.js'},
        {name:'user', source: './userRepositoryTest.js'},
        {name: 'project', source:'./projectRepositoryTest.js'}
    ];
    repositoryList.forEach(function(element){
        repositoryList[element.name] = require(element.source)();
    });
};
module.exports = repositoryFactory;