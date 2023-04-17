import { Server } from 'ws';
import { createServer } from 'http';

export default (req, res) => {
  if (req.headers.upgrade !== 'websocket') {
    res.status(400).send('Invalid request');
    return;
  }

  const wsServer = new Server({ noServer: true });
  wsServer.on('connection', (socket) => {
    // 웹소켓 서버 로직 작성
  });

  const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
  });

  server.on('upgrade', (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, (ws) => {
      wsServer.emit('connection', ws, req);
    });
  });

  server.listen(3000, () => {
    console.log('WebSocket server is running');
  });
};
