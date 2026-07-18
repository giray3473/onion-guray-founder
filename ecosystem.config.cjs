module.exports = {
  apps: [
    {
      name: "guray-founder",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "production",
        PORT: "3001",
      },
    },
  ],
};
