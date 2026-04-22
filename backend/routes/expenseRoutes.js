const express = require("express");
const router = express.Router();

const Expense = require("../models/expense");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, async (req,res)=>{

  const expense = new Expense({
    userId:req.user.id,
    ...req.body
  });

  await expense.save();

  res.json(expense);

});


router.get("/", authMiddleware, async (req,res)=>{

  const expenses = await Expense.find({
    userId:req.user.id
  });

  res.json(expenses);

});

module.exports = router;