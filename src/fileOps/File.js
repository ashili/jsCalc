module.exports = class File {

    static getAbsolutePath(filename) {
        const path = require('path');
        return path.resolve(filename);
    }
}
