import express from "express"
import { createUser, loginUser, fetchOwnerId, fetchAllUsers} from "../controller/user.controller.js"

const router = express.Router()

router.post("/create", createUser)
router.post("/login", loginUser )
router.get('/ownerErrands', fetchOwnerId);
router.get('/fetch-all-users', fetchAllUsers);

export default router;