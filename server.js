import express from 'express';
//import path from 'path';
import { handler } from './build/handler.js'; // The SSR handler from the SvelteKit build
// express router
import apiRouter from './src/routers/api_router.js';

const server = express();
const port = 8080;

server.use('/api', apiRouter);

// pass through all requests to the SvelteKit handler
// This will handle all routes and serve the SvelteKit app
server.use(handler);
// Serve the SvelteKit app

// Start the Express server
server.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});
