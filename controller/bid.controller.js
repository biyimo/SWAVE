import biddingService from "../services/bid.service.js";


// COUNTER BID 
const biddingCounter = async (req,res) => {
    const { artisanId, amount, errandDescription, errandId} = req.body

    try {
       const newCounterBid = await biddingService.counterBid( artisanId, amount, errandDescription, errandId)

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
            statusMessage: "All Bids Fetched",
            data: findingBid,
        })
    } catch (error) {
        console.log(error);
    }
}

// DELETE A BID
const deleteBid = async (req,res) => {
    const {id} = req.body

    try {
        const bidRemoval = await biddingService.deleteBids(id)

        return res.send({
            status: "201",
            statusMessage: "Deleted Successfully",
            data: bidRemoval,
        })
    } catch (error) {
        console.log(error);
    }
}

// UPDATE A BID
const updateBid = async (req,res) => {
    const {bidId, errandDescription, amount} = req.body

    try {
        const updatingBids = await biddingService.updateBids(bidId, errandDescription, amount)

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