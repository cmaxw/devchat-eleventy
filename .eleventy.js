const moment = require('moment');
const nunjucksDate = require('nunjucks-date');
nunjucksDate.setDefaultFormat('MMM Do YYYY');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('fonts');

  eleventyConfig.addNunjucksFilter('date', nunjucksDate);

  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter('embed_youtube', (key) => {
    return '<iframe width="825" height="550" src="https://www.youtube.com/embed/' + key + '" frameborder="0" allowfullscreen></iframe><br/>';
  });

  eleventyConfig.addFilter('range', (array, m, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(m, n);
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  };
};
