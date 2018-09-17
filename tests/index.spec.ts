import { expect, Expectation } from "../index";

describe("expect", () => {
    it("creates a new Expectation object", () => {
        const sut = expect(true);

        expect(sut).toExist();
        expect(sut).toBeAn(Expectation);
    });
});
