import biddingService from "../services/bid.service.js";


// COUNTER BID 
const biddingCounter = async (req,res) => {
    const {id, artisanId, amount, errandId, errandDescription} = req.body

    try {
       const newCounterBid = await biddingService.counterBid(id, artisanId, amount, errandId, errandDescription)

       return res.send ({
        status: "201",
        statusMessage: "Successfully",
        data: newCounterBid,
       })
    } catch (error) {
        console.log(error);
    }
}

// GET ALL BIDS
const allBids = async (req,res) => {
    try {
        const findingBid = await biddingService.fetchAllBids()

        return res.send({
            status: "201",
            statusMessage: "Successfully",
            data: findingBid,
        })
    } catch (error) {
        console.log(error);
    }
}

// DELETE A BID
const deleteBid = async (req,res) => {
    try {
        const bidRemoval = await biddingService.deleteBids()

        return res.send({
            status: "201",
            statusMessage: "Successfully",
            data: bidRemoval,
        })
    } catch (error) {
        console.log();
    }
}

// UPDATE A BID
const updateBid = async (req,res) => {
    try {
        const updatingBids = await biddingService.updateBids()

        return res.send({
            status: "201",
            statusMessage: "Successfully",
            data: updatingBids,
        })
    } catch (error) {
        console.log(error);
    }
}

export {biddingCounter, allBids, deleteBid, updateBid}