// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b',
    name: 'KasotaTest-001',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrg01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrg02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-1-406f580d-a634-4077-9b11-216a70c5998d.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/origins/cliTestOrigin02?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestOrigin02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/origins/cliTestOrigin02\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"testtest.azure.com\",\"httpPort\":500,\"httpsPort\":501\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/1e608f10-f7c4-4017-a534-fed1c0f8b76c/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint02/originresults/cliTestOrigin02?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '64d9aa54-ee12-4cf4-a321-d546b9c6d5f4',
  'x-ms-client-request-id': '918cea2c-077c-4a3e-a8ed-ace9b810f956',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/1e608f10-f7c4-4017-a534-fed1c0f8b76c?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b81919eb-2855-4a4a-8fac-a36029b872e2',
  'x-ms-routing-request-id': 'WESTUS:20160317T184023Z:b81919eb-2855-4a4a-8fac-a36029b872e2',
  date: 'Thu, 17 Mar 2016 18:40:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/origins/cliTestOrigin02?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestOrigin02\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/origins/cliTestOrigin02\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"testtest.azure.com\",\"httpPort\":500,\"httpsPort\":501\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/1e608f10-f7c4-4017-a534-fed1c0f8b76c/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint02/originresults/cliTestOrigin02?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '64d9aa54-ee12-4cf4-a321-d546b9c6d5f4',
  'x-ms-client-request-id': '918cea2c-077c-4a3e-a8ed-ace9b810f956',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/1e608f10-f7c4-4017-a534-fed1c0f8b76c?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b81919eb-2855-4a4a-8fac-a36029b872e2',
  'x-ms-routing-request-id': 'WESTUS:20160317T184023Z:b81919eb-2855-4a4a-8fac-a36029b872e2',
  date: 'Thu, 17 Mar 2016 18:40:23 GMT',
  connection: 'close' });
 return result; }]];