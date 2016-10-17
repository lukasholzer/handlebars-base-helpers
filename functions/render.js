import config from '../../../../config';
import handlebars from 'handlebars';
import app from '../../../app';
import path from 'path';
import fs from 'fs';


module.exports = function render(body, rootData = {}) {
  let html = '';

  if (body.length < 1) {
    console.error('[lib/render.js] -> body is empty')
    return '';
  }


  if (Array.isArray(body)) {
    body.forEach(data => {
      html += _renderElement(data, rootData);
    });
  } else {
    html += _renderElement(body, rootData);
  }

  return html;
}


function _renderElement(data, rootData) {
  const filePath = path.join(config.templates.partials, data.component + '.hbs');
  const file = fs.readFileSync(filePath, 'utf8');
  const template = app.hbs._compileTemplate(file, {});

  data.root = rootData;

  return new handlebars.SafeString(template(data));
}
