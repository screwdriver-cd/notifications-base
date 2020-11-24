# Notifications Base
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] ![License][license-image]

> Base class for defining the behavior between screwdriver and notifications plugins

## Usage

```bash
npm install screwdriver-notifications-base
```

## Interface
This is an interface for receiving Screwdriver API events and sending notification to users based on their job settings.

### notify

#### Expected Outcome

Notify the user based on their job settings, e.g. [email](https://github.com/screwdriver-cd/notifications-email), [slack](https://github.com/screwdriver-cd/notifications-slack).

## Extending
To extend the base class, the functions to override are:
1. `_notify`
2. `events` (optional)

Override `events` if you want to send notification based on other events.

## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-notifications-base.svg
[npm-url]: https://npmjs.org/package/screwdriver-notifications-base
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-notifications-base.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-notifications-base.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/notifications-base.svg
[issues-url]: https://github.com/screwdriver-cd/notifications-base/issues
[status-image]: https://cd.screwdriver.cd/pipelines/133/badge
[status-url]: https://cd.screwdriver.cd/pipelines/133
