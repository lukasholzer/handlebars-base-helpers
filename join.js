import optionsResolver from '../option-resolver';

// Array and delimiter to join
module.exports = function (data, options) {
  if (!data) {
    return '';
  }

  let opt = optionsResolver(options);
  return data.join(opt["del"]);
}