import { createElement } from '../utility';

export default function createMenu() {
	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	const headingTitle = 'Our menu';
	const navClass = '.menu';
	const mainContent = 'Dishes list';

	const headingTextElement = createElement(
		'p',
		['heading-text'],
		headingTitle
	);

	const mainTextElement = createElement('p', ['main-text'], mainContent);

	document.querySelector(navClass).classList.add('nav-active');
	heading.appendChild(headingTextElement);
	main.appendChild(mainTextElement);
}
