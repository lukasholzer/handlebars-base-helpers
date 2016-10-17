import handlebars from 'handlebars';

module.exports = function (text) {
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  text = text.replace(`„`, `»`);
  text = text.replace(/["“]/gm, `«`);


  // get every uppercase word
  // const regex = /\b([A-Z]+\s)\b/gm;
  // let match = regex.exec(text);
  // while (match !== null) {
  //   console.log(match);
  //     console.log("match found at " + match.index);
  // }



    return new handlebars.SafeString(text);
};
