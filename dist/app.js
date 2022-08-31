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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./User/infrastructure/DB/connection"));
const connection_2 = __importDefault(require("./Character/infrastructure/DB/connection"));
const movieRouter_1 = __importDefault(require("./Movies_Series/infrastructure/Routes/movieRouter"));
const userRouter_1 = __importDefault(require("./User/infrastructure/Routes/userRouter"));
const characterRouter_1 = __importDefault(require("./Character/infrastructure/Routes/characterRouter"));
class Server {
    constructor() {
        this.apiPath = {
            user: '/api/user',
            character: '/api/character',
            movie: '/api/movies'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.Middlewares();
        this.port = parseInt(process.env.PORT) || 3000;
        this.Routes();
        this.Listen();
        this.DbInithialize();
    }
    Middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Starting Server on Port --> ' + this.port);
        });
    }
    DbInithialize() {
        return __awaiter(this, void 0, void 0, function* () {
            connection_1.default;
            yield connection_2.default.sync({ force: false }).then(() => console.log('DB Character SQL Connected Successful'))
                .catch(error => console.log(error));
        });
    }
    Routes() {
        this.app.use(this.apiPath.user, userRouter_1.default);
        this.app.use(this.apiPath.character, characterRouter_1.default);
        this.app.use(this.apiPath.movie, movieRouter_1.default);
    }
}
new Server();
//# sourceMappingURL=app.js.map