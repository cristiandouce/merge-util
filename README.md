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

```javascript
var obj1 = { obj: { any: 'thing' }};
var obj2 = { obj: { something: 'wrong?' } };
merge(obj1, obj2); // out: "{ obj: { something: 'Wrong?', any: 'thing' }}"
```

Available options include:

* `inheritance` : *Defaults to* `false`. Include inherited members in the merge.

* `shallow` : *Defaults to* `false`. A `true` value prevents merge from being recursive to nested objects.

_Note:_ you can also pass a `Boolean` as the `opts` parameter as value for `inheritance` alone. This provides backwards compatibility with version `0.1.0`

#### inheritance

```javascript
function Being () {
  this.living = true;
}

Youth.prototype = new Being;
function Youth () {
  this.plays = true;
}

function Robot() {
  this.material = "metal";
}

var bot = new Robot();
var kid = new Youth();

merge(bot, kid, { inheritance: false }); // merge(dog, kid, false); also works as in 0.1.0
//out => bot: "{ plays: true, material: 'metal' }"

merge(bot, kid, { inheritance: true }); // merge(dog, kid, true); also works as in 0.1.0
//out => bot: "{ living: true, plays: true, material: 'metal' }"
```

#### shallow

```javascript
var xBuster = { name: "X-Buster", power: 600 };
var zeroBlade = { name: "Zero Blade", power: 9001 }

var megaman = {
  name: "Megaman X",
  weapon: xBuster
}

var zero = {
  name: "Zero"
  weapon: zeroBlade
}


merge(megaman, zero); // same as merge(dog, kid, { shallow: false });
//out => megaman: "{ name: "Zero", weapon: { name: "Zero Blade", power: 9001 } }"

log(xBuster);
//out: { name: "Zero Blade", power: 9001 }
// `xBuster` was merged with `zeroBlade`

//If instead we had done this...
merge(megaman, zero, { shallow: true });
//out => megaman: "{ name: "Zero", weapon: { name: "Zero Blade", power: 9001 } }"

log(xBuster);
//out: { name: "X-Buster", power: 600 }
// `megaman`'s' `weapon` property was swapped for `zero`'s, but `xBuster` itself wasn't merged.
```

## TODO
  * Add some tests.
  * Add more merge examples.

## License

  MIT
