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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/operationresults/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '642cecab-be9d-4213-a025-fff53656abe4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1a64f468-fb5b-4eac-986c-aff48717c953',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084142Z:1a64f468-fb5b-4eac-986c-aff48717c953',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:41:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cfca3c92-c8fb-4ebe-928c-ca946bb59b01',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '502643cd-68a0-41ab-a4db-6c99b31d6e81',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084243Z:502643cd-68a0-41ab-a4db-6c99b31d6e81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:42:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '329ee787-8e7c-432e-b8ca-cc3feac86b26',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '8fe1ee3d-f353-440d-96b9-8ca9351abea2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084343Z:8fe1ee3d-f353-440d-96b9-8ca9351abea2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:43:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a89d1fed-90ea-45cc-81d5-affee65a4c61',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'ea137abd-ce63-4580-bbd5-7919e73189d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084444Z:ea137abd-ce63-4580-bbd5-7919e73189d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:44:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7d6ff796-e57c-4605-a0d3-8def22ecb424',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'fb40335e-2e9e-422b-a571-009a9547ed28',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084545Z:fb40335e-2e9e-422b-a571-009a9547ed28',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:45:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/changerdpsetting/azureasyncoperations/5b04aa6b-7716-4967-8170-357ebe2d563f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7a074862-2c57-4e7b-97df-6d19bb39c5d9',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'f07902b1-4b09-49c8-8cb2-3b8d3bfb2cf6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T084646Z:f07902b1-4b09-49c8-8cb2-3b8d3bfb2cf6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:46:45 GMT' });
 return result; }]];