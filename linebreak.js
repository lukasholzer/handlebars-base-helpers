import handlebars from 'handlebars';

module.exports = function (text) {
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new handlebars.SafeString(text);
};
