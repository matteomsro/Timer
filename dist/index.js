"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// create express app
const app = (0, express_1.default)();
// Setup server port
const port = 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(body_parser_1.default.json());
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});
// Require usuario routes
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
// using as middleware
app.use('/usuarios', usuario_routes_1.default);
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
