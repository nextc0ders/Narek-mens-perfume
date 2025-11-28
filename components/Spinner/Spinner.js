class Spinner {

	render() {
		const html = `
			<div class="spinner-container">
				<img class="spinner__image" src="components/Spinner/img/spinner.svg" />
			</div>
		`;
		ROOT_SPINNER.innerHTML = html;
	}

}

const spinnerPage = new Spinner();
spinnerPage.render();