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
  .delete('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles/cliTestProfile02?api-version=2016-04-02')
=======
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed/profileresults/cliTestProfile02?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '688d144a-5082-46f9-83b4-aa6270fb95c2',
  'x-ms-client-request-id': '12fb941d-a8e9-4448-b6ea-13cc2d4f8b33',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed?api-version=2016-04-02',
=======
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710/profileresults/cliTestProfile02?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '9bca2f29-4208-4bc5-8029-518158069982',
  'x-ms-client-request-id': '22eec62b-b2ca-4140-aa30-2d7fc3682e15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '512dcf3b-ba57-44f3-9d28-ea866c696f7d',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175304Z:512dcf3b-ba57-44f3-9d28-ea866c696f7d',
  date: 'Thu, 12 May 2016 17:53:04 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9c404eb2-8961-420d-ae0f-b1ba2ca20a19',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121644Z:9c404eb2-8961-420d-ae0f-b1ba2ca20a19',
  date: 'Wed, 18 May 2016 12:16:43 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .delete('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles/cliTestProfile02?api-version=2016-04-02')
=======
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
<<<<<<< HEAD
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed/profileresults/cliTestProfile02?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '688d144a-5082-46f9-83b4-aa6270fb95c2',
  'x-ms-client-request-id': '12fb941d-a8e9-4448-b6ea-13cc2d4f8b33',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed?api-version=2016-04-02',
=======
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710/profileresults/cliTestProfile02?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '9bca2f29-4208-4bc5-8029-518158069982',
  'x-ms-client-request-id': '22eec62b-b2ca-4140-aa30-2d7fc3682e15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710?api-version=2015-06-01',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '512dcf3b-ba57-44f3-9d28-ea866c696f7d',
  'x-ms-routing-request-id': 'CENTRALUS:20160512T175304Z:512dcf3b-ba57-44f3-9d28-ea866c696f7d',
  date: 'Thu, 12 May 2016 17:53:04 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9c404eb2-8961-420d-ae0f-b1ba2ca20a19',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121644Z:9c404eb2-8961-420d-ae0f-b1ba2ca20a19',
  date: 'Wed, 18 May 2016 12:16:43 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '15070012-f942-4215-bf0b-b8150878f22e',
  'x-ms-client-request-id': '539f789c-e612-4f44-9719-fe59058cf1b5',
=======
  'x-ms-request-id': 'fbc58f91-65c3-4679-9860-1cf2465c298a',
  'x-ms-client-request-id': '1a7e1115-7157-4ad6-b943-270bb4192e7c',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bf426655-7ea0-4a86-a10d-9278b4ab31de',
  'x-ms-routing-request-id': 'WESTUS:20160512T175336Z:bf426655-7ea0-4a86-a10d-9278b4ab31de',
  date: 'Thu, 12 May 2016 17:53:35 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '17b2f42f-e376-4f59-bbb6-4cb57c8a1e6b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121715Z:17b2f42f-e376-4f59-bbb6-4cb57c8a1e6b',
  date: 'Wed, 18 May 2016 12:17:14 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
<<<<<<< HEAD
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/operationresults/2dbbe6f9-389d-4f2d-96d7-7a5bd2a95bed?api-version=2016-04-02')
=======
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/6195651a-1eaa-4355-9603-539475989710?api-version=2015-06-01')
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
<<<<<<< HEAD
  'x-ms-request-id': '15070012-f942-4215-bf0b-b8150878f22e',
  'x-ms-client-request-id': '539f789c-e612-4f44-9719-fe59058cf1b5',
=======
  'x-ms-request-id': 'fbc58f91-65c3-4679-9860-1cf2465c298a',
  'x-ms-client-request-id': '1a7e1115-7157-4ad6-b943-270bb4192e7c',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
<<<<<<< HEAD
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bf426655-7ea0-4a86-a10d-9278b4ab31de',
  'x-ms-routing-request-id': 'WESTUS:20160512T175336Z:bf426655-7ea0-4a86-a10d-9278b4ab31de',
  date: 'Thu, 12 May 2016 17:53:35 GMT',
=======
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '17b2f42f-e376-4f59-bbb6-4cb57c8a1e6b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121715Z:17b2f42f-e376-4f59-bbb6-4cb57c8a1e6b',
  date: 'Wed, 18 May 2016 12:17:14 GMT',
>>>>>>> c4f17632f7ab041ad57b28406843793290310fac
  connection: 'close' });
 return result; }]];