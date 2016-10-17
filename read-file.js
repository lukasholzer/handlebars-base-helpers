import handlebars from 'handlebars';
import config from '../../../config';
import path from 'path';
import fs from 'fs';

module.exports = function(filename) {
  let filePath = path.join(config.client.prod, filename);
  if (fs.statSync(filePath).isFile()) {
    let file = fs.readFileSync(filePath, 'utf8');
    return new handlebars.SafeString(file);
  } else {
    console.error(`readFile helper could not find file: ${filePath}`);
  }

  return '';
};