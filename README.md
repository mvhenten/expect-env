# expect-env

Acts as a proxy to process.env: checks if an environment variable is set when accessed. Throws an error if the variable is not set.

## Usage

```js
import { env } from "expect-env";

// Access an environment variable
console.log(env.HOME); // returns the value if set

// Throws if the variable is not set
console.log(env.FOO_BAR); // throws Error: process.env.FOO_BAR is not set!
```
