'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "userId" to table "Projects"
 *
 **/

var info = {
    "revision": 3,
    "name": "noname",
    "created": "2024-04-19T13:04:00.956Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Projects",
        "userId",
        {
            "type": Sequelize.INTEGER,
            "field": "userId",
            "onUpdate": "CASCADE",
            "onDelete": "SET NULL",
            "references": {
                "model": "Users",
                "key": "id"
            },
            "allowNull": true
        }
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
