import { RequestHandler } from "express";

const getAllTasks: RequestHandler = (_, res) => {
    res.send("Please")
}

export { getAllTasks }