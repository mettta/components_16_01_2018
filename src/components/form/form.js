export class Form {
	constructor({el, template, onSubmit}) {
		this.el = el;
		this.template = template;
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
		this.el.innerHTML = this.template({
			blockname: this.blockname
		});
	}
}
