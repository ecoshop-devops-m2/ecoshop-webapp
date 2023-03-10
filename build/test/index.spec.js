"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const src_1 = require("../src");
(0, globals_1.describe)('helloTest', () => {
    (0, globals_1.test)('expect run to return Hello World msg', () => {
        (0, globals_1.expect)((0, src_1.run)()).toMatch('Hello World !');
    });
});
