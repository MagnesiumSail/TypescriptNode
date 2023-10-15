"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMethods = exports.createHeaders = exports.Token = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Token = process.env.TOKEN || '';
const createHeaders = () => ({
    'ContentType': 'application/json',
    'Authorization': `Bearer ${exports.Token}`,
});
exports.createHeaders = createHeaders;
const createMethods = (method) => ({
    method,
    header: (0, exports.createHeaders)()
});
exports.createMethods = createMethods;
