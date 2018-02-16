# Ideagen Timeline SDK

This lib provides an SDK for the Timeline API from Ideagen. See the API code [here](https://github.com/gael-ltd/IdeagenGCU2018)

## Usage

This library is intended to be used with NodeJS. It work on the front-end and on the back-end. In order to use it in the browser, you might consider using JavaScript bundler, such as [Webpack](https://webpack.js.org) as well as a javascript compiler, such as [Babel](https://babeljs.io)

### Install

This Library works with NodeJS and is available in the npm registry. To install it execute:

```
npm install --save ideagen-timeline-sdk
```

### Initialisation

We can use the API by instantiating new timelineSDK object:

```js
var IdeagenTimelineSDK = require('ideagen-timeline-sdk')
var ideagenTimelineSDK = new ideagenTimelineSDK({
  TenantId: 'PUT YOUR TENANT ID HERE',
  AuthToken: 'PUT YOUR AUTH TOKEN HERE'
})
```

### Timelines

#### Create Timeline

```js
ideagenTimelineSDK.timelines
  .create({
    TimelineId: '1234',
    Title: 'Some Title'
  })
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Edit Timeline Title

```js
ideagenTimelineSDK.timelines
  .editTimelineTitle('1234', 'New title')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Retrieve Timeline

```js
ideagenTimelineSDK.timelines
  .get('1234')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### List Timelines

```js
ideagenTimelineSDK.timelines
  .getAll()
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Delete Timeline

```js
ideagenTimelineSDK.timelines
  .delete('1234')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Link Event to Timeline

```js
ideagenTimelineSDK.timelines
  .linkEvent('TimelineId', 'EventId')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Unlink Event from Timeline

```js
ideagenTimelineSDK.timelines
  .unlinkEvent('TimelineId', 'EventId')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Get Timeline Linked Events

```js
ideagenTimelineSDK.timelines
  .getLinkedEvents('TimelineId')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```


### TimelineEvent

#### Create Timeline Event

```js
ideagenTimelineSDK.timelineEvents
  .create({
    TimelineEventId: '1234',
    Title: 'TestTitle',
    Description: 'TestDescription',
    EventDateTime: 'EventDateTime',
    Location: 'Location'
  })
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Retrieve Timeline Event

```js
ideagenTimelineSDK.timelineEvents
  .get('1234')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Edit Timeline Event Title

```js
ideagenTimelineSDK.timelineEvents
  .editTitle('1234', 'New Title')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Edit Timeline Event Description

```js
ideagenTimelineSDK.timelineEvents
  .editDescription('1234', 'New Description')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Edit Timeline Event Location

```js
ideagenTimelineSDK.timelineEvents
  .editLocation('1234', 'New Location')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Edit Timeline Event DateTime

```js
ideagenTimelineSDK.timelineEvents
  .editDateTime('1234', 'New Date Time')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

#### Delete Timeline Event

```js
ideagenTimelineSDK.timelineEvents
  .delete('1234')
  .then(function (response) {
    // response is the response object from the server
    console.log(response)
  })
  .catch(function (error) {
    // error is the error message
    console.error(error)
  })
```

## Contribution

### How to Install for Development:

1. You need to install `node` and `npm`.

  * `node` version: v8.9.1
  * `npm` version: 5.6.0

2. Clone the repository

  ```bash
  git clone https://github.com/dirchev/ip3-ideagen-timeline-sdk
  ```

3. Enter the folder

  ```bash
  cd ./ip3-ideagen-timeline-sdk
  ```

4. Install dependencies

  ```bash
  npm install
  ```

5. Run Tests

  ```bash
  npm test
  ```

### Bugs and New Features

Feel free to report bugs or suggest new features [here](https://github.com/dirchev/ip3-ideagen-timeline-sdk/issues).

### Contribution

If you want to fix/update/improve something - fork and create a PR to this repository. **Please write/update the tests!**
