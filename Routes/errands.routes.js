import express from "express"
import { deleteErrand, errnadBid,  fetchAllErrands, findErrand, updateErrand } from "../controller/errand.controller.js";

const router = express.Router()


// CREAT ERRANDS OR BIDS
router.post('/errand-bid', errnadBid);

// OTHERS
router.post('/errand-id', findErrand);
router.delete('/delete-errand', deleteErrand);
router.put('/update-errand', updateErrand);
router.get('/get-all-errands', fetchAllErrands);



export default router;