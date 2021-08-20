class DockerInfo {

    constructor(id,status,image,created,dockerName) {
        this.id = id;
        this.status = status;
        this.image = image;
        this.created = created;
        this.docker_name = dockerName;
    }

    getId() {
        return this.id;
    }

    setId (id) {
        this.id = id;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }

    getDockerName() {
        return this.docker_name;
    }

    setDockerName(dockerName){
        this.docker_name = dockerName;
    }
}

export default DockerInfo