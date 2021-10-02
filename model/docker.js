import DOCKER_COMMAND from "./docker-command-enum";
import {execSync} from "child_process";
import {getDockerContainer, getImageDocker} from "../util/tool";

export default class Docker {

  constructor() {
    
  }
  /**
   * This method return the list of the container
   * @returns the list of the container
   */
  static findAllContainer() {
    return getDockerContainer(
      execSync(DOCKER_COMMAND.PS_A, { encoding: "utf8" })
    );
  }

  static findAllImage() {
    return getImageDocker(
      execSync(DOCKER_COMMAND.GET_ALL_IMAGES, { encoding: "utf8" })
    )
  }

  /**
   * This method stop a container
   * @param {*} containerId is the container id
   * @returns the id of stoped container
   */
  static stopContainer(containerId) {
    return getDockerContainer(
      execSync(`${DOCKER_COMMAND.STOP} ${containerId}`, { encoding: "utf8" })
    ); 
  }

  /**
   * stop all container docker
   * @returns all docker container stopped
   */
  static stopAllContainer() {
    return getDockerContainer(
      execSync(`${DOCKER_COMMAND.STOP_ALL}`, { encoding: "utf8" })
    ); 
  }

  /**
   * Remove a docker container
   * @param {*} containerId  is the container id
   * @returns a container id delete
   */
  static removeDockerContainer(containerId) {
    return execSync(`${DOCKER_COMMAND.REMOVE} ${containerId}`, {
      encoding: "utf8",
    });
  }

  /**
   * remove all container docker
   * @returns all docker container deleted
   */
   static removeAllDockerContainer() {
    return execSync(DOCKER_COMMAND.REMOVE_ALL, {
      encoding: "utf8",
    });
  }
  
}
