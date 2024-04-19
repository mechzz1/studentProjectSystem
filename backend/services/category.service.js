const db = require("../models/index.js");

class Category {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Category.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Category.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Category.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Category.update(updateClause, whereClause);
  }
}

module.exports = Category;