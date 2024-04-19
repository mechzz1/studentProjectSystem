const express = require("express");

const router = express.Router();

const checkAuth = require("../middleware/verifyJwtToken");

const CategoryController = require("../controllers/category.controller");



router.post(
      "/addCategory",
      [checkAuth.verifyToken],
      CategoryController.addCategory
);

// router.post(
//       "/getExpense",
//       [checkAuth.verifyToken],
//       ExpenseController.getExpense
// );
// router.post(
//       "/getExpenseHeadinfo",
//       [checkAuth.verifyToken],
//       ExpenseController.getExpenseHeadinfo
// );
// router.post(
//       "/addExpenseHead",
//       [checkAuth.verifyToken],
//       ExpenseController.addExpenseHead
// );
// router.post(
//       "/addExpense",
//       [checkAuth.verifyToken],
//       ExpenseController.addExpense
// );
// router.post(
//       "/editExpenseHead",
//       [checkAuth.verifyToken],
//       ExpenseController.editExpenseHead
// );
// router.post(
//       "/deleteExpense",
//       [checkAuth.verifyToken],
//       ExpenseController.deleteExpense
// );

module.exports = router;