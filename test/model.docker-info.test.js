const assert = require("assert");
const DockerInfo = require("../model/docker-info");

describe("docker model docker info test", () => {
  let dockerInfo = new DockerInfo(
    "id1",
    "created",
    "hello-test",
    "15 min ago",
    "test-docker"
  );

  it("check constructor creation", () => {
    assert.notEqual(dockerInfo, null);
  });

  it("check getter id", () => {
    assert.equal(dockerInfo.getId(), "id1");
  });

  it("check getter created", () => {
    assert.equal(dockerInfo.getCreated(), "15 min ago");
  });

  it("check getter status", () => {
    assert.equal(dockerInfo.getStatus(), "created");
  });

  it("check getter image", () => {
    assert.equal(dockerInfo.getImage(), "hello-test");
  });

  it("check getter docker name", () => {
    assert.equal(dockerInfo.getDockerName(), "test-docker");
  });

  it("check setter id", () => {
    dockerInfo.setId("id2")
    assert.equal(dockerInfo.getId(), "id2");
  });

  it("check setter created", () => {
    dockerInfo.setCreated("20 min ago")
    assert.equal(dockerInfo.getCreated(), "20 min ago");
  });

  it("check setter status", () => {
    dockerInfo.setStatus("Closed")
    assert.equal(dockerInfo.getStatus(), "Closed");
  });

  it("check setter image", () => {
    dockerInfo.setImage("😍")
    assert.equal(dockerInfo.getImage(), "😍");
  });

  it("check setter docker name", () => {
    dockerInfo.setDockerName("👉👈")
    assert.equal(dockerInfo.getDockerName(), "👉👈");
  });

});
