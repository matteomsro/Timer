import express from 'express';
import bodyParser from 'body-parser';

// create express app
const app = express();

// Setup server port
const port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {  
	res.send("Hello World");
});

// Require usuario routes
import {default as usuarioRoutes} from './routes/usuario.routes';

// using as middleware
app.use('/usuarios', usuarioRoutes);

// listen for requests
app.listen(port, () => {  
	console.log(`Server is listening on port ${port}`);
});