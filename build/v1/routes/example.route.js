"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var example_controller_1 = __importDefault(require("../controllers/example.controller"));
var router = express_1.default.Router();
router.get("/test", example_controller_1.default.func);
exports.default = router;
//# sourceMappingURL=example.route.js.map