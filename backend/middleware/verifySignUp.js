/**
 * models import
 */
const db = require("../models/index.js");
/**
 * middleware function to check if entered email already exists in database
 */
checkDuplicateEmail = (req, res, next) => {
  console.log("a;sdfno'sdfiaskodsf87asd8f7sa8d7fsd49f4sd94fsd98f498sd4f98sd498f4sd98f9s84d94 hara hiri hu ha hu ha hu ha")
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((admin) => {
    if (admin) {
      res.status(400).send("Email is already in use");
      return;
    }
    next();
  });
};
/**
 * signUpVerify object exports functions in the router file
 */
const signUpVerify = {};
signUpVerify.checkDuplicateEmail = checkDuplicateEmail;
/**
 * Documentaion for an Object
 * signUpVerify is exported to be used in other files
 * @signUpVerify
 */
module.exports = signUpVerify;