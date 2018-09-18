import expect from "./ceylon/index";
import assert, { IAssertOptions } from "./ceylon/assert";
import { equal as deepEqual } from "./ceylon/fast-deep-equal";
import AssertionError, { IAssertionErrorOptions } from "./ceylon/assertion-error";
import Expectation from "./ceylon/expectation";

export { assert, expect, Expectation, IAssertOptions, AssertionError, IAssertionErrorOptions, deepEqual };
export default expect;
