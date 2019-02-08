const path = require('path');
const fs = require('fs');

module.exports = {
  components: 'packages/**/*.jsx',
  usageMode: 'expand',
  exampleMode: 'expand',
  getComponentPathLine(componentPath) {
    const packagePath = `./${path.join(componentPath, '../..', 'package.json')}`;
    const package = JSON.parse(fs.readFileSync(packagePath));

    return package.name;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'packages/theme/src/index.jsx')
  }
};
