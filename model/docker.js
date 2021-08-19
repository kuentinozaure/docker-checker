const { DOCKER_COMMAND } = require("./docker-command-enum");
const {execSync} = require("child_process");
const { getDockerContainer } = require("../util/tool");

class Docker {

  constructor() {}

  /**
   * This method return the list of the container
   * @returns the list of the container
   */
   findAllContainer() {
    return getDockerContainer(execSync(DOCKER_COMMAND.PS_A, { encoding: "utf8" }));
  }

  /**
   * Remove a docker container
   * @param {*} containerId  is the container id
   * @returns a container id delete
   */
   removeDockerContainer(containerId) {
    return execSync( `${DOCKER_COMMAND.REMOVE} ${containerId}`,{ encoding: "utf8" })
  }

  /**
   * remove all container docker
   * @returns all docker container deleted
   */
   removeAllDockerContainer() {
    return execSync(DOCKER_COMMAND.REMOVE_ALL)
  }
}


module.exports = Docker;