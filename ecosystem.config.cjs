const path = require("path");

module.exports = {
  apps: [
    {
      name: "guray-founder",
      cwd: path.join(__dirname, ".next", "standalone"),
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
