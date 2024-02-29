import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8080;

type Data = {
    name: string;
    age: number;
};

const sendData: Data = {
    name: "name",
    age: 10,
};

app.get('/', (req: Request, res: Response) => {
    res.send('Node.js + Express + Typescript');
});

app.get('/test', (req: Request, res: Response) => {
    res.send(sendData);
    // res.send('Typescript + Node.js + Express Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
