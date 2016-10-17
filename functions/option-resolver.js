module.exports = function(options) {
  let attrs = [];

  for (let prop in options.hash) {
    attrs[prop] = options.hash[prop];
  }

  return attrs;
}