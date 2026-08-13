import test, { suite } from "node:test";
import { env } from "./index.js";
import assert from "node:assert";


suite("Env expects env variables to be set", () => {
    test("it works if the env is set", () => {
        assert.ok(env.HOME, "Home variable is set");
    });

    test("it throws is the env is not set", () => {
        delete process.env.FOO_BAR;
        assert.throws(() => env.FOO_BAR, /process.env.FOO_BAR is not set!/)
    })

    for (const value of ["", "0", "false"]) {
        test(`it returns a falsy value ${JSON.stringify(value)} without throwing`, (t) => {
            process.env.FALSY_VALUE = value;
            t.after(() => {
                delete process.env.FALSY_VALUE;
            });

            assert.strictEqual(env.FALSY_VALUE, value);
        })
    }

    test("it throws again once a set variable is removed", () => {
        process.env.TEMPORARY_VALUE = "";
        assert.strictEqual(env.TEMPORARY_VALUE, "");

        delete process.env.TEMPORARY_VALUE;
        assert.throws(() => env.TEMPORARY_VALUE, /process.env.TEMPORARY_VALUE is not set!/)
    })
})
