"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    try {
        await mongoose_1.default.connect("mongodb://localhost:27017/node-tutorial");
        console.log("server iniciado");
    }
    catch (_a) {
        console.log("Error");
    }
}
exports.default = connect;
