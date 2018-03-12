import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

const CHAT_ENDPOINT = 'https://simple-chat-ff0c4.firebaseio.com/chat.json';

export class App {
	constructor({el}) {
		this.el = el;

		this.chat = new Chat({
			el: document.createElement('div'),
			template: chatTemplate
		});

		this.form = new Form({
			el: document.createElement('div'),
			template: formTemplate,
			onSubmit: this._onFormSubmit.bind(this)
		});

		this.el.append(this.chat.el, this.form.el);

		setInterval(this.fetchData.bind(this), 1000);
		this.render();
	}

	fetchData() {
		if(document.visibilityState !== 'visible') {
			return;
		}

		fetch(CHAT_ENDPOINT).
		then((res) => res.json()).
		then((data) => {
			this.chat.setMessages(Object.values(data));
			this.chat.render();
		});
	}

	postData(data) {
		fetch(CHAT_ENDPOINT, {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(data), 
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
	}

	render() {
		this.chat.render();
		this.form.render();
	}

	_onFormSubmit(messageData) {
		this.form.reset();
		this.postData(messageData);
	}
}
