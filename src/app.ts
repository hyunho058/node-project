import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const app: Express = express();
const port = 8080;
const prisma = new PrismaClient()

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

app.get('/posts', async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
});

app.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    const users = await prisma.user.findMany();
    res.json(users);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
