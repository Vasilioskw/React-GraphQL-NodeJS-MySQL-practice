import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from 'cors';
import { DataSource } from "typeorm";

const main = async () => {  
    const app = express() // Creates an instance of express and allows middleware (including graphql)
    app.use(cors()) // Middleware fro back to front end
};

main().catch((err) => {
    console.log(err);
}); 