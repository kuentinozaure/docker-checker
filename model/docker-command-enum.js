export default class DOCKER_COMMAND {
  static get PS_A() {
    return "docker ps -a";
  }

  static get STOP() {
    return "docker stop";
  }

  static get REMOVE() {
    return "docker rm";
  }

  static get REMOVE_ALL() {
    return "docker rm -f $(docker ps -a -q)";
  }
}
