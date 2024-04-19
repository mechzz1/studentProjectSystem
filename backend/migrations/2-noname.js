'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Projects", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2024-04-19T13:02:25.381Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Projects",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "title": {
                "type": Sequelize.STRING,
                "field": "title",
                "allowNull": false
            },
            "startDate": {
                "type": Sequelize.DATE,
                "field": "startDate",
                "allowNull": false
            },
            "endDate": {
                "type": Sequelize.DATE,
                "field": "endDate",
                "allowNull": false
            },
            "description": {
                "type": Sequelize.STRING,
                "field": "description",
                "allowNull": false
            },
            "phase": {
                "type": Sequelize.ENUM('design', 'development', 'testing', 'deployment', 'completed'),
                "field": "phase",
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
