import { expect } from "../../index";

describe("expect(undefined)", () => {
    describe("toExist", () => {
        it("throws", () => {
            expect(() => expect(undefined).toExist()).toThrow();
        });
    });

    describe("toNotExist", () => {
        it("does not throw", () => {
            expect(undefined).toNotExist();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => expect(undefined).toNotExist(null as any)).toThrow();
        });

        it("is chainable", () => {
            expect(undefined)
                .toNotExist()
                .toNotExist();
        });
    });

    describe("toBe", () => {
        it("does not throw when assertion passes", () => {
            expect(undefined).toBe(undefined);
        });

        it("throws when assertion fails", () => {
            expect(() => expect(undefined).toBe(1 as any)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => expect(undefined).toBe(undefined, null as any)).toThrow();
        });

        it("is chainable", () => {
            expect(undefined)
                .toBe(undefined)
                .toBe(undefined);
        });
    });

    describe("toNotBe", () => {
        it("does not throw when assertion passes", () => {
            expect(undefined).toNotBe(1 as any);
        });

        it("throws when assertion fails", () => {
            expect(() => expect(undefined).toNotBe(undefined)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => expect(undefined).toNotBe(1 as any, null as any)).toThrow();
        });

        it("is chainable", () => {
            expect(undefined)
                .toNotBe(1 as any)
                .toNotBe(1 as any);
        });
    });

    describe("toEqual", () => {
        it("does not throw when assertion passes", () => {
            expect(undefined).toEqual(undefined);
        });

        it("throws when assertion fails", () => {
            expect(() => expect(undefined).toEqual(1 as any)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => expect(undefined).toEqual(undefined, null as any)).toThrow();
        });

        it("is chainable", () => {
            expect(undefined)
                .toEqual(undefined)
                .toEqual(undefined);
        });
    });

    describe("toNotEqual", () => {
        it("does not throw when assertion passes", () => {
            expect(undefined).toNotEqual(1 as any);
        });

        it("throws when assertion fails", () => {
            expect(() => expect(undefined).toNotEqual(undefined)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => expect(undefined).toNotEqual(1 as any, null as any)).toThrow();
        });

        it("is chainable", () => {
            expect(undefined)
                .toNotEqual(1 as any)
                .toNotEqual(1 as any);
        });
    });
});
