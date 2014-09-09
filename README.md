# merge-util

  Just another deep merge function for objects.
  Merge is recursive for nested objects by default.

## Installation

    $ component install cristiandouce/merge-util

or..

    $ npm install merge-util

## Usage
```javascript
var merge = require('merge-util');

var obj1 = { hello: 'World' };
var obj2 = { hello: 'World!', good: { bye: 'Lennin' } };

merge(obj1,obj2);

console.log(obj1); // out: "{ hello: 'World!', good: { bye: 'Lennin'}}"

```

## API
### merge(obj1, obj2, opts)
  Merge `obj2` into `obj1` with some options.

````javascript
  var obj1 = { obj: { any: 'thing' }};
  var obj2 = { obj: { something: 'wrong?' } };
  merge(obj1, obj2); // out: "{ obj: { something: 'Wrong?', any: 'thing' }}"
````

Available options include:

* `inheritance` : *Defaults to* `false`. Include inherited members in the merge.

* `shallow` : *Defaults to* `false`. A `true` value prevents merge from being recursive to nested objects.


## TODO
  * Add some tests.
  * Add more merge examples.

## License

  MIT
