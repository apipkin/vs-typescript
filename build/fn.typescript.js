var hello = function (name) {
    if (name === void 0) { name = 'world'; }
    return ("Hello, " + name + "!");
};
var loop = function (arr, cb) {
    if (arr === void 0) { arr = []; }
    if (cb === void 0) { cb = function (x) { return x; }; }
    arr.forEach(cb);
};
module.exports = {
    hello: hello,
    loop: loop
};
