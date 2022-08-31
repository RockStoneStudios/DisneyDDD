"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.connect(process.env.DB || 'mongodb://localhost:27017/DDDisney')
    .then(() => console.log('Connected MongoDB Database Successfull'))
    .catch(error => { console.log(error); });
//# sourceMappingURL=connection.js.map