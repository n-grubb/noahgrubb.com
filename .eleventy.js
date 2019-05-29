const { DateTime } = require("luxon");
const RSSplugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {

    // rss plugin
    config.addPlugin(RSSplugin);

    config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
        return DateTime.fromJSDate(dateObj, {
          zone: "utc"
        }).toFormat(format);
    });    

    // static passthroughs
    config.addPassthroughCopy("src/site/images");

    return {
        dir: {
            input: "src/site",
            output: "_site",
        },
        templateFormats : ["njk", "md"],
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk",
        passthroughFileCopy: true
    };

}