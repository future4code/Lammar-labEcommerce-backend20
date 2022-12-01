"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server Ready!");
});
exports.default = app;
//# sourceMappingURL=app.js.map