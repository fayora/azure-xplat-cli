// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-0a51dd4a-33ca-4c25-91d7-42ae35c12cdd.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/stop?api-version=2016-04-02')
=======
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/stop?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd2a6585e-997d-4f9a-a035-c377fd312f6e',
  'x-ms-client-request-id': 'b9226cc6-6555-4c1d-ad02-7118e29dd8c8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa?api-version=2016-04-02',
=======
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '10364458-c09d-45f9-9558-4c25fb7a0272',
  'x-ms-client-request-id': '5c11a83f-917d-443a-a285-c369e7a449a3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4982a39a-d2c9-473f-b270-27a33abe7221',
  'x-ms-routing-request-id': 'WESTUS:20160512T175417Z:4982a39a-d2c9-473f-b270-27a33abe7221',
  date: 'Thu, 12 May 2016 17:54:17 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'f89415a1-759f-472b-9407-f50bba4ee956',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121807Z:f89415a1-759f-472b-9407-f50bba4ee956',
  date: 'Wed, 18 May 2016 12:18:07 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/stop?api-version=2016-04-02')
=======
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/stop?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd2a6585e-997d-4f9a-a035-c377fd312f6e',
  'x-ms-client-request-id': 'b9226cc6-6555-4c1d-ad02-7118e29dd8c8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa?api-version=2016-04-02',
=======
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '10364458-c09d-45f9-9558-4c25fb7a0272',
  'x-ms-client-request-id': '5c11a83f-917d-443a-a285-c369e7a449a3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4982a39a-d2c9-473f-b270-27a33abe7221',
  'x-ms-routing-request-id': 'WESTUS:20160512T175417Z:4982a39a-d2c9-473f-b270-27a33abe7221',
  date: 'Thu, 12 May 2016 17:54:17 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'f89415a1-759f-472b-9407-f50bba4ee956',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121807Z:f89415a1-759f-472b-9407-f50bba4ee956',
  date: 'Wed, 18 May 2016 12:18:07 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '1aa8a18f-1018-476c-a5ba-0a7e52774c91',
  'x-ms-client-request-id': '3f771d37-2059-43c3-a0ad-f82516b5dce3',
=======
  'x-ms-request-id': '142400fb-f1e6-426e-aa16-72aa9ffb8683',
  'x-ms-client-request-id': '12028240-fa79-4fee-b56e-cf83dc09a052',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe9d2985-d2ca-456a-914a-f4b5349e13c5',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175448Z:fe9d2985-d2ca-456a-914a-f4b5349e13c5',
  date: 'Thu, 12 May 2016 17:54:47 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6c9a88f7-02bc-4d76-8a94-eca3f0862204',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121838Z:6c9a88f7-02bc-4d76-8a94-eca3f0862204',
  date: 'Wed, 18 May 2016 12:18:38 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/a1784da5-eace-4e5d-b86e-796437c204fa?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9a20f28b-a452-4f3f-8d55-bd1608854d67?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '1aa8a18f-1018-476c-a5ba-0a7e52774c91',
  'x-ms-client-request-id': '3f771d37-2059-43c3-a0ad-f82516b5dce3',
=======
  'x-ms-request-id': '142400fb-f1e6-426e-aa16-72aa9ffb8683',
  'x-ms-client-request-id': '12028240-fa79-4fee-b56e-cf83dc09a052',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe9d2985-d2ca-456a-914a-f4b5349e13c5',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175448Z:fe9d2985-d2ca-456a-914a-f4b5349e13c5',
  date: 'Thu, 12 May 2016 17:54:47 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6c9a88f7-02bc-4d76-8a94-eca3f0862204',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121838Z:6c9a88f7-02bc-4d76-8a94-eca3f0862204',
  date: 'Wed, 18 May 2016 12:18:38 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; }]];