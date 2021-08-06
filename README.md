# modsen-toast

Toast notification library for Modsen LLC.

## Content

- [Usage](#usage)
- [Structure overview](#structure-overview)

## Usage

Library provides 2 entities:

1. `ToastsStack` - configurable toasts container
2. `sendNotification` - function to send the notification

### Configuring toasts container

`ToastsStack` component represents both toasts container and configuration provider for the library.
It enables You to specify following options:

1. `position` - where to place toasts container (either `'top-right'`, `'top-left'`, `'bottom-right'` or `'bottom-left'`).
2. `parentNode` - function which must return a DOM node to which toasts container will be mounted.
3. `edgeDistance` - distance between toasts and parent node.
4. `internalSpacing` - distance inbetween toasts.
5. `notificationLifetime` - toast lifetime in _milliseconds_ (conter starts for appearance on the screen).
6. `transition` - toast show/hide transition (either `'slide'`, `'fade'` or `'zoom'`).
7. `toastTypesConfig` - object used to specify styles for different notification types.
   1. `fgColor` - toast text color (in any css-compatible format).
   2. `bgColor` - toast background color as string (in any css-compatible format).
   3. `icon` - toast icon as React component.
8. `limit` - maximum number of toasts displayed on the screen at the moment.
9. `transitionDuration` - toast transition duration in _milliseconds_.
10. `collapseDuration` - time in _milliseconds_, to move the rest of the toasts when a toast gets dismissed.

Example (also defaults):

```js
<ToastsStack
  position="top-left"
  parentNode={() => document.querySelector('#root')}
  edgeDistance="2rem"
  internalSpacing="1rem"
  notificationLifetime={3000}
  transition="slide"
  toastsTypeConfig={{}}
  limit={3}
  transitionDuration={1000}
  collapseDuration={500}
/>
```

### Sending notification

To send notification just call the `sendNotification` function with the following parameters:

1. `type` - notification type (see `toastTypesConfig` option for the `ToastsStack`)
2. `title` - notification title to be displayed (brief)
3. `message` - the main message displayed to a user

Example:

```js
import { sendNotification } from 'modsen-toast'

if (payment.passed) {
  sendNotification('Success', 'Payment passed', 'You can now enjoy Your VDS!')
}
```

![Toast screenshot](./github/assets/payment-success.png)

> Note: such styling requires custom `toastTypesConfig`

### Scripts

- run `yarn lint` to lint all `.js` and `.jsx` files under the `/src` folder
- run `yarn build` to build the library (outputs to the `/dist` directory)
- run `yarn storybook` to launch sotorybook on `http://localhost:6006`

## Structure overview

This project consists of 3 parts:

- Actual library
- Storybook examples
- Testing project

### Actual library

Library is built using yarn, eslint and prettier, prop-types, styled-components, rollup, babel and webpack.
Eslint, rollup, storybook and vscode are configured in such a way that enables import alias usage.
Eslint and prettier work together to inforce codestyle and cut down number of possible issues in the code.
Prop-types are used for props checking (usually only for exported components).
Styled-components provide ability to use plain CSS inside React components.
Rollup and babel are used to build the library, and webpack is only for Storybook.

Project configuration lays in the root of the project folder.
The source code is inside `/src` folder.
An entry point (or export point) of the library is the `/src/index.js` file.
Builded and minified version of the library is stored inside `/dist` folder (with a separate `package.json` configuration).

### Storybook examples

Storybook is used as a simple component explorer to avoid time-consuming building operations on every codechange.
Storybook inables the ability to explore changes just after they were made.
Such ability is redundant for the users of the library, thus Storybook is not shipped with the library
(which means there are no need to specify prop-types and test its components).

Storybook is configured by the scripts inside the `/.storybook` folder.
Sories are placed inside the `/src/stories` directory.

### Testing project

Testing project lies in the `/test` directory.
Separate testing project enables the ability to write **e2e** tests (using _cypress_) and test the _distributable_ version of the library.
It uses CRA template like the most of react applications.
It is also linked to the `/dist` folder, which enables hotreload on library build.
