import express, { Express, Request, Response } from "express";
import userRoutes from "./api/user/routes/UserRoutes";

const app: Express = express();
const port = 8080;

app.use(express.json());
app.use("/users", userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Node.js + Express + Typescript');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
