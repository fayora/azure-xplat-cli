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
  .filteringRequestBody(function (path) { return '*';})
<<<<<<< HEAD
.patch('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d/profileresults/cliTestProfile01?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '66d2dd76-4a5a-4e56-9450-a55d58e5366a',
  'x-ms-client-request-id': '4011bdec-b5bc-4e1d-b027-39dffae59072',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d?api-version=2016-04-02',
=======
.patch('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d/profileresults/cliTestProfile01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '180c3639-9982-4ab5-8b02-7f9fea2d9995',
  'x-ms-client-request-id': '5a13efe0-33df-4fe9-a7f7-b6403d86a2a9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ba97c40f-5edc-4fbe-8dee-ca9fe74967ed',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175228Z:ba97c40f-5edc-4fbe-8dee-ca9fe74967ed',
  date: 'Thu, 12 May 2016 17:52:28 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '8c262a32-06d4-4bc2-81a3-18dedf137274',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121607Z:8c262a32-06d4-4bc2-81a3-18dedf137274',
  date: 'Wed, 18 May 2016 12:16:06 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
<<<<<<< HEAD
.patch('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d/profileresults/cliTestProfile01?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '66d2dd76-4a5a-4e56-9450-a55d58e5366a',
  'x-ms-client-request-id': '4011bdec-b5bc-4e1d-b027-39dffae59072',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d?api-version=2016-04-02',
=======
.patch('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d/profileresults/cliTestProfile01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '180c3639-9982-4ab5-8b02-7f9fea2d9995',
  'x-ms-client-request-id': '5a13efe0-33df-4fe9-a7f7-b6403d86a2a9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ba97c40f-5edc-4fbe-8dee-ca9fe74967ed',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175228Z:ba97c40f-5edc-4fbe-8dee-ca9fe74967ed',
  date: 'Thu, 12 May 2016 17:52:28 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '8c262a32-06d4-4bc2-81a3-18dedf137274',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121607Z:8c262a32-06d4-4bc2-81a3-18dedf137274',
  date: 'Wed, 18 May 2016 12:16:06 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'd684fc95-dbfd-4c96-95fc-165e856f2438',
  'x-ms-client-request-id': '03eea409-2c14-4bb7-926b-4a0adf67d683',
=======
  'x-ms-request-id': '318f1f76-a074-42c1-8f39-90938674444a',
  'x-ms-client-request-id': 'c1ec262a-0a0a-4b1a-88ce-65ae87f9b153',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'fcffc72c-0a20-427f-ac06-334766929c7a',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175259Z:fcffc72c-0a20-427f-ac06-334766929c7a',
  date: 'Thu, 12 May 2016 17:52:58 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '18aea129-4680-4f54-b2ba-3ae657f6a6c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121638Z:18aea129-4680-4f54-b2ba-3ae657f6a6c1',
  date: 'Wed, 18 May 2016 12:16:38 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/5c4a0a83-f0a3-4b7b-bb1d-9c743126f31d?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/9d6704a7-024f-4363-af13-2aa831ca853d?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': 'd684fc95-dbfd-4c96-95fc-165e856f2438',
  'x-ms-client-request-id': '03eea409-2c14-4bb7-926b-4a0adf67d683',
=======
  'x-ms-request-id': '318f1f76-a074-42c1-8f39-90938674444a',
  'x-ms-client-request-id': 'c1ec262a-0a0a-4b1a-88ce-65ae87f9b153',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'fcffc72c-0a20-427f-ac06-334766929c7a',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175259Z:fcffc72c-0a20-427f-ac06-334766929c7a',
  date: 'Thu, 12 May 2016 17:52:58 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '18aea129-4680-4f54-b2ba-3ae657f6a6c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121638Z:18aea129-4680-4f54-b2ba-3ae657f6a6c1',
  date: 'Wed, 18 May 2016 12:16:38 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '994e2234-cf07-49c5-969b-eb4c039142c1',
  'x-ms-client-request-id': '29b2960b-cc12-463f-bad6-a5d33378ab8d',
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '1c5c5382-7c74-43b1-a7a2-f77e94b21e54',
  'x-ms-client-request-id': 'a32e0103-fcfa-4515-870d-97ebd4547a75',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6fd3fe9a-97c4-44fe-a7f5-914a5e214243',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175300Z:6fd3fe9a-97c4-44fe-a7f5-914a5e214243',
  date: 'Thu, 12 May 2016 17:52:59 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '26d58f08-d214-4ab4-ae52-ae6893e7fe25',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121639Z:26d58f08-d214-4ab4-ae52-ae6893e7fe25',
  date: 'Wed, 18 May 2016 12:16:39 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '994e2234-cf07-49c5-969b-eb4c039142c1',
  'x-ms-client-request-id': '29b2960b-cc12-463f-bad6-a5d33378ab8d',
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '1c5c5382-7c74-43b1-a7a2-f77e94b21e54',
  'x-ms-client-request-id': 'a32e0103-fcfa-4515-870d-97ebd4547a75',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6fd3fe9a-97c4-44fe-a7f5-914a5e214243',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175300Z:6fd3fe9a-97c4-44fe-a7f5-914a5e214243',
  date: 'Thu, 12 May 2016 17:52:59 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '26d58f08-d214-4ab4-ae52-ae6893e7fe25',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121639Z:26d58f08-d214-4ab4-ae52-ae6893e7fe25',
  date: 'Wed, 18 May 2016 12:16:39 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; }]];