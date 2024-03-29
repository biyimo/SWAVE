import express  from "express";
import { allBids, biddingCounter, deleteBid, updateBid } from "../controller/bid.controller.js"

const router = express.Router()


router.post('/bid-counter', biddingCounter);
router.get('/get-all-bids', allBids);
router.delete('/delete-bid', deleteBid);
router.post('/update-bid', updateBid);


export default router