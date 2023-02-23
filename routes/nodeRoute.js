const express = require("express");
const { postTask, getTasks, deleteTask } = require("../controller/tasks.js");
const router = express.Router();

router.route("/");
