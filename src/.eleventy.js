module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("fonts");

    eleventyConfig.addFilter("head", (array, n) => {
        if( n < 0 ) {
          return array.slice(n);
        }
    
        return array.slice(0, n);
    });
    
    eleventyConfig.addFilter("range", (array, m, n) => {
        if( n < 0 ) {
          return array.slice(n);
        }
    
        return array.slice(m, n);
    });
    
    return {
        templateFormats: [
          "md",
          "njk",
          "html",
          "liquid"
        ]
    };
};