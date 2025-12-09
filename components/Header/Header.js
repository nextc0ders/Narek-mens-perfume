class Header {

	handlerOpenShoppingPage() {
		shoppingPage.render();
	}
	
	render(count) {
		const html = `
			<div class="header-container">
				<div class="logo">
					Narek <span>Men's Perfume</span>
				</div>
				<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()">
					🔥 ${count}
				</div>
			</div>
		`;

		ROOT_HEADER.innerHTML = html;
	}

}

const headerPage = new Header();