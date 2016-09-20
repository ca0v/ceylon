﻿import { throwsError } from './helpers';
import Expectation from '../../src/expectations/function-expectation';

describe('FunctionExpectation', () => {
	describe('toThrow', () => {
		it('should not throw an error when the tested function throws an error', () => {
			const expect = new Expectation(() => { throw new Error() });

			expect.toThrow();
		});

		it('should not throw an error when the tested function throws an error with the specified message', () => {
			const expect = new Expectation(() => { throw new Error('An Error') });

			expect.toThrow('An Error');
		});

		it('should not throw an error when the tested function throws an error of the specified type', () => {
			const expect = new Expectation(() => { throw new ReferenceError() });

			expect.toThrow(ReferenceError);
		});

		it('should throw an error when the tested function does not throw an error', () => {
			const expect = new Expectation(() => true);

			throwsError(() => expect.toThrow());
		});
	});

	describe('toNotThrow', () => {
		it('should not throw an error when the tested function does not throw an error', () => {
			const expect = new Expectation(() => true);

			expect.toNotThrow();
		});

		it('should throw an error when the tested function throws an error', () => {
			const expect = new Expectation(() => { throw new Error() });

			throwsError(() => expect.toNotThrow());
		});
	});
});