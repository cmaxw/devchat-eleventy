module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("fonts");

    return {
        templateFormats: [
          "md",
          "njk",
          "html",
          "liquid"
        ]
    };
};