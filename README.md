<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# US State Capitals

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> A list of US state capitals.

<section class="installation">

## Installation

```bash
npm install @stdlib/datasets-us-states-capitals
```

</section>

<section class="usage">

## Usage

```javascript
var capitals = require( '@stdlib/datasets-us-states-capitals' );
```

#### capitals()

Returns a list of US state capitals in alphabetical order according to state name.

```javascript
var data = capitals();
/* returns
    [
        'Montgomery',
        'Juneau',
        'Phoenix',
        'Little Rock',
        'Sacramento',
        'Denver',
        'Hartford',
        'Dover',
        'Tallahassee',
        'Atlanta',
        'Honolulu',
        'Boise',
        'Springfield',
        'Indianapolis',
        'Des Moines',
        'Topeka',
        'Frankfort',
        'Baton Rouge',
        'Augusta',
        'Annapolis',
        'Boston',
        'Lansing',
        'Saint Paul',
        'Jackson',
        'Jefferson City',
        'Helena',
        'Lincoln',
        'Carson City',
        'Concord',
        'Trenton',
        'Santa Fe',
        'Albany',
        'Raleigh',
        'Bismarck',
        'Columbus',
        'Oklahoma City',
        'Salem',
        'Harrisburg',
        'Providence',
        'Columbia',
        'Pierre',
        'Nashville',
        'Austin',
        'Salt Lake City',
        'Montpelier',
        'Richmond',
        'Olympia',
        'Charleston',
        'Madison',
        'Cheyenne'
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math-base-special-floor' );
var randu = require( '@stdlib/random-base-randu' );
var capitals = require( '@stdlib/datasets-us-states-capitals' );

var data = capitals();
var len = data.length;
var idx;
var i;

// Select random capitals from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( data[ idx ] );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/datasets-us-states-capitals
```

</section>

<section class="usage">

### Usage

```text
Usage: us-states-capitals [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ us-states-capitals
Montgomery
Juneau
Phoenix
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/us-states-abbr`][@stdlib/datasets/us-states-abbr]</span><span class="delimiter">: </span><span class="description">A list of US state two-letter abbreviations in alphabetical order according to state name.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-capitals-names`][@stdlib/datasets/us-states-capitals-names]</span><span class="delimiter">: </span><span class="description">US state capitals and names.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names`][@stdlib/datasets/us-states-names]</span><span class="delimiter">: </span><span class="description">A list of US state names in alphabetical order.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names-capitals`][@stdlib/datasets/us-states-names-capitals]</span><span class="delimiter">: </span><span class="description">US state names and capitals.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-us-states-capitals.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-us-states-capitals

[test-image]: https://github.com/stdlib-js/datasets-us-states-capitals/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/datasets-us-states-capitals/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-us-states-capitals/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-us-states-capitals?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-us-states-capitals.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-us-states-capitals/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/datasets/us-states-abbr]: https://github.com/stdlib-js/datasets-us-states-abbr

[@stdlib/datasets/us-states-capitals-names]: https://github.com/stdlib-js/datasets-us-states-capitals-names

[@stdlib/datasets/us-states-names]: https://github.com/stdlib-js/datasets-us-states-names

[@stdlib/datasets/us-states-names-capitals]: https://github.com/stdlib-js/datasets-us-states-names-capitals

<!-- </related-links> -->

</section>

<!-- /.links -->
