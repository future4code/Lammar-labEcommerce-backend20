"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createCharacter_1 = require("./endPoints/createCharacter");
const deleteCharacter_1 = require("./endPoints/deleteCharacter");
const getAllCharacters_1 = require("./endPoints/getAllCharacters");
app_1.default.get("/character", getAllCharacters_1.default);
app_1.default.put("/character", createCharacter_1.default);
app_1.default.delete("/character/id", deleteCharacter_1.default);
//# sourceMappingURL=index.js.map