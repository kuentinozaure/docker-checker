const assert = require("assert");
const { getDockerContainer } = require("../util/tool");

describe("docker util tool test", () => {
  let docker_cli_result = `CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES
2127acbdf0fd   hello-world   "/hello"   52 minutes ago   Exited (0) 52 minutes ago             condescending_sanderson
  `;

  let dockerInfoList = getDockerContainer(docker_cli_result);
  let dockerInfoElem = getDockerContainer(docker_cli_result)[0];

  it("check docker container list", () => {
    assert.equal(dockerInfoList.length, 1);
  });

  it("check docker container list element id", () => {
    assert.equal(dockerInfoElem.getId(), "2127acbdf0fd");
  });

  it("check docker container list element image", () => {
    assert.equal(dockerInfoElem.getImage(), "hello-world");
  });

  it("check docker container list element status", () => {
    assert.equal(dockerInfoElem.getStatus(), "Exited");
  });

  it("check docker container list element created", () => {
    assert.equal(dockerInfoElem.getCreated(), "52 minutes ago");
  });

  it("check docker container list element docker name", () => {
    assert.equal(dockerInfoElem.getDockerName(), "condescending_sanderson");
  });
});
