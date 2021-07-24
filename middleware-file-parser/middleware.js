const ROLES_FILE = __dirname + "/roles.txt";
const { all } = require("bluebird");
const fs = require("fs");

const checkotRoles = (mapper, role, scopeName, actionName) => {
  for (i of mapper) {
    if (role === i.role) {
      const { scopes } = i;
      if (scopes[scopeName]) {
        const tasks = scopes[scopeName];
        return tasks && tasks.includes(actionName);
      }
    }
  }
  return false;
};

module.exports = (scope) => (req, res, next) => {
  const role = req.headers["x-role"];

  if (role) {
    fs.readFile(ROLES_FILE, "utf8", (err, data) => {
      if (err) res.send(403).json({});
      const [scopeName, actionName] = scope.split(".");
      const scopes = JSON.parse(data.toString("utf8").replace(/^\uFEFF/, ""));
      const isAllowed = checkotRoles(scopes, role, scopeName, actionName);
      if (isAllowed) next();
      else res.status(403).json({});
    });
  } else {
    res.status(403).json({});
  }
};