// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c',
    name: 'Insights Org Sub2',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'e58d7273-6738-4be8-9c6e-82863ed7b695',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"type\":null,\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/microsoft.classicstorage/storageAccounts/sbeastus1a1\",\"serviceBusRuleId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-ServiceBus-EastUS/providers/Microsoft.ServiceBus/namespaces/tseastus/authorizationrules/RootManageSharedAccessKey\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '904',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b2f97b2e-d31d-470a-a5ce-3ba365619bbe',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'aed77484-dbc8-47f0-a423-26d623501dbf',
  'x-ms-routing-request-id': 'CENTRALUS:20160718T214424Z:aed77484-dbc8-47f0-a423-26d623501dbf',
  date: 'Mon, 18 Jul 2016 21:44:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/%2Fsubscriptions%2F4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c%2FresourceGroups%2Finsights-integration%2Fproviders%2Ftest.shoebox%2Ftestresources2%2F0000000000eastusR2/providers/microsoft.insights/diagnosticSettings/service?api-version=2015-07-01')
  .reply(200, "{\"id\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourcegroups/insights-integration/providers/test.shoebox/testresources2/0000000000eastusr2/diagnosticSettings/service\",\"type\":null,\"name\":\"service\",\"location\":null,\"tags\":null,\"properties\":{\"storageAccountId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/microsoft.classicstorage/storageAccounts/sbeastus1a1\",\"serviceBusRuleId\":\"/subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/Default-ServiceBus-EastUS/providers/Microsoft.ServiceBus/namespaces/tseastus/authorizationrules/RootManageSharedAccessKey\",\"metrics\":[{\"timeGrain\":\"PT1M\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}}],\"logs\":[{\"category\":\"TestLog1\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}},{\"category\":\"TestLog2\",\"enabled\":true,\"retentionPolicy\":{\"enabled\":false,\"days\":0}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '904',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b2f97b2e-d31d-470a-a5ce-3ba365619bbe',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'aed77484-dbc8-47f0-a423-26d623501dbf',
  'x-ms-routing-request-id': 'CENTRALUS:20160718T214424Z:aed77484-dbc8-47f0-a423-26d623501dbf',
  date: 'Mon, 18 Jul 2016 21:44:24 GMT',
  connection: 'close' });
 return result; }]];