// var RepositoryFactory = require('./repositoryFactoryTest');
var taskRepository =   require('./taskRepositoryTest');
var Task =  require('./taskTest');
var projectRepository = require ('./projectRepositoryTest');
var userRepository = require ('./userRepositoryTest');
var project = require ('./projectRepositoryTest');

var task  = Task(taskRepository().get(Date.now()));
var project = projectRepository().get(Date.now());
var user = userRepository().get(Date.now());