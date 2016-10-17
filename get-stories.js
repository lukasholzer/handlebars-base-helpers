import optionsResolver from '../option-resolver';
import render from '../render';


module.exports = (options) => {

  const opt = optionsResolver(options);
  let entry = options.data.root[opt['folder']];
  let html = '';

  // Render single data
  if (!Array.isArray(entry)) {
    return render(entry.story.content.body, options.data.root);
  }

  // Render Data array
  entry.forEach(element => {
    html += render(element.content.body, options.data.root);
  });

  return html;
}

