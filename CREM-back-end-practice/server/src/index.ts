import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema"
import cors from "cors";
// import * as "typeorm";
import { DataSource } from "typeorm";

const myDataSource = new DataSource({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [],
})

const main = async () => { 

    await myDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })

    
    const app = express() // Creates an instance of express and allows middleware (including graphql)
    app.use(cors()) // Middleware fro back to front end
    app.use(express.json()) // This just means, we will be using json as the body for every request to server (Which makes it easy for graphql)
    app.use(
        "/graphql", 
        graphqlHTTP({
        schema,
        graphiql: true // For http://localhost:3001/graphql 
        // graphiql lets you do some awesome stuff
        })
    );

    console.log("index.ts is being read!")

    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001")
    });
};


main().catch((err) => {
    console.log(err);
});

export default myDataSource;