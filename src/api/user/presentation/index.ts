import {Request, Response} from "express";

// const router = require("express").Router();
//
// router.get("/", function (request: Request, response: Response) {
//     response.end("Hello World");
// })
//
// module.exports = router;

const router = require("express").Router();
const controller = require("./controller");

router.get("/main", controller.mainView);

module.exports = router;
