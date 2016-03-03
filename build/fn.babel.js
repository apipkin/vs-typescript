'use strict';

var hello = function hello() {
  var name = arguments.length <= 0 || arguments[0] === undefined ? 'world' : arguments[0];
  return 'Hello, ' + name + '!';
};

var loop = function loop() {
  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var cb = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
    return x;
  } : arguments[1];

  arr.forEach(cb);
};

module.exports = {
  hello: hello,
  loop: loop
};
