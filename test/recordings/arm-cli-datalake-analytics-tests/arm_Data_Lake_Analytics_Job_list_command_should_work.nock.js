// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla6056.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"5440d828-dac1-48e1-b346-2c88c51ce2c8\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:28:25 GMT\",\"startTime\":\"Wed, 23 Mar 2016 23:29:10 GMT\",\"endTime\":\"Wed, 23 Mar 2016 23:29:14 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"012c00be-5c0b-40b6-8f81-a56a0f9a0e23\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:28:26 GMT\",\"startTime\":\"Wed, 23 Mar 2016 23:29:06 GMT\",\"endTime\":\"Wed, 23 Mar 2016 23:29:10 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"0af62ada-a719-427b-8a00-e1a2d3cc85a4\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:29:35 GMT\",\"startTime\":null,\"endTime\":\"Wed, 23 Mar 2016 23:29:36 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '003e83bf-72bb-4abd-b9b5-295d3e5c815a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 23 Mar 2016 23:29:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla6056.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"5440d828-dac1-48e1-b346-2c88c51ce2c8\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:28:25 GMT\",\"startTime\":\"Wed, 23 Mar 2016 23:29:10 GMT\",\"endTime\":\"Wed, 23 Mar 2016 23:29:14 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"012c00be-5c0b-40b6-8f81-a56a0f9a0e23\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:28:26 GMT\",\"startTime\":\"Wed, 23 Mar 2016 23:29:06 GMT\",\"endTime\":\"Wed, 23 Mar 2016 23:29:10 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"0af62ada-a719-427b-8a00-e1a2d3cc85a4\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Wed, 23 Mar 2016 23:29:35 GMT\",\"startTime\":null,\"endTime\":\"Wed, 23 Mar 2016 23:29:36 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '003e83bf-72bb-4abd-b9b5-295d3e5c815a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 23 Mar 2016 23:29:39 GMT',
  connection: 'close' });
 return result; }]];