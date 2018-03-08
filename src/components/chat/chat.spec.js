'use strict';

const assert = chai.assert;
const expect = chai.expect;

import {Chat as Module} from './chat.js';

let Instance = new Module({
	el: document.createElement('div'),
	data: {}
});

describe("Chat", function() {
	describe("Chat. Formal tests", function() {

		it('Chat should be a function', function() {
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

		it('Instance should contains blockname property, and blockname should be a string', function() {
			expect(Instance).to.have.property('blockname');
			expect(Instance.blockname).to.be.an('string');
		});

		it('Instance should contains render() function', function() {
			expect(Instance).to.have.property('render').an('function');
		});
	});

});