import colors from 'colors';

module.exports = (link, context) => {
  let links = null;

  // Check links location
  if (context.data.root.links)
    links = context.data.root.links;
  else if (context.data.root.root.links) {
    links = context.data.root.root.links;
  }


  if (!link) {
    console.error('[helpers/link.js] -> No link defined!'.red);
    return '';
  }

  if (!links) {
    console.error('[helpers/link.js] -> No linkmap defined!'.red);
    return '';
  }

  if (!links[link]) {
    console.error(`[helpers/link.js] -> Link: ${link} not defined!`.red);
    return '';
  }

  return '/' + links[link].slug;
}
