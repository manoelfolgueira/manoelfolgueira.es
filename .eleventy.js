module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("resources");
  return {
    dir: { input: "src", output: "_site" }
  };
};