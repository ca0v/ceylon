import { expect, AssertionError } from "../index";

describe("AssertionError", () => {
    it("returns an Error object", () => {
        const error = AssertionError({
            message: "Error message"
        });

        expect(error).toBeAn(Error);
    });

    it("sets the error.message property", () => {
        const error = AssertionError({
            message: "Error message"
        });

        expect(error.message).toBe("Error message");
    });

    it("sets does not set the actual, expected, or showDiff properties when unspecified", () => {
        const error = AssertionError({
            message: "Error message"
        });

        expect((<any>error)["actual"]).toNotExist();
        expect((<any>error)["expected"]).toNotExist();
        expect((<any>error)["showDiff"]).toNotExist();
    });

    it("sets the actual, expected, and showDiff properties when specified", () => {
        const error = AssertionError({
            actual: "I ate an apple",
            expected: "I ate an orange",
            message: "Error message",
            showDiff: true
        });

        expect((<any>error)["actual"]).toBe("I ate an apple");
        expect((<any>error)["expected"]).toBe("I ate an orange");
        expect((<any>error)["showDiff"] as boolean).toBeTrue();
    });
});
