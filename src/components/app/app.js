import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

export class App {
	constructor({el}) {
		this.el = el;

		this.chat = new Chat({
			el: document.createElement('div')
		});

		this.form = new Form({
			el: document.createElement('div'),
			onSubmit: this._onFormSubmit.bind(this)
		});

		this.el.append(this.chat.el, this.form.el);

		fetch('_data/chat.json').
			then((res) => res.json()).
			then(({chat}) => {
				this.chat.add(chat.messages);
				this.render();
			});

		this.render();
	}

	render() {
		this.chat.render();
		this.form.render();
	}

	_onFormSubmit({text}) {
		this.chat.addMessage({
			text,
			name: 'Me'
		});
		this.render();
	}
}
