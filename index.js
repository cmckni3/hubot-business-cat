const fs = require('fs');
const path = require('path');

module.exports = function(robot, scripts) {
  const scriptsPath = path.resolve(__dirname, 'src');
  fs.exists(scriptsPath, function(exists) {
    if (exists) {
      const scripts = fs.readdirSync(scriptsPath);
      scripts.forEach(script => {
        if (scripts && scripts.indexOf('*') === -1) {
          if (scripts.indexOf(script) >= 0) {
            robot.loadFile(scriptsPath, script);
          }
        } else {
          robot.loadFile(scriptsPath, script);
        }
      });
    }
  });
};
