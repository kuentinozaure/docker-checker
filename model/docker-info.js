class DockerInfo {

    constructor(id,image,status) {
        this.id = id;
        this.image = image;
        this.status = status
    }

    getId() {
        return this.id;
    }

    setId (id) {
        this.id = id;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}

export default DockerInfo