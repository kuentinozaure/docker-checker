const DOCKER_COMMAND = {
  PS_A: "docker ps -a",
  STOP: "docker stop ",
  REMOVE: "docker rm",
  REMOVE_ALL: "docker rm -f $(docker ps -a -q)",
};

module.exports = {
  DOCKER_COMMAND,
};
