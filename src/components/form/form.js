export class Form {
	constructor({el, onSubmit}) {
		this.el = el;
		this.blockname = 'chatform';
		this.el.classList.add(this.blockname);

		this.el.addEventListener('submit', this._onSubmit.bind(this));
		this.onSubmit = onSubmit;
	}

	_onSubmit(event) {
		event.preventDefault();

		this.onSubmit({
			text: event.target.querySelector('textarea').value
		});

		this.el.querySelector('form').reset();
	}

	render() {
		this.el.innerHTML = `
			<form>
				<textarea class="${this.blockname}__text_input" name="text" placeholder="Сообщение:"></textarea>
				<input class="${this.blockname}__button_send" type="submit" value="Отправить">
			</form>`;
	}
}
