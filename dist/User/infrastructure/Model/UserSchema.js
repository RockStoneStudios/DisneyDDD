"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        Option: {
            min: 1,
            max: 120
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        Option: {
            minlength: 6
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: false
});
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=UserSchema.js.map