"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import * as "typeorm";
// import { DataSource } from "typeorm";
const main = async () => {
    const app = (0, express_1.default)(); // Creates an instance of express and allows middleware (including graphql)
    app.use((0, cors_1.default)()); // Middleware fro back to front end
    app.use(express_1.default.json()); // This just means, we will be using json as the body for every request to server (Which makes it easy for graphql)
    // app.use("/graphql", graphqlHTTP({
    //     schema,
    //     graphql: true
    // }))
    // We will uncomment when this is defined
    console.log("index.ts is being read!");
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
};
main().catch((err) => {
    console.log(err);
});
