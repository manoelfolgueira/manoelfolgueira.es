module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("res");
  return {
    dir: { input: "src", output: "_site" }
  };
};