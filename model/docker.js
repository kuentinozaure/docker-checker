const { DOCKER_COMMAND } = require("./docker-command-enum");
const {execSync} = require("child_process");
const { getDockerContainer } = require("../util/tool");

class Docker {

  constructor() {}

  /**
   * This method can find all container 
   */
   findAllContainer() {
    return getDockerContainer(execSync(DOCKER_COMMAND.PS_A, { encoding: "utf8" }));
  }

  /**
   * This method remove a docker container
   * @param {*} containerId id of the docker container
   */
   removeDockerContainer(containerId) {
    return execSync( `${DOCKER_COMMAND.REMOVE} ${containerId}`,{ encoding: "utf8" })
  }

  /**
   * This method can remove all docker container 
   */
   removeAllDockerContainer() {
    return execSync(DOCKER_COMMAND.REMOVE_ALL)
  }
}


module.exports = Docker;