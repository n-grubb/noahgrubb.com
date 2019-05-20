const { DateTime } = require("luxon");

module.exports = function(config) {

    config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
        return DateTime.fromJSDate(dateObj, {
          zone: "utc"
        }).toFormat(format);
    });    

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