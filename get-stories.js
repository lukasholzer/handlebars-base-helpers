import optionsResolver from './functions/option-resolver';
import render from './functions/render';


module.exports = (options) => {

  const opt = optionsResolver(options);
  let entry = options.data.root[opt['folder']];
  let html = '';

  // Render single data
  if (!Array.isArray(entry)) {
    if (opt['thumbnail'] === 'true') {
      return thumbnail(entry.story.content, options.data.root);
    } else {
      if (opt['pagination'])
      return render(entry.story.content.body, options.data.root);
    }
  }

  // Render Data array
  entry.forEach(element => {
    if (opt['thumbnail'] === 'true') {
      html += thumbnail(element.content, options.data.root);
    } else {
      html += render(element.content.body, options.data.root);
    }
  });

  return html;
}


function thumbnail(element, rootData) {
  if(!element.thumbnail_title){
    return '';
  }

  const thumb = {
    image: element.thumbnail_image,
    title: element.thumbnail_title,
    date: element.thumbnail_date,
    text: element.thumbnail_text,
    component: 'thumbnail'
  };

  return render(thumb, rootData)
}
