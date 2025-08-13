import test, { suite } from "node:test";
import { env } from "./index.js";
import assert from "node:assert";


suite("Env expects env variables to be set", () => {
    test("it works if the env is set", () => {
        assert.ok(env.HOME, "Home variable is set");
    });

    test("it throws is the env is not set", () => {
        assert.throws(() => assert.ok(env.FOO_BAR, "FOO_BAR is set"), /process.env.FOO_BAR is not set!/)
    })
})