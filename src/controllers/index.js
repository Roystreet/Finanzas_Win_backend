const users = require("../models/users");
let array = [];
const getUsers = async () => {
  try {
    let todos = await users.findAll();

    return todos;
  } catch (err) {
    console.error(err);
  }
};

console.log(getUsers());
