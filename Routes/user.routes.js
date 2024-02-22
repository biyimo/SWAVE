import express from "express"
import { createUser, loginUser, fetchOwnerId} from "../controller/user.controller.js"

const router = express.Router()

router.post("/create", createUser)
router.post("/login", loginUser )
router.get('/ownerErrands', fetchOwnerId);

export default router;