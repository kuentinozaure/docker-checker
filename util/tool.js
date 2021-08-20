import DockerInfo from '../model/docker-info'

/**
 * This method can generate a list of docker container
 * @param {*} dockerCommandResult is the result of container cli
 * @returns a list of object with docker info
 */
 export default function getDockerContainer(dockerCommandResult) {
  let array_of_container = dockerCommandResult.split(`\n`);
  // remove the first line with the name of column
  array_of_container.shift();
  // remove the last line with the empty line
  array_of_container.pop();

  array_of_container = array_of_container.map((value) => {
    return new DockerInfo(
      value.split("   ")[0],
      value.split("   ")[4].split(" ")[0],
      value.split("   ")[1],
      value.split("   ")[3],
      value.split("   ")[8].replace(" ", "")
    );
  });

  return array_of_container;
}
