// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: 'microsoft.com',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360\",\"name\":\"xplattestiothub4360\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABgtSY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub4360.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub4360\",\"endpoint\":\"sb://iothub-ns-xplattesti-67354-aad4a180b7.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub4360-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-67354-aad4a180b7.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': '4e2040bd-aa57-4c16-ac99-70a974296d44',
  'x-ms-correlation-request-id': '4e2040bd-aa57-4c16-ac99-70a974296d44',
  'x-ms-routing-request-id': 'WESTUS2:20160913T004143Z:4e2040bd-aa57-4c16-ac99-70a974296d44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 13 Sep 2016 00:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360\",\"name\":\"xplattestiothub4360\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABgtSY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub4360.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub4360\",\"endpoint\":\"sb://iothub-ns-xplattesti-67354-aad4a180b7.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub4360-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-67354-aad4a180b7.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': '4e2040bd-aa57-4c16-ac99-70a974296d44',
  'x-ms-correlation-request-id': '4e2040bd-aa57-4c16-ac99-70a974296d44',
  'x-ms-routing-request-id': 'WESTUS2:20160913T004143Z:4e2040bd-aa57-4c16-ac99-70a974296d44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 13 Sep 2016 00:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"IXD+XhhRSRo14KeDeUOHXsFPSL7iP+xomUbYLDfm9QY=\",\"secondaryKey\":\"o0v6y5bcGxdu9AYnwRczI50JYWb7pBODuwdXGzC2e14=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"DJ2OKLdl5nIrXOOPyhYzbLB4UTD8+cwJ6+ktkTPyp3k=\",\"secondaryKey\":\"0mAwrEbM5GqlGLb9hs/15vSJ/bY2VgvwfXZJ5jxsPHw=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"LpNrFjal765kC9lkYZo7IYjGqnoPs+GkNtiC/pLuN4A=\",\"secondaryKey\":\"xJ0rqm0SmexmFOGFHpesrOVOekRCrIdYe4i18z+7O7w=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"+M96WP5Tf0Fg/ALAn4p7lHSbv3l+J2+EGAfSMeE0IkY=\",\"secondaryKey\":\"h3w5/nW6a6n4IV0jukOxd5DTYchiGmcUuZ3GoP2lHSQ=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"U75Dd7OD1r0oMRKwJ+6p3lCazrR5myFRYgd/V4oeIQ4=\",\"secondaryKey\":\"zsjGMk36HiWE6SlNMQ4eaZAW/cKVHQtXGiXCcpUlyvk=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '76e3a62a-8a20-44bc-863a-c38f264753f5',
  'x-ms-correlation-request-id': '76e3a62a-8a20-44bc-863a-c38f264753f5',
  'x-ms-routing-request-id': 'WESTUS2:20160913T004143Z:76e3a62a-8a20-44bc-863a-c38f264753f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 13 Sep 2016 00:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub4360/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"IXD+XhhRSRo14KeDeUOHXsFPSL7iP+xomUbYLDfm9QY=\",\"secondaryKey\":\"o0v6y5bcGxdu9AYnwRczI50JYWb7pBODuwdXGzC2e14=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"DJ2OKLdl5nIrXOOPyhYzbLB4UTD8+cwJ6+ktkTPyp3k=\",\"secondaryKey\":\"0mAwrEbM5GqlGLb9hs/15vSJ/bY2VgvwfXZJ5jxsPHw=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"LpNrFjal765kC9lkYZo7IYjGqnoPs+GkNtiC/pLuN4A=\",\"secondaryKey\":\"xJ0rqm0SmexmFOGFHpesrOVOekRCrIdYe4i18z+7O7w=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"+M96WP5Tf0Fg/ALAn4p7lHSbv3l+J2+EGAfSMeE0IkY=\",\"secondaryKey\":\"h3w5/nW6a6n4IV0jukOxd5DTYchiGmcUuZ3GoP2lHSQ=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"U75Dd7OD1r0oMRKwJ+6p3lCazrR5myFRYgd/V4oeIQ4=\",\"secondaryKey\":\"zsjGMk36HiWE6SlNMQ4eaZAW/cKVHQtXGiXCcpUlyvk=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '76e3a62a-8a20-44bc-863a-c38f264753f5',
  'x-ms-correlation-request-id': '76e3a62a-8a20-44bc-863a-c38f264753f5',
  'x-ms-routing-request-id': 'WESTUS2:20160913T004143Z:76e3a62a-8a20-44bc-863a-c38f264753f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 13 Sep 2016 00:41:43 GMT',
  connection: 'close' });
 return result; }]];