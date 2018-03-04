export class Form {
	constructor({el, onUserData}) {
		this.el = el;
		this.onUserData = onUserData;
		this.blockname = 'chatform';
		this._initEvents();
	}

	_initEvents() {
		this.el.addEventListener('submit', this._onSubmit.bind(this));
	}

	_onSubmit(event) {
		event.preventDefault();
		const formEl = event.target;
		const messageData = {};

		Array.from(formEl.querySelectorAll('[name]')).forEach((el) => {
			messageData[el.name] = el.value;
		});

		this.onUserData(messageData);

		this.el.querySelector('form').reset();
	}

	render() {
		this.el.classList.add(this.blockname);
		this.el.innerHTML = `
			<form>
				<input class="${this.blockname}__nickname_input" name="nickname" type="text" placeholder="Ваше имя"></input>
				<br>
				<textarea class="${this.blockname}__text_input" name="text" placeholder="Сообщение:"></textarea>
				<input class="${this.blockname}__button_send" type="submit" value="Отправить">
			</form>
		`;
	}
}
