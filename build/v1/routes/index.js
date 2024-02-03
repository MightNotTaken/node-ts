"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var example_route_1 = __importDefault(require("./example.route"));
var routes = express_1.default.Router();
routes.use("/example", example_route_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map