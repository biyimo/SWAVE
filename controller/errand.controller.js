import biddingService from "../services/bid.service.js";
import errandService from "../services/errand.service.js";

// CREATE BID
const errnadBid = async (req,res) => {
    const {errandDescription, location, userName, amount, ownerId } = req.body

    try {
        const newBid = await errandService.createBid(
            userName,
            errandDescription,
            location,
            amount,
            ownerId,
        );
        return res.send({
            status: "201",
            statusMessage: "Bid Successfully",
            data: newBid,
        })
    } catch (error) {
        console.log(error);
    }
}

// FIND ERRAND
const findErrand = async (req,res) => {

    const {id} = req.body
    try {
        const findingErrand = await errandService.findErrandById(id);
        const errandBids =  biddingService 
        return res.send({
            status: "201",  
            statusMessage: "Successfull",
            data: {
             errand:   findingErrand,
             errandBids
            },
          });
    } catch (error) {
        console.log(error);
    }
}


// DELETE ERRAND
const deleteErrand = async (req, res) => {
    const {id} = req.body

    try {
        const deletingErrand = await errandService.deleteErrandById(id);

        return res.send({
            status: "201",  
            statusMessage: "Deleted Successfully ",
            data: deletingErrand,
          });
    } catch (error) {
        console.log(error);
    }
}

// UPDATE ERRAND
const updateErrand = async (req, res) => {
    const {id, errandDescription, location, amount} = req.body
    try {
        const updatingErrand = await errandService.updateErrandById(id, errandDescription, location, amount);

        return res.send({
            status: "201",  
            statusMessage: "Updated Successfully ",
            data: updatingErrand,
          });
    } catch (error) {
        console.log(error);
    }
}

// FETCH ERRAND
const fetchErrand = async (req, res) => {

    const {id} = req.body
    try {
        const fetchtingErrand = await errandService.findErrandById();

        return res.send({
            status: "201",  
            statusMessage: "Fetched Successfully ",
            data: fetchtingErrand,
          });
    } catch (error) {
        console.log(error);
    }
}

// FETCH ALL ERRANDS 
const fetchAllErrands = async (req, res) => {
    try {
        const getAllErrands = await errandService.fetchAll();

        return res.send({
            status: "201",
            statusMessage: "All Errands Fetched",
            data: getAllErrands,
        })
    } catch (error) { 
        console.log(error);
    }
}

export { errnadBid, findErrand, deleteErrand,fetchErrand, updateErrand, fetchAllErrands }