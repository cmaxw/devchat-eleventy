const moment = require('moment');
const nunjucksDate = require('nunjucks-date');
nunjucksDate.setDefaultFormat('MMM Do YYYY');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('admin');

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

  eleventyConfig.addNunjucksFilter("strip", function(value) { return value.trim() });


  eleventyConfig.addFilter('range', (array, m, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(m, n);
  });

  var podcastList = ["adv_in_angular", 
                  "dev_rev", 
                  "elixir_mix",
                  "freelancers",
                  "iphreaks",
                  "js_jabber", 
                  "my_angular_story",
                  "my_javascript_story",
                  "my_ruby_story",
                  "rails_clips",
                  "react_native_radio",
                  "react_round_up",
                  "remote_conf_talks",
                  "ruby_rogues",
                  "teachmetocode",
                  "tmtc-screencasts",
                  "views_on_vue",
                  "web_sec_warriors"];

  var today = moment();

  podcastList.forEach(function(podcast, index) {
    eleventyConfig.addCollection(podcast, function(collection) {
      return collection.getFilteredByTag(podcast).sort(function(a, b) {
        return a.date - b.date;
      }).filter(function(item) {
        return item.date <= today;
      });
    });
  });

  eleventyConfig.addCollection("podcast", function(collection) {
    return collection.getFilteredByTag("podcast").sort(function(a, b) {
      return a.date - b.date;
    }).filter(function(item) {
      return item.date <= today;
    });
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
