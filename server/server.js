const phpServer = require("node-php-server");

// Create a PHP Server
phpServer.createServer({
  port: 8000,
  hostname: "localhost",
  base: ".",
  keepalive: false,
  open: false,
  bin: "php",
  router: __dirname + "server/index.php"
});

// Close server
phpServer.close();
