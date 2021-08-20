import * as assert from 'assert';
import Docker from '../model/docker';

describe("docker model docker test", () => {
  let docker = new Docker();

  it("check constructor creation", () => {
    assert.notEqual(docker, null);
  });


});
