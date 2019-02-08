
# Jenis
Jenis is a small js utility to check your data type.

## INSTALLATION
Add jenis to your project using npm or yarn:
``npm i jenis`` or ``yarn add jenis``

## API
There are two ways to check your data type using Jenis:

### Using ``jenis.is.[type]`` or ``jenis.not.[type]``
``.is`` and ``.not`` behaves the same way. It will compare your input to the rules then return boolean result.

**Example**

    const jenis = require('jenis')
    
    jenis.is.array(['apple', 'banana']) // true
    jenis.not.array(['apple','banana']) // false


| Type      | Param | Returns | Example                                                         |
|-----------|--------|---------|-----------------------------------------------------------------|
| string    | any    | boolean | ``jenis.is.string('Hello world')`` // true                               |
| array     | any    | boolean | ``jenis.is.array([])`` // true                                           |
| object    | any    | boolean | ``jenis.is.object({})`` // true                                          |
| number    | any    | boolean | ``jenis.is.number(1)`` // true                                           |
| function  | any    | boolean | ``jenis.is.function(function test(){})`` // true                         |
| null      | any    | boolean | ``jenis.is.null(null)`` // true                                          |
| undefined | any    | boolean | ``jenis.is.undefined()`` // true                                         |
| boolean   | any    | boolean | ``jenis.is.boolean(false)`` // true                                      |
| regexp    | any    | boolean | ``jenis.is.regexp(new RegExp)`` // true                                  |
| error     | any    | boolean | ``jenis.is.error(new Error)`` // true                                    |
| date      | any    | boolean | ``jenis.is.date(new Date)`` // true                                      |
| symbol    | any    | boolean | ``jenis.is.symbol(Symbol())`` // true                                    |
| promise   | any    | boolean | ``jenis.is.promise(new Promise(function (resolve, reject) {}))`` // true |



### Using ``.check()``
The ``check`` method will let you check what type of data supplied. This method return a string of data type, which can be one of the following:
- undefined
- string
- array
- object
- number
- function
- null
- boolean
- regexp
- error
- date
- symbol
- promise

**Example**
		
    const jenis = require('jenis')
    
    jenis.check('My string') // string

## TODO:
- Create test
- Add Travis CI
