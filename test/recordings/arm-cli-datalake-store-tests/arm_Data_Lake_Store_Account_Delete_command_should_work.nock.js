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
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3769.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:16:52.6833124Z\",\"lastModifiedTime\":\"2016-03-16T22:16:52.6833124Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls3769\",\"name\":\"xplattestadls3769\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3318',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'cda7833c-307b-4795-a5ef-6e04db17bfb3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '69c32849-0670-4b81-95ea-bbb247b10f37',
  'x-ms-routing-request-id': 'WESTUS:20160316T221806Z:69c32849-0670-4b81-95ea-bbb247b10f37',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1071.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:17:25.9736492Z\",\"lastModifiedTime\":\"2016-03-16T22:18:04.0289013Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071\",\"name\":\"xplattestadls1071\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3769.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:16:52.6833124Z\",\"lastModifiedTime\":\"2016-03-16T22:16:52.6833124Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls3769\",\"name\":\"xplattestadls3769\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3318',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'cda7833c-307b-4795-a5ef-6e04db17bfb3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '69c32849-0670-4b81-95ea-bbb247b10f37',
  'x-ms-routing-request-id': 'WESTUS:20160316T221806Z:69c32849-0670-4b81-95ea-bbb247b10f37',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5febf300-2e42-40fb-919c-e04ad1224248',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'accaa234-1b08-40ef-b97f-2a2389f824f5',
  'x-ms-routing-request-id': 'WESTUS:20160316T221809Z:accaa234-1b08-40ef-b97f-2a2389f824f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1071?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5febf300-2e42-40fb-919c-e04ad1224248',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'accaa234-1b08-40ef-b97f-2a2389f824f5',
  'x-ms-routing-request-id': 'WESTUS:20160316T221809Z:accaa234-1b08-40ef-b97f-2a2389f824f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3769.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:16:52.6833124Z\",\"lastModifiedTime\":\"2016-03-16T22:16:52.6833124Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls3769\",\"name\":\"xplattestadls3769\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2778',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bb77eeb7-d6ef-448e-a05c-09f143287939',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '757771bb-11c8-427d-a820-256509e5fe75',
  'x-ms-routing-request-id': 'WESTUS:20160316T221809Z:757771bb-11c8-427d-a820-256509e5fe75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3769.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T22:16:52.6833124Z\",\"lastModifiedTime\":\"2016-03-16T22:16:52.6833124Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls3769\",\"name\":\"xplattestadls3769\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2778',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bb77eeb7-d6ef-448e-a05c-09f143287939',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '757771bb-11c8-427d-a820-256509e5fe75',
  'x-ms-routing-request-id': 'WESTUS:20160316T221809Z:757771bb-11c8-427d-a820-256509e5fe75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:09 GMT',
  connection: 'close' });
 return result; }]];