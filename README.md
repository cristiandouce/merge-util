# merge-util

  Just another deep merge function for objects.
  
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
### merge(obj1, obj2)
  Merge `obj2` into `obj1`.

````javascript
  var obj1 = { arr: ['1', 2, { three: '12' }], obj: { something: 'Good!' }};
  var obj2 = { obj: { something: 'wrong?' } };
  merge(obj1, obj2); // out: "{ arr: ['1', 2, { three: '12' }], obj: { something: 'Wrong?' }}"
````

## TODO
  * Add some tests.
  * Add more merge examples.
  
## License

  MIT