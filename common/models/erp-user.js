// Licensed under the Apache License. See footer for details.
var helper = require("./helper.js");

module.exports = function (ErpUser) {

  // ERP roles named - they get initialized in server/boot/create-roles.js
  ErpUser.SUPPLY_CHAIN_MANAGER_ROLE = "supplychainmanager";
  ErpUser.RETAIL_STORE_MANAGER_ROLE = "retailstoremanager";
  
  // remove all remote API methods, leaving only login/logout and token management
  helper.readOnly(ErpUser);
  ErpUser.disableRemoteMethod('find', true);
  ErpUser.disableRemoteMethod('findById', true);
  ErpUser.disableRemoteMethod('confirm', true);
  ErpUser.disableRemoteMethod('resetPassword', true);
};
//------------------------------------------------------------------------------
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------