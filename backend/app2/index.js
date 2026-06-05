// Backend App 2 — Instance 2 du pool
const http = require('http');

const PORT = 3001;
const INSTANCE = 'App2 (port 3001)';

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
                        console.log('Backend App2 running on port ' + PORT);
                        });
