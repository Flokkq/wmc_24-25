"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var mongoose_1 = require("mongoose");
var playerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    nationality: { type: String, required: true },
    age: { type: Number, required: true },
    ranking: { type: Number, required: true },
});
exports.Player = mongoose_1.default.model("Player", playerSchema);
