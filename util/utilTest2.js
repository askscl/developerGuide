var util = require('util');

function Person(){
    this.name = 'scl';
    this.toString = function(){
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

util.isArray();
util.isRegExp();
util.isDate();
util.isError();
util.format();
util.debuglog();
