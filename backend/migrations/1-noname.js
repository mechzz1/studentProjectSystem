'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2022-09-16T11:06:38.658Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Users",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "firstName": {
                "type": Sequelize.STRING,
                "field": "firstName",
                "allowNull": false
            },
            "lastName": {
                "type": Sequelize.STRING,
                "field": "lastName",
                "allowNull": false
            },
            "email": {
                "type": Sequelize.STRING,
                "field": "email",
                "unique": true,
                "allowNull": false
            },
            "password": {
                "type": Sequelize.STRING,
                "field": "password",
                "allowNull": false
            },
            "role": {
                "type": Sequelize.ENUM('Client', 'Admin', 'Super Admin'),
                "field": "role",
                "defaultValue": "Client"
            },
            "creatorId": {
                "type": Sequelize.INTEGER,
                "field": "creatorId",
                "allowNull": true
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
