
const   Docker  = require("./model/docker");


let docker = new Docker();

let elem ;

elem = docker.removeAllDockerContainer()

console.log(elem)