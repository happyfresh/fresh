const path = require('path');
const fs = require('fs');

module.exports = {
  components: 'packages/**/*.jsx',
  getComponentPathLine(componentPath) {
    const packagePath = `./${path.join(componentPath, '../..', 'package.json')}`;
    const package = JSON.parse(fs.readFileSync(packagePath));

    return package.name;
  }
};
