import { expect } from "../../index";

describe("(<any>expect(undefined))", () => {
    describe("toExist", () => {
        it("throws", () => {
            expect(() => (<any>expect(undefined)).toExist()).toThrow();
        });
    });

    describe("toNotExist", () => {
        it("does not throw", () => {
            (<any>expect(undefined)).toNotExist();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => (<any>expect(undefined)).toNotExist(null as any)).toThrow();
        });

        it("is chainable", () => {
            (<any>expect(undefined))
                .toNotExist()
                .toNotExist();
        });
    });

    describe("toBe", () => {
        it("does not throw when assertion passes", () => {
            (<any>expect(undefined)).toBe(undefined);
        });

        it("throws when assertion fails", () => {
            expect(() => (<any>expect(undefined)).toBe(1 as any)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => (<any>expect(undefined)).toBe(undefined, null as any)).toThrow();
        });

        it("is chainable", () => {
            (<any>expect(undefined))
                .toBe(undefined)
                .toBe(undefined);
        });
    });

    describe("toNotBe", () => {
        it("does not throw when assertion passes", () => {
            (<any>expect(undefined)).toNotBe(1 as any);
        });

        it("throws when assertion fails", () => {
            expect(() => (<any>expect(undefined)).toNotBe(undefined)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => (<any>expect(undefined)).toNotBe(1 as any, null as any)).toThrow();
        });

        it("is chainable", () => {
            (<any>expect(undefined))
                .toNotBe(1 as any)
                .toNotBe(1 as any);
        });
    });

    describe("toEqual", () => {
        it("does not throw when assertion passes", () => {
            (<any>expect(undefined)).toEqual(undefined);
        });

        it("throws when assertion fails", () => {
            expect(() => (<any>expect(undefined)).toEqual(1 as any)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => (<any>expect(undefined)).toEqual(undefined, null as any)).toThrow();
        });

        it("is chainable", () => {
            (<any>expect(undefined))
                .toEqual(undefined)
                .toEqual(undefined);
        });
    });

    describe("toNotEqual", () => {
        it("does not throw when assertion passes", () => {
            (<any>expect(undefined)).toNotEqual(1 as any);
        });

        it("throws when assertion fails", () => {
            expect(() => (<any>expect(undefined)).toNotEqual(undefined)).toThrow();
        });

        it("throws when called with invalid arguments", () => {
            expect(() => (<any>expect(undefined)).toNotEqual(1 as any, null as any)).toThrow();
        });

        it("is chainable", () => {
            (<any>expect(undefined))
                .toNotEqual(1 as any)
                .toNotEqual(1 as any);
        });
    });
});
