// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.


module.exports = {

  'Shows the editor for conflicting docs': function (client) {

    const waitTime = client.globals.maxWaitTime;
    const baseUrl = client.globals.test_settings.launch_url;

    client
      .createAnimalDb()
      .loginToGUI()
      .url(baseUrl + '/#/database/animaldb/_design/conflicts')
      .waitForElementPresent('#editor-container', waitTime, false)
      .end();
  },
};
