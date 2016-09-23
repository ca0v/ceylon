﻿import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(number)', () => {
	describe('toExist', () => {
		it('does not throw', () => {
			expect(100).toExist();
			expect(-100).toExist();
			expect(0).toExist();
			expect(0.5).toExist();
		});

		it('is chainable', () => {
			expect(100).toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('throws', () => {
			checkThrows(() => expect(100).toNotExist());
			checkThrows(() => expect(-100).toNotExist());
			checkThrows(() => expect(0).toNotExist());
			checkThrows(() => expect(0.5).toNotExist());
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBe(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBe(50));
		});

		it('is chainable', () => {
			expect(100).toBe(100).toBe(100);
		});
	});

	describe('toNotBe', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toNotBe(50);
		});

		it('throws when assertion fails', () => {
			checkThrows(() =>  expect(100).toNotBe(100));
		});

		it('is chainable', () => {
			expect(100).toNotBe(50).toNotBe(50);
		});
	});

	describe('toEqual', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toEqual(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toEqual(50));
		});

		it('is chainable', () => {
			expect(100).toEqual(100).toEqual(100);
		});
	});

	describe('toNotEqual', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toNotEqual(50);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toNotEqual(100));
		});

		it('is chainable', () => {
			expect(100).toNotEqual(50).toNotEqual(50);
		});
	});

	describe('toBeLessThan / toBeFewerThan', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBeLessThan(200);
			expect(100).toBeFewerThan(200);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeLessThan(50));
			checkThrows(() => expect(100).toBeLessThan(100));
			checkThrows(() => expect(100).toBeFewerThan(50));
			checkThrows(() => expect(100).toBeFewerThan(100));
		});

		it('throws when called on a non-number', () => {
			checkThrows(() => expect(undefined)['toBeLessThan'](1));
			checkThrows(() => expect(undefined)['toBeFewerThan'](1));
		});

		it('is chainable', () => {
			expect(100).toBeLessThan(200).toBeLessThan(200);
			expect(100).toBeFewerThan(200).toBeFewerThan(200);
		});
	});

	describe('toBeLessThanOrEqualTo / toBeFewerThanOrEqualTo', () => {
		it('does not throw when assertion passes', () => {
			expect(100).toBeLessThanOrEqualTo(200);
			expect(100).toBeLessThanOrEqualTo(100);
			expect(100).toBeFewerThanOrEqualTo(200);
			expect(100).toBeFewerThanOrEqualTo(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeLessThanOrEqualTo(50));
			checkThrows(() => expect(100).toBeFewerThanOrEqualTo(50));
		});

		it('throws when called on a non-number', () => {
			checkThrows(() => expect(undefined)['toBeLessThanOrEqualTo'](1));
			checkThrows(() => expect(undefined)['toBeFewerThanOrEqualTo'](1));
		});

		it('is chainable', () => {
			expect(100).toBeLessThanOrEqualTo(200).toBeLessThanOrEqualTo(200);
			expect(100).toBeFewerThanOrEqualTo(200).toBeFewerThanOrEqualTo(200);
		});
	});

	describe('toBeGreaterThan / toBeMoreThan', () => {
		it('does not throw when assertion passes', () => {
			expect(200).toBeGreaterThan(100);
			expect(200).toBeMoreThan(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeGreaterThan(200));
			checkThrows(() => expect(100).toBeGreaterThan(100));
			checkThrows(() => expect(100).toBeMoreThan(200));
			checkThrows(() => expect(100).toBeMoreThan(100));
		});

		it('throws when called on a non-number', () => {
			checkThrows(() => expect(undefined)['toBeGreaterThan'](1));
			checkThrows(() => expect(undefined)['toBeMoreThan'](1));
		});

		it('is chainable', () => {
			expect(200).toBeGreaterThan(100).toBeGreaterThan(100);
			expect(200).toBeMoreThan(100).toBeMoreThan(100);
		});
	});

	describe('toBeGreaterThanOrEqualTo / toBeMoreThanOrEqualTo', () => {
		it('does not throw when assertion passes', () => {
			expect(200).toBeGreaterThanOrEqualTo(100);
			expect(200).toBeMoreThanOrEqualTo(100);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect(100).toBeGreaterThanOrEqualTo(200));
			checkThrows(() => expect(100).toBeMoreThanOrEqualTo(200));
		});

		it('throws when called on a non-number', () => {
			checkThrows(() => expect(undefined)['toBeGreaterThanOrEqualTo'](1));
			checkThrows(() => expect(undefined)['toBeMoreThanOrEqualTo'](1));
		});

		it('is chainable', () => {
			expect(200).toBeGreaterThanOrEqualTo(100).toBeGreaterThanOrEqualTo(100);
			expect(200).toBeMoreThanOrEqualTo(100).toBeMoreThanOrEqualTo(100);
		});
	});
});