"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    start() {
        this.app.listen(3000, () => {
            console.log('server runnig');
        });
    }
}
exports.default = application;
