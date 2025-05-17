import express from 'express';
// In a .d.ts file (e.g., global.d.ts)

//import path from 'path';
//import { handler } from '../build/handler.js'; //  The SSR handler from the SvelteKit build
// express router
//import apiRouter from './routers/api_router.ts';

const server = express();
const port = 8080;

//server.use('/api', apiRouter);

server.get('/', (req, res) => {
	res.send('Hello, Express with TypeScript!');
});

// pass through all requests to the SvelteKit handler
// This will handle all routes and serve the SvelteKit app
//server.use(handler);
// Serve the SvelteKit app

//Start the Express server
server.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});
