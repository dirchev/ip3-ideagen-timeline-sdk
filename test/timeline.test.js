var AxiousMock = require('./axious-mock')
var TimelinesAPI = require('../src/timelines')

var axiosMock = new AxiousMock()
var timelines = new TimelinesAPI({
  TenantId: 'TestTenant',
  AuthToken: 'TestAuth'
}, axiosMock)

test('Timeline Create', function () {
  timelines.create({TimelineId: '1234', Title: 'TestTitle'})

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/Timeline/Create')
  expect(request.data).toEqual({
    TimelineId: '1234',
    Title: 'TestTitle',
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant'
  })
})

test('Timeline Edit Title', function () {
  timelines.editTitle('1234', 'TestTitle2')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/Timeline/EditTitle')
  expect(request.data).toEqual({
    TimelineId: '1234',
    Title: 'TestTitle2',
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant'
  })
})

test('Timeline Get All', function () {
  timelines.getAll()

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('GET')
  expect(request.route).toEqual('/Timeline/GetTimelines')
  expect(request.config.headers).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant'
  })
})

test('Timeline Get One', function () {
  timelines.get('12345')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('GET')
  expect(request.route).toEqual('/Timeline/GetTimeline')
  expect(request.config.headers).toEqual({
    TimelineId: '12345',
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant'
  })
})

test('Timeline Delete', function () {
  timelines.delete('12345')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/Timeline/Delete')
  expect(request.data).toEqual({
    TimelineId: '12345',
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant'
  })
})
