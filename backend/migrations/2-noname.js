'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "creatorId" from table "Users"
 * removeColumn "role" from table "Users"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2022-09-16T11:08:35.633Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Users", "creatorId"]
    },
    {
        fn: "removeColumn",
        params: ["Users", "role"]
    }
];

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
