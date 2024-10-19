import express from "express";
import { userDetail } from "../models/userDetailsModel.js";

const router = express.Router();

// Add new user
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.emailId ||
      !req.body.password
    ) {
      return res.status(200).send({ message: "Send all required fields" });
    }
    const findUser = await userDetail.find({ emailId: req.body.emailId });
    if (findUser.length !== 0) {
      return res.status(200).send({ message: "Email id already taken" });
    }
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      password: req.body.password,
      receiveEmails: req.body.receiveEmails,
    };
    const user = await userDetail.create(newUser);
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get user
router.put("/checkValidUser", async (req, res) => {
  try {
    const findUser = await userDetail.find({ emailId: req.body.emailId });
    if (findUser.length === 0) {
      return res.status(200).send({ message: "Email is not valid" });
    }
    console.log(findUser)
    if (findUser[0].password !== req.body.password) {
      return res.status(200).send({ message: "Password is wrong" });
    }
    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
export default router;
