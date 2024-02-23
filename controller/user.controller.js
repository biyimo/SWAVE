import userService from "../services/user.service.js";
import errandService from "../services/errand.service.js";

// CREATE USER / PROFILE
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    occupation,
    state,
    userName,
  } = req.body;

  try {
    const newUser = await userService.createUser(
      firstName,
      lastName,
      email,
      password,
      address,
      occupation,
      state,
      userName
    );
    return res.send({
      status: "201",
      statusMessage: "Registraton Successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

//  LOGIN USER
const loginUser = async (req, res) => {


    // collect your input
  const { userName, password } = req.body;
  

  try {


    //check if the email/username collected exists
    const existingUser = await userService.fetchByUsername(userName);
    console.log(existingUser);
    if (!existingUser)
      return res.json({
        status: 400,
        statusMessage: "Invalid Username or Password",
      });

    if (existingUser && existingUser.password === password) {
      console.log("Login Successful");
      return res.json({
        status: 400,
        statusMessage: "Successfully Login",
        data: existingUser
      });

    } else {
      console.log("Invalid Username or Password");
      return res.json({
        status: 400,
        statusMessage: "Invalid Username or Password",
      });

    }

    //if true, compare the password of the existing user and the one collected

    // if the match, ,login successful
  } catch (error) {
    console.log(error);
  }
};

// FETCH OWNER ID 
const fetchOwnerId = async (req, res) => {
  try {
    const fetchtingOwner = await errandService.fetchErrandByOwnerId();

    return res.send({
      status: "201",
      statusMessage: "Fetched Successfully ",
      data: fetchtingOwner,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, loginUser, fetchOwnerId };
