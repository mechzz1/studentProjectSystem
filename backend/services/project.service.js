const db = require("../models/index.js");

class Project {
  constructor() {}

  static async insertOrUpdate(data) {
    return await db.Project.upsert(data, {
      returning: true,
    });
  }
  static async getAll(whereClause = {}) {
    return await db.Project.findAll(whereClause);
  }
  static async getOne(whereClause) {
    return await db.Project.findOne(whereClause);

  }
  static async update(updateClause, whereClause) {
    return await db.Project.update(updateClause, whereClause);
  }
}

module.exports = Project;