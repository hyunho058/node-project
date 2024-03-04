import {Request, Response} from "express";

exports.mainView = function (request: Request, response: Response) {
    response.end("hello")
}
