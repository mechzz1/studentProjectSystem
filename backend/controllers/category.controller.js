const CategoryController = {};
// const ExpenseHeadService = require("../services/expenseHead.service.js");
const CategoryService = require("../services/category.service.js");
const db = require('../models/index.js');




CategoryController.addCategory = async (req, res) => {
      try {
            const category = await CategoryService.insertOrUpdate(req.body);
            res.status(200).send({
                  code: 200,
                  message: "Category created Successfully",
                  data: category,
            });
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};



module.exports = CategoryController;
