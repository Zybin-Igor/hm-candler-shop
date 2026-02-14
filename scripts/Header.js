class Header {

	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	}
	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
		this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
		
	}

}

const menuBtn = document.querySelector('.header_burger-button');

export default Header