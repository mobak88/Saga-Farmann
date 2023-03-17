/** @type {import('next').NextConfig} */

const cron = require("node-cron");

//Kjører funksjon hver hele og halve time
cron.schedule("0,30 * * * *", function () {
  console.log("Say scheduled hello");
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
