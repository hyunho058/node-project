import {Request, Response} from "express";
import {findByUserId} from "../models/UserModel";

export const getUserById = async (request: Request, response: Response)=> {
    const userId = parseInt(request.params.id);

    if (!userId) {
        return response.status(400).send("Invalid User ID")
    }

    const user = await findByUserId(userId);

    if (!user) {
        response.status(404).send("NOT FOUND");
    }

    response.json(user);
}
