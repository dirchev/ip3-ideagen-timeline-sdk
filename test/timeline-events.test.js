var AxiousMock = require('./axious-mock')
var TimelineEventsAPI = require('../src/timeline-events')

var axiosMock = new AxiousMock()
var timelineEvents = new TimelineEventsAPI({
  TenantId: 'TestTenant',
  AuthToken: 'TestAuth'
}, axiosMock)

test('TimelineEvent Create', function () {
  timelineEvents.create({
    TimelineEventId: '1234',
    Title: 'TestTitle',
    Description: 'TestDescription',
    EventDateTime: 'EventDateTime',
    Location: 'Location'
  })

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/Create')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
    Title: 'TestTitle',
    Description: 'TestDescription',
    EventDateTime: 'EventDateTime',
    Location: 'Location'
  })
})

test('TimelineEvent Get', function () {
  timelineEvents.get('1234', {
    TimelineEventId: '1234',
  })

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('GET')
  expect(request.route).toEqual('/TimelineEvent/GetTimelineEvent')
  expect(request.config.headers).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
  })
})

test('TimelineEvent Edit Title', function () {
  timelineEvents.editTitle('1234', 'New Title')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/EditTitle')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
    Title: 'New Title',
  })
})

test('TimelineEvent Edit Description', function () {
  timelineEvents.editDescription('1234', 'New Description')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/EditDescription')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
    Description: 'New Description',
  })
})

test('TimelineEvent Edit Location', function () {
  timelineEvents.editLocation('1234', 'New Location')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/EditLocation')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
    Location: 'New Location',
  })
})

test('TimelineEvent Edit DateTime', function () {
  timelineEvents.editDateTime('1234', 'New Datetime')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/EditEventDateTime')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
    EventDateTime: 'New Datetime',
  })
})

test('TimelineEvent Delete', function () {
  timelineEvents.delete('1234')

  var request = axiosMock.requests.pop()
  expect(request.method).toEqual('PUT')
  expect(request.route).toEqual('/TimelineEvent/Delete')
  expect(request.data).toEqual({
    AuthToken: 'TestAuth',
    TenantId: 'TestTenant',
    TimelineEventId: '1234',
  })
})
