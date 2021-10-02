import DockerInfo from "../model/docker-info";
import { USER_AGENT_IDENTIFIER } from "../constants";
import { DOCKER_STATUS } from "../constants/index";
import ImageInfo from '../model/image-info';

/**
 * This method can generate a list of docker container
 * @param {*} dockerCommandResult is the result of container cli
 * @returns a list of object with docker info
 */
export function getDockerContainer(dockerCommandResult) {
  let array_of_container = dockerCommandResult.split(`\n`);
  // remove the first line with the name of column
  array_of_container.shift();
  // remove the last line with the empty line
  array_of_container.pop();

  array_of_container = array_of_container.map((value) => {
    return new DockerInfo(
      value.split("   ")[0],
      value.split("   ")[1],
      value.split("   ").join().includes(DOCKER_STATUS.UP)
        ? DOCKER_STATUS.UP
        : DOCKER_STATUS.EXITED
    );
  });

  return array_of_container;
}

/**
 * Check if the user agent is a browser or not
 * @param {*} userAgent is the user agent from the request
 */
export function isWebBrowser(userAgent) {
  return userAgent.toUpperCase().includes(USER_AGENT_IDENTIFIER);
}

export function getImageDocker(dockerCommandResult) {
  let array_of_image = dockerCommandResult.split(`\n`);
  // remove the first line with the name of column
  array_of_image.shift();
  // remove the last line with the empty line
  array_of_image.pop();

  array_of_image = array_of_image.map((value) => {
    let val = value.replace(/ +(?= )/g, ' ')
    console.log(val.split(" ")[2])
    return new ImageInfo(
      val.split(" ")[0],
      val.split(" ")[1],
      val.split(" ")[2]
    );
  });

  return array_of_image;
}
