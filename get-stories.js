import optionsResolver from './functions/option-resolver';
import render from './functions/render';
import colors from 'colors'


module.exports = (options) => {

  const opt = optionsResolver(options);
  let entry = options.data.root[opt['folder']];
  let html = '';

  try {
    // Render single data
    if (!Array.isArray(entry)) {
      if(!entry) {
        console.warn(`[basehelpers/get-stories.js] -> \n missing folder: ${options.hash.folder}`.magenta);
        return '';
      }

      if (opt['blog_thumbnail'] === 'true') {
        return blog_thumbnail(entry.story.content, options.data.root);
      } else {
        return render(entry.story.content.body, options.data.root);
      }
    }
  } catch(error) {
    console.log(`[basehelpers/get-stories.js] -> \n${error}`.red);
  }

  // Render Data array
  entry.forEach(element => {
    if (opt['blog_thumbnail'] === 'true') {
      html += blog_thumbnail(element.content, options.data.root);
    } else {
      html += render(element.content.body, options.data.root);
    }
  });

  return html;
}


function blog_thumbnail(element, rootData) {
  if(!element.thumbnail_title){
    return '';
  }

  const thumb = {
    image: element.thumbnail_image,
    title: element.thumbnail_title,
    date: element.thumbnail_date,
    text: element.thumbnail_text,
    component: 'blog_thumbnail'
  };

  return render(thumb, rootData)
}
