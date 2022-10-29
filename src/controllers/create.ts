import { UserModel } from "../models/UserModel";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        const create = new UserModel(req.body)

        await create.save();
        
        return res.status(201).json(create);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}