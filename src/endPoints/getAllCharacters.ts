import { Request, Response } from "express";
import app from "../app";
import { characters } from "../data";


export default function (
    req: Request,
    res: Response
) {
    res.send(characters)
}
