import {describe, expect, test} from "@jest/globals";
import {run} from "../src";

describe('helloTest', () => {
    test('expect run to return Hello World msg', () => {
        expect(run()).toMatch('Hello World !');
    });
});