/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var should = require('should');
var util = require('util');
var testUtils = require('../util/util');
var CLITest = require('../framework/cli-test');

// A common VM used by multiple tests
var suite;
var vmPrefix = 'clitestvm';
var testPrefix = 'cli.vm.extension_create-tests';
var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'West US'
}];

describe('cli', function() {
  describe('vm', function() {
    var vmName,
      location,
      username = 'azureuser',
      password = 'PassW0rd$',
      retry = 5,
      extensionname,
      publishername,
      version,
      timeout;

    before(function(done) {
      suite = new CLITest(testPrefix, requiredEnvironment);
      suite.setupSuite(done);
      vmName = suite.isMocked ? 'xplattestvm' : suite.generateId(vmPrefix, null);
    });

    after(function(done) {
      function deleteUsedVM(callback) {
        if (!suite.isMocked) {
          setTimeout(function() {
            var cmd = util.format('vm delete %s -b -q --json', vmName).split(' ');
            testUtils.executeCommand(suite, retry, cmd, function(result) {
              result.exitStatus.should.equal(0);
              setTimeout(callback, timeout);
            });
          }, timeout);
        } else
          callback();
      }

      deleteUsedVM(function() {
        suite.teardownSuite(done);
      });
    });

    beforeEach(function(done) {
      suite.setupTest(function() {
        location = process.env.AZURE_VM_TEST_LOCATION;
        timeout = suite.isMocked ? 0 : 5000;
        done();
      });
    });

    afterEach(function(done) {
      setTimeout(function() {
        suite.teardownTest(done);
      }, timeout);
    });



    //create a vm with windows image
    describe('Create:', function() {
      it('Windows Vm', function(done) {
        getImageName('Windows', function(ImageName) {
          var cmd = util.format('vm create %s %s %s %s -r --json',
            vmName, ImageName, username, password).split(' ');
          cmd.push('-l');
          cmd.push(location);
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            setTimeout(done, timeout);
          });
        });
      });
    });


    //Set extensions
    describe('Set extensions for the created vm:', function() {
      it('Set extensions for the created vm', function(done) {
        var listcmd = util.format('vm extension list --json').split(' ');
        testUtils.executeCommand(suite, retry, listcmd, function(outerresult) {
          outerresult.exitStatus.should.equal(0);
          var vnetName = JSON.parse(outerresult.text);
          var found = vnetName.some(function(vnet) {
            extensionname = vnet.name;
            publishername = vnet.publisher;
            version = vnet.version;
            return true;
          });
          var cmd = util.format('vm extension set %s %s %s %s --json',
            vmName, extensionname, publishername, version).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
    });

    // VM Restart and check
    describe('Check the extension set:', function() {
      it('Check the set extension after restarting', function(done) {
        var cmd = util.format('vm restart %s --json', vmName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          cmd = util.format('vm extension get %s --json', vmName).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            var Extensions = JSON.parse(result.text);
            Extensions[0].publisher.should.equal(publishername);
            Extensions[0].name.should.equal(extensionname);
            done();
          });
        });
      });
    });

    // Disable extension and check
    describe('Disable extension:', function() {
      it('Disable extension', function(done) {
        var cmd = util.format('vm extension set -b %s %s %s %s --json', vmName, extensionname, publishername, version).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          cmd = util.format('vm extension get %s --json', vmName).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            var Extensions = JSON.parse(result.text);
            Extensions[0].state.should.equal('Disable');
            done();
          });
        });
      });
    });

    // Get name of an image of the given category
    function getImageName(category, callBack) {
      var cmd = util.format('vm image list --json').split(' ');
      testUtils.executeCommand(suite, retry, cmd, function(result) {
        result.exitStatus.should.equal(0);
        var imageList = JSON.parse(result.text);
        imageList.some(function(image) {
          if ((image.operatingSystemType || image.oSDiskConfiguration.operatingSystem).toLowerCase() === category.toLowerCase() && image.category.toLowerCase() === 'public') {
            vmImgName = image.name;
            return true;
          }
        });
        callBack(vmImgName);
      });
    }
  });
});
