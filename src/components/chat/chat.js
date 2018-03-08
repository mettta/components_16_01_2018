'use strict';

export class Chat {
	constructor({el, data = {messages: []}}) {
		this.el = el;
		this.blockname = 'chat';
		this.el.classList.add(this.blockname);

		this._scrollStrategy = 'bottom';

		this.data = data;
		this._initEvents();
	}

	_initEvents() { }

	render({scroll} = {}) {
		this._saveScrollTop();

		this.el.innerHTML = `<ul class="chat__messages">${
			this._getMessagesHtml()}</ul>`;

		this._restoreScrollTop(scroll);
	}

	_saveScrollTop() {
		this._scrollTop = this.el.scrollTop;
	}

	_restoreScrollTop() {
		switch (this._scrollStrategy) {
			case 'bottom':
				this.el.scrollTop = this.el.scrollHeight;
				break;
			case 'fixed':
				this.el.scrollTop = this._scrollTop;
		}
	}

	// setMessages(messages) {
	// 	this.data.messages.length = 0;
	// 	this.add(messages);
	// }

	setScrollStrategy(strategy) {
		this._scrollStrategy = strategy;
	}

	add(messages) {
		let addOneMessageMethod = this.addMessage.bind(this);

		messages.forEach(addOneMessageMethod);
	}

	addMessage(message) {
		this.data.messages.push(this._prepareMessage(message));
	}

	_prepareMessage({name, text, date = Date.now(), html}) {
		return {
			name,
			isMine: name === this.data.user,
			text,
			date: new Date(date),
			html
		};
	}

	setUserName(name) {
		this.data.user = name;
	}



	// html

	_getMessagesHtml() {
		return this.data.messages
			.map((message) => 
			`<li class="chat__message"><span class="chat__message_name">${
			message.name ? message.name : `<span class="chat__user_placeholder">${DEFAULT_USER_NAME}</span>`
			}</span>: <span class="chat__message_text">${
			message.text ? message.text : `<span class="chat__message_placeholder">промолчал...</span>`
			}</span></li>`)
			.join(``);
	}
}

