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
.put('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '815',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '784e59d3-414b-4a31-bdb2-e8c3ce7de992',
  'x-ms-client-request-id': 'cf128aa8-ba6c-4175-9aee-3608d65f34f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/81a552a1-a822-4202-b523-547a5ca92a15?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'eb9501d8-e702-4e4f-ada2-d161cd12ba32',
  'x-ms-routing-request-id': 'WESTUS:20160317T183627Z:eb9501d8-e702-4e4f-ada2-d161cd12ba32',
  date: 'Thu, 17 Mar 2016 18:36:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '815',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '784e59d3-414b-4a31-bdb2-e8c3ce7de992',
  'x-ms-client-request-id': 'cf128aa8-ba6c-4175-9aee-3608d65f34f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/81a552a1-a822-4202-b523-547a5ca92a15?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'eb9501d8-e702-4e4f-ada2-d161cd12ba32',
  'x-ms-routing-request-id': 'WESTUS:20160317T183627Z:eb9501d8-e702-4e4f-ada2-d161cd12ba32',
  date: 'Thu, 17 Mar 2016 18:36:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/81a552a1-a822-4202-b523-547a5ca92a15?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'cd315a8f-1aa5-46fc-9c5b-2a715320b8b8',
  'x-ms-client-request-id': '9563b13d-473a-447a-a337-1701a2d31913',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'eaaa3931-2b00-4f28-a24d-65ef82031a59',
  'x-ms-routing-request-id': 'WESTUS:20160317T183657Z:eaaa3931-2b00-4f28-a24d-65ef82031a59',
  date: 'Thu, 17 Mar 2016 18:36:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/81a552a1-a822-4202-b523-547a5ca92a15?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'cd315a8f-1aa5-46fc-9c5b-2a715320b8b8',
  'x-ms-client-request-id': '9563b13d-473a-447a-a337-1701a2d31913',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'eaaa3931-2b00-4f28-a24d-65ef82031a59',
  'x-ms-routing-request-id': 'WESTUS:20160317T183657Z:eaaa3931-2b00-4f28-a24d-65ef82031a59',
  date: 'Thu, 17 Mar 2016 18:36:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '815',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f3a946a4-e8a3-4696-b454-f5b997ffdf85',
  'x-ms-client-request-id': 'a6c82b0b-29fe-4ab7-ae5b-2a5e81ae0133',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '633b2541-aa9f-4e04-8667-179322c72760',
  'x-ms-routing-request-id': 'WESTUS:20160317T183658Z:633b2541-aa9f-4e04-8667-179322c72760',
  date: 'Thu, 17 Mar 2016 18:36:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin01\",\"properties\":{\r\n          \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '815',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f3a946a4-e8a3-4696-b454-f5b997ffdf85',
  'x-ms-client-request-id': 'a6c82b0b-29fe-4ab7-ae5b-2a5e81ae0133',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '633b2541-aa9f-4e04-8667-179322c72760',
  'x-ms-routing-request-id': 'WESTUS:20160317T183658Z:633b2541-aa9f-4e04-8667-179322c72760',
  date: 'Thu, 17 Mar 2016 18:36:58 GMT',
  connection: 'close' });
 return result; }]];