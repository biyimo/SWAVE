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

const findErrand = async (req,res) => {

    const {id} = req.body
    try {
        const findingErrand = await errandService.findErrandById(id);
        const errandBids = [ biddingService ]
        return res.send({
            status: "201",  
            statusMessage: "Successfully Found",
            data: {
             errand:   findingErrand,
             errandBids
            },
          });
    } catch (error) {
        console.log(error);
    }
}

const deleteErrand = async (req, res) => {
    try {
        const deletingErrand = await errandService.deleteErrandById();

        return res.send({
            status: "201",  
            statusMessage: "Deleted Successfully ",
            data: deletingErrand,
          });
    } catch (error) {
        console.log(error);
    }
}

const updateErrand = async (req, res) => {
    try {
        const updatingErrand = await errandService.updateErrandById();

        return res.send({
            status: "201",  
            statusMessage: "Updated Successfully ",
            data: updatingErrand,
          });
    } catch (error) {
        console.log(error);
    }
}

const fetchErrand = async (req, res) => {
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

export { errnadBid, findErrand, deleteErrand, updateErrand, fetchErrand, fetchAllErrands }