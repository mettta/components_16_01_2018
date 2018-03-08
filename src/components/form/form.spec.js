'use strict';

const assert = chai.assert;
const expect = chai.expect;

import {Form as Module} from './form.js';

let Instance = new Module({
	el: document.createElement('div'),
	onSubmit: () => {},
});

describe("Form", function() {
	describe("Form. Formal tests", function() {

		it('Form should be a function', function() {
			expect(Module).to.be.an('function');
		});
	
		it('Instance should be an object', function() {
			expect(Instance).to.be.an('object');
		});

		it('Instance should contains el property', function() {
			expect(Instance).to.have.property('el');
		});

		it('Instance.el should be a HTML Element', function() {
			expect(Instance.el).to.be.an.instanceof(Object);
			expect(Instance.el).to.be.an.instanceof(HTMLElement);
		});

		it('Instance should contains _onSubmit property', function() {
			expect(Instance).to.have.property('_onSubmit');
		});

		it('Instance._onSubmit should be a function', function() {
			expect(Instance._onSubmit).to.be.an('function');
		});

		it('Instance should contains blockname property, and blockname should be a string', function() {
			expect(Instance).to.have.property('blockname');
			expect(Instance.blockname).to.be.an('string');
		});

		it('Instance should contains render() function', function() {
			expect(Instance).to.have.property('render').an('function');
		});
	});

});