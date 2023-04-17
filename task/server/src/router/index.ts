import express from "express"

import { getAllTasks } from "../controllers"

const router = express.Router()

router.get("/", getAllTasks)


export default router