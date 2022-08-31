"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("../User/infrastructure/Routes/userRouter"));
const supertest_1 = __importDefault(require("supertest"));
describe('Routes', () => {
    test('should response with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(userRouter_1.default).get('/').send();
        expect(response.statusCode).toBe(200);
    }), 30000);
});
//# sourceMappingURL=user.test.js.map