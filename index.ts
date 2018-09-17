import expect from "./src/index";
import assert, { IAssertOptions } from "./src/assert";
import { equal as deepEqual } from "./src/fast-deep-equal";
import AssertionError, { IAssertionErrorOptions } from "./src/assertion-error";
import Expectation from "./src/expectation";

export { assert, expect, Expectation, IAssertOptions, AssertionError, IAssertionErrorOptions, deepEqual };
