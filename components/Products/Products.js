class Products {

	constructor() {
		this.classNameActive = 'products-element__btn_active';
		this.labelAdd = 'Add to cart';
		this.labelRemove = 'Remove from cart';
	}

	handleSetLocationStorage(element, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id);

		if(pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}
	}

	render() {
		let htmlCatalog = '';

		CATALOG.forEach(({id, name, price, img}) => {

			htmlCatalog += `
				<li class="products-element">
					<span class="products-element__name">${name}</span>
					<img class="products-element__img" src="${img}"/>
					<span class="products-element__price">
						⚡ ${price.toLocaleString()} ֏
					</span>
					<button class="products-element__btn">Add to cart</button>
				</li>
			`;
		});

		const html = `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}

}

const productsPage = new Products();
productsPage.render();