import IndexController from './core/Controllers/IndexController';
import Server from './core/Models/Server';

const server = Server.getInstance();

server.routes({
  get: [
    {
      path: '/',
      controller: new IndexController()
    }
  ]
}).run();
