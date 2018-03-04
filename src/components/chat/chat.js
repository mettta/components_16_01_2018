'use strict';

export const DEFAULT_USER_NAME = '%username%';

export class Chat {
	constructor({el, data}) {
		this.el = el;
		this.blockname = 'chat';
		this.data = {
			nickname: DEFAULT_USER_NAME,
			messages: [
				{
					nickname: 'iketari',
					text: 'Как оно вам?',
					data: new Date(),
				},
				{
					nickname: 'Алексей',
					text: 'Много методов!',
					data: new Date(),
				},
			],
		};
	}

	addMessage(messageObj) {
		this.data.messages.push(messageObj);
		this.render();
	}

	render() {
		this.el.classList.add(this.blockname);
		this.el.innerHTML = `
				<ul class="chat__messages">
					${this._getMessagesHtml()}
				</ul>
		`;
	}

	_getMessagesHtml() {
		return this.data.messages
			.map((messageObj) => 
			`<li class="chat__message"><span class="chat__message_nickname">${
			messageObj.nickname ? messageObj.nickname : `<span class="chat__user_placeholder">${DEFAULT_USER_NAME}</span>`
			}</span>: <span class="chat__message_text">${
			messageObj.text ? messageObj.text : `<span class="chat__message_placeholder">промолчал...</span>`
			}</span></li>`)
			.join(``);
	}
}

