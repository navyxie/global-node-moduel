var fs = require('fs-extra');
function GlobalModuel () {}
GlobalModuel.prototype.copySync = fs.copySync;
GlobalModuel.prototype.removeSync = fs.removeSync;
module.exports = GlobalModuel;