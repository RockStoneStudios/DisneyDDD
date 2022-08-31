"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOut = exports.generateSignature = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateSignature = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.TOKEN_SECRET);
};
exports.generateSignature = generateSignature;
const checkOut = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
            req.user = decoded.id;
            return next();
        }
        catch (error) {
            return res.status(403).json({ message: "Forbidden" });
        }
    }
    return res.status(401).json({ message: "Token Invalid" });
};
exports.checkOut = checkOut;
//# sourceMappingURL=Signature.js.map