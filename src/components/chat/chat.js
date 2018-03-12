'use strict';

export class Chat {
	constructor({el, template, data = {messages: []}}) {
		this.el = el;
		this.template = template;
		this.blockname = 'chat';
		this.el.classList.add(this.blockname);

		this._scrollStrategy = 'bottom';
		this._scrollPos = 0;

		this.data = data;
		this._initEvents();
	}

	_initEvents() { }

	render() {
		this._saveScrollTop();

		this.el.innerHTML = this.template({
			blockname: this.blockname,
			messages: this.data.messages
		});

		this._restoreScrollTop(scroll);
	}

	_saveScrollTop() {
		this._scrollPos = this.el.scrollTop;
	}

	_restoreScrollTop() {
		switch (this._scrollStrategy) {
			case 'bottom':
				this.el.scrollTop = this.el.scrollHeight;
				break;
			case 'fixed':
				this.el.scrollTop = this._scrollPos;
		}
	}

	setMessages(messages) {
		this.data.messages.length = 0;
		this.add(messages);
	}

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
}

