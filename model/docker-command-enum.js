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

  static get STOP_ALL() {
    return "docker stop $(docker ps -a -q)";
  }

  static get GET_ALL_IMAGES() {
    return "docker images";
  }

  static get REMOVE_ALL_IMAGES() {
    return "docker rmi -f $(docker images -a -q)";
  }

}
