import express from "express"
import { deleteErrand, errnadBid, fetchAllErrands, fetchErrand, findErrand, updateErrand } from "../controller/errand.controller.js";

const router = express.Router()


// CREAT ERRANDS OR BIDS
router.post('/errand-bid', errnadBid);

// OTHERS
router.get('/get-all-errands', fetchAllErrands);
router.post('/errand-id', findErrand);
router.delete('/edelete-errand', deleteErrand);
router.put('/update-errand', updateErrand);
router.get('/fetch-errand', fetchErrand);



export default router;