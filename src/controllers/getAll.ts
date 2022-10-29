import { UserModel } from "../models/UserModel";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();

        if(!users) {
            return res.status(404).json({ error: "Can not possible to find users"})
        }
        
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}