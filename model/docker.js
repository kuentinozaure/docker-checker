import DOCKER_COMMAND from "./docker-command-enum";
import {execSync} from "child_process";
import getDockerContainer from "../util/tool";

export default class Docker {
  /**
   * This method return the list of the container
   * @returns the list of the container
   */
  findAllContainer() {
    return getDockerContainer(
      execSync(DOCKER_COMMAND.PS_A, { encoding: "utf8" })
    );
  }

  /**
   * Remove a docker container
   * @param {*} containerId  is the container id
   * @returns a container id delete
   */
  removeDockerContainer(containerId) {
    return execSync(`${DOCKER_COMMAND.REMOVE} ${containerId}`, {
      encoding: "utf8",
    });
  }

  /**
   * remove all container docker
   * @returns all docker container deleted
   */
   removeAllDockerContainer() {
    return execSync(DOCKER_COMMAND.REMOVE_ALL, {
      encoding: "utf8",
    });
  }
  
}
