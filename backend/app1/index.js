// Backend App 1 — Instance 1 du pool
const http = require('http');

const PORT = 3000;
const INSTANCE = 'App1 (port 3000)';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Hello from ' + INSTANCE,
            timestamp: new Date().toISOString(),
                method: req.method,
                    url: req.url
                      }));
                      });

                      server.listen(PORT, () => {
                        console.log('Backend App1 running on port ' + PORT);
                        });
