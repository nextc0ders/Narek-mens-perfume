class Shopping {

	handlerClose() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render() {
		
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({id, name, price}) => {
			if(productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">⚡ ${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()} ֏</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		const html = `
			<div class="shopping-container">
				<div title="Close" class="shopping__close" onclick="shoppingPage.handlerClose()">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="150px" height="150px">
						<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
					</svg>
				</div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">🫰 Arjeq:</td>
						<td class="shopping-element__price">${sumCatalog.toLocaleString()} ֏</td>
					</tr>
				</table>
				<button class="buy-now">Patvirel</button>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;

	}

}

const shoppingPage = new Shopping();