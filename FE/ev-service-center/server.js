import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db_ev_service.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('🚀 JSON Server is running at http://localhost:3001');
});
