function createElement(elementType, elementClasses, elementContent) {
	const element = document.createElement(elementType);
	if (Array.isArray(elementClasses)) {
		elementClasses.forEach((className) => {
			element.classList.add(className);
		});
	}
	if (elementContent) {
		element.innerText = elementContent;
	}
	return element;
}

export { createElement };
