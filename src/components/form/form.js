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
	}

	render() {
		this.el.innerHTML = formTemplate({
			blockname: this.blockname
		});
	}
}
