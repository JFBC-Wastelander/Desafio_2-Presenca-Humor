import { Router } from "express"
import {
    store,
    index,
    show
} from "../controllers/student-controller.js"

const router = Router()

router.post("/", store)
router.get("/", index)
router.get("/:id", show)

export default router