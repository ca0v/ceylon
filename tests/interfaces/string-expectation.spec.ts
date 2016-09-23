﻿import { checkThrows } from '../helpers';
import expect from '../../src/index';

describe('expect(string)', () => {
	describe('toExist', () => {
		it('does not throw', () => {
			expect('string').toExist();
			expect('').toExist();
		});

		it('is chainable', () => {
			expect('string').toExist().toExist();
		});
	});

	describe('toNotExist', () => {
		it('throws', () => {
			checkThrows(() => expect('string').toNotExist());
			checkThrows(() => expect('').toNotExist());
		});
	});

	describe('toBe', () => {
		it('does not throw when assertion passes', () => {
			expect('string').toBe('string');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('string').toBe('different'));
		});

		it('is chainable', () => {
			expect('string').toBe('string').toBe('string');
		});
	});

	describe('toNotBe', () => {
		it('does not throw when assertion passes', () => {
			expect('string').toNotBe('different');
		});

		it('throws when assertion fails', () => {
			checkThrows(() =>  expect('string').toNotBe('string'));
		});

		it('is chainable', () => {
			expect('string').toNotBe('different').toNotBe('different');
		});
	});

	describe('toEqual', () => {
		it('does not throw when assertion passes', () => {
			expect('string').toEqual('string');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('string').toEqual('different'));
		});

		it('is chainable', () => {
			expect('string').toEqual('string').toEqual('string');
		});
	});

	describe('toNotEqual', () => {
		it('does not throw when assertion passes', () => {
			expect('string').toNotEqual('different');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('string').toNotEqual('string'));
		});

		it('is chainable', () => {
			expect('string').toNotEqual('different').toNotEqual('different');
		});
	});

	describe('toMatch', () => {
		it('does not throw when assertion passes', () => {
			expect('I am a string').toMatch(/^.*string$/);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('I am a string').toMatch(/^.*number$/));
		});

		it('is chainable', () => {
			expect('I am a string').toMatch(/^.*string$/).toMatch(/^.*string$/);
		});
	});

	describe('toNotMatch', () => {
		it('does not throw when assertion passes', () => {
			expect('I am a string').toNotMatch(/^.*number$/);
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('I am a string').toNotMatch(/^.*string$/));
		});

		it('is chainable', () => {
			expect('I am a string').toNotMatch(/^.*number$/).toNotMatch(/^.*number$/);
		});
	});

	describe('toInclude / toContain', () => {
		it('does not throw when assertion passes', () => {
			expect('I am a string').toInclude('string');
			expect('I am a string').toContain('string');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('I am a string').toInclude('number'));
			checkThrows(() => expect('I am a string').toContain('number'));
		});

		it('is chainable', () => {
			expect('I am a string').toInclude('string').toInclude('string');
			expect('I am a string').toContain('string').toContain('string');
		});
	});

	describe('toExclude / toNotInclude / toNotContain', () => {
		it('does not throw when assertion passes', () => {
			expect('I am a string').toNotInclude('number');
			expect('I am a string').toNotContain('number');
		});

		it('throws when assertion fails', () => {
			checkThrows(() => expect('I am a string').toNotInclude('string'));
			checkThrows(() => expect('I am a string').toNotContain('string'));
		});

		it('is chainable', () => {
			expect('I am a string').toNotInclude('number').toNotInclude('number');
			expect('I am a string').toNotContain('number').toNotContain('number');
		});
	});
});
