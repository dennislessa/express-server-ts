import express, { Express } from 'express';
import { Route } from '../Types/Route';

/**
 * Class Server
 *
 * @pattern Singleton
 */
export default class Server {
    static __instance:Server|null = null;

    private server:Express;

    private port:number;

    private constructor(port:number) {
      this.server = express();
      this.port = port;
    }

    static getInstance(port:number = 3000):Server {
      if (Server.__instance == null) {
        Server.__instance = new Server(port);
      }

      return Server.__instance;
    }

    public routes(routes:Record<string, Route[]>):Server {
      const keys = Object.keys(routes);

      if (keys.length > 0) {
        keys.forEach(key => {
          for (const route of routes[key]) {
            this.server[key](route.path, route.controller.run);
          }
        });
      }

      return this;
    }

    public middlewares(middlewares:any):Server {
      middlewares.forEach(middleware => {
        this.server.use(middleware);
      });

      return this;
    }

    public run():void {
      this.server.listen(this.port, () => {
        console.log('Server is ready.');
      });
    }
}
