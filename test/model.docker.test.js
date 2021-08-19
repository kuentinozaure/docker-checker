const assert = require("assert");
const Docker = require("../model/docker");

describe("docker model docker test", () => {
  let docker = new Docker();

  it("check constructor creation", () => {
    assert.notEqual(docker, null);
  });


});
