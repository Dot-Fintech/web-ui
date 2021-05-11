# web-ui

A shared ui library of React components that is used by all of Dot's frontend web applications.

## Demo

*Coming soon*

## Usage

To add web-ui to a react app, install the package using 

```npm i @dot-fintech/web-ui``` or ```yarn add @dot-fintech/web-ui```

Also, the components in this library rely on the styled-components `DefaultTheme` to be overridden to use the `Theme` type defined in it this package. 
To set this type, create a declaration file for styled components with the following:

```
import 'styled-components';

import { Theme } from '@dot-fintech/web-ui';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
```

If you have your own styled-components theme, you can extend that type as well in the same declaration file.
