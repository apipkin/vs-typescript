const hello = (name = 'world') => (
  `Hello, ${name}!`
);

const loop = (arr = [], cb = x => x) => {
  arr.forEach(cb);
};

module.exports = {
  hello,
  loop
};
