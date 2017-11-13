const loaderUtils = require('loader-utils');

module.exports = function(content) {
    if (!this.resourceQuery) {
        return content;
    }
    const options = loaderUtils.getOptions(this);
    const replacementValues = loaderUtils.parseQuery(this.resourceQuery);

    return Object.entries(options).reduce((content, [name, initialValue]) => {
        return content.replace(new RegExp(initialValue, 'g'), replacementValues[name]);
    }, content);
};
